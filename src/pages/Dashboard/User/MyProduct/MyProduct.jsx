import { FaEdit, FaTrash } from "react-icons/fa";

import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
// import useProduct from "../../../../hooks/useProduct";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import SectionTitle from "../../../../components/Shared/SectionTitle";
import { Helmet } from "react-helmet-async";

const MyProduct = () => {
  //   const [products, , refetch] = useProduct();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const email = user?.email;
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/products/user/${email}`);
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
        const res = await axiosSecure.delete(`/products/${item._id}`);
        if (res.data.deletedCount) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Product has been deleted.",
            icon: "success",
            position: "top-end",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  return (
    <div className="mx-10">
      <Helmet>
        <title>Dashboard | MyProduct</title>
      </Helmet>
      <SectionTitle title="Manage Your Product" />
      <div className="bg-white">
        <h3 className="p-6 text-3xl font-semibold mt-8">
          Total Items: {products.length}
        </h3>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Votes</th>
                <th>Status</th>
                <th>Updated</th>
                <th>Deleted</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((item, idx) => (
                <tr key={item._id}>
                  <th>{idx + 1} </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.photoURL} alt={item.product_name} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.product_name}</td>
                  <td>
                    UpVote: {item.uVote_count} <br />
                    DownVote: {item.dVote_count}
                  </td>
                  <td>{item.status}</td>
                  <td>
                    <Link to={`/dashboard/updatedProduct/${item._id}`}>
                      <button className="btn bg-[#D1A054] text-white btn-xl">
                        <FaEdit className="text-xl" />
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

export default MyProduct;
