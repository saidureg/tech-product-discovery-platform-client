import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import SectionTitle from "../../../../components/Shared/SectionTitle";
import { Helmet } from "react-helmet-async";
import MyProductRow from "../../TableRows/MyProductRow";

const MyProduct = () => {
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

  const handleDeleteItems = ({ _id }) => {
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
        const res = await axiosSecure.delete(`/products/${_id}`);
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
              {products?.map((product, idx) => (
                <MyProductRow
                  key={product._id}
                  product={product}
                  idx={idx}
                  handleDeleteItems={handleDeleteItems}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyProduct;
