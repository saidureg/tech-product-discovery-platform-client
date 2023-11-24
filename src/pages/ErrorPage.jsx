import { Link, useRouteError } from "react-router-dom";
import errorImg from "../assets/A-404-Page.jpg";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${errorImg})` }}
    >
      <h1 className="text-3xl font-semibold text-black">Oops!</h1>
      <p className="text-3xl font-semibold text-black">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-3xl font-semibold text-black">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        <button className="btn btn-warning mt-10">Go Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
