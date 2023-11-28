import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import useModerator from "../hooks/useModerator";

const ModeratorRoute = ({ children }) => {
  const [isModerator, isModeratorLoading] = useModerator();
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading || isModeratorLoading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }
  if (user && isModerator) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
};
ModeratorRoute.propTypes = {
  children: PropTypes.node,
};
export default ModeratorRoute;
