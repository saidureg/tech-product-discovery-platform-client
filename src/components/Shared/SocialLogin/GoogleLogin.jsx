import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          name: result.user?.displayName,
          email: result.user?.email,
        };
        axiosPublic.post("/users", userInfo).then(() => {
          navigate(from, { replace: true });
          toast("You have successfully logged in");
        });
      })
      .catch((error) => {
        swal("Oops!", error.message, "error");
      });
  };
  return (
    <div>
      <FaGoogle
        onClick={handleGoogleSignIn}
        className="text-5xl border rounded-full cursor-pointer p-2 text-red-500"
      />
    </div>
  );
};

export default GoogleLogin;
