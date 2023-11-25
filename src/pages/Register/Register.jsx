import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { createUser } = useAuth();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content w-full lg:w-1/2">
        <div className="card flex-shrink-0 w-full  shadow-2xl bg-neutral">
          <h3 className="text-center text-white text-4xl font-semibold mt-16 mb-8">
            Create Account
          </h3>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-bold">
                  Your Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-bold">
                  Photo URL
                </span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Enter your photo url"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-bold">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <div className="divider text-white divider-warning">OR</div>
            <p className="mt-3 text-white text-left md:text-center text-xl md:text-3xl">
              Already registered?
              <Link to="/login">
                <button className="text-xl md:text-3xl ml-2 hover:opacity-60 hover:text-red-400 hover:underline">
                  Login
                </button>
              </Link>
            </p>
          </form>
          <p className="text-center text-white mt-4 font-playfair text-xl">
            Or continue with
          </p>
          <div className="flex items-center gap-8 justify-center mt-3 mb-10">
            <FaFacebook className="text-5xl text-white border rounded-full border-pink-600 p-2" />
            <FaGoogle className="text-5xl border rounded-full p-2 text-red-500" />
            <FaGithub className="text-5xl text-white border rounded-full border-pink-600 p-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;