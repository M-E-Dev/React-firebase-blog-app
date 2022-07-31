import { Navigate, Outlet, Route } from "react-router-dom";
import  {useAuth}  from "../contexts/AuthContextProvider";

function PrivateRouter(props) {
  const { currentUser } = useAuth();

  // const[currentUserOutlet ,setCurrentUserOutlet] = useOutletContext();

  // ?? return currentUser? ( <Route path={props.path} element={props.component} /> ) : ( <Navigate to="/login" /> );

  return currentUser ?  <Outlet/> : <Navigate to="/login"  replace={true}/>;
}

export default PrivateRouter;