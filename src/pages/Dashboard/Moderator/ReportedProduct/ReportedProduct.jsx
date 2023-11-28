import SectionTitle from "../../../../components/Shared/SectionTitle";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
const ReportedProduct = () => {
  const axiosSecure = useAxiosSecure();
  const { data: reports = [], refetch } = useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reports");
      return res.data;
    },
  });

  const handleDeleteItems = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const repRes = await axiosSecure.delete(`/reports/${item._id}`);
        if (repRes.data.deletedCount) {
          refetch();
          const res = await axiosSecure.delete(`/products/${item.product_id}`);
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Product has been deleted in both side.",
              icon: "success",
              position: "top-end",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        }
      }
    });
  };
  return (
    <div className="mx-10">
      <Helmet>
        <title>Dashboard | Reported Product</title>
      </Helmet>
      <SectionTitle title="Reported Product check" />
      <div className="bg-white">
        <h3 className="p-6 text-3xl font-semibold mt-8">
          Total Reported: {reports.length}
        </h3>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Reported Type</th>
                <th>Visit Product</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reports?.map((item, idx) => (
                <tr key={item._id}>
                  <th>{idx + 1} </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.product_image}
                            alt={item.product_name}
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.product_name}</td>
                  <td>{item.category}</td>
                  <td>
                    <Link to={`/productDetails/${item.product_id}`}>
                      <button className="btn btn-outline btn-primary">
                        View Details
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItems(item)}
                      className="btn bg-[#B91C1C] text-white btn-xl"
                    >
                      <FaTrash className="text-lg" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReportedProduct;
