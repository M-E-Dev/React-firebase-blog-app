import { Navigate, Outlet, Route } from "react-router-dom";
import  {useAuth}  from "../contexts/AuthContextProvider";

function PrivateRouter() {
  const { currentUser } = useAuth();

  return currentUser? <Outlet /> : <Navigate to="/login" />;

}

export default PrivateRouter;