import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
};
AdminRoute.propTypes = {
  children: PropTypes.node,
};

export default AdminRoute;
