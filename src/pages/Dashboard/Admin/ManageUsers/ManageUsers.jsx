import SectionTitle from "../../../../components/Shared/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { MdAddModerator } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          title: "Success!",
          text: "The user is now an admin!",
          icon: "success",
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleMakeModerator = (user) => {
    axiosSecure.patch(`/users/moderator/${user._id}`).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          title: "Success!",
          text: "The user is now a moderator!",
          icon: "success",
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div className="mx-10">
      <SectionTitle title="Manage Users" />
      <div className="bg-white">
        <h3 className="p-6 text-3xl font-semibold">
          Total Users: {users.length}{" "}
        </h3>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Make Moderator</th>
                <th>Make Admin</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, idx) => (
                <tr key={user._id}>
                  <th>{idx + 1} </th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "moderator" ? (
                      "Moderator"
                    ) : (
                      <button
                        onClick={() => handleMakeModerator(user)}
                        className="btn bg-[#D1A054] text-white btn-xl"
                      >
                        <MdAddModerator className="text-xl" />
                      </button>
                    )}
                  </td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn bg-[#D1A054] text-white btn-xl"
                      >
                        <RiAdminFill className="text-xl" />
                      </button>
                    )}
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

export default ManageUsers;
