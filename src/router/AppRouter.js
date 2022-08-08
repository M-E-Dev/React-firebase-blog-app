import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Detail from "../pages/Detail";
// import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import UpdateBlog from "../pages/UpdateBlog";
import Profile from "../pages/Profile";
// import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import PrivateRouter from "./PrivateRouter";
import Navbar from "../components/Navbar";
import { Login, Register } from "../pages/LoginRegister";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<PrivateRouter />}>
          <Route path="/profile" element={<Profile />} />              
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/new-blog" element={<NewBlog />} />
          <Route path="/update-blog/:id" element={<UpdateBlog />} />
        </Route>

        <Route path="/" exact element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
