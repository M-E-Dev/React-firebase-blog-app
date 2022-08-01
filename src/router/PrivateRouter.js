import { Navigate, Outlet, Route } from "react-router-dom";
import  {useAuth}  from "../contexts/AuthContextProvider";

function PrivateRouter(props) {
  const { currentUser } = useAuth();

  return currentUser? ( <Route path={props.path} element={props.component} /> ) : ( <Navigate to="/login" /> );

}

export default PrivateRouter;