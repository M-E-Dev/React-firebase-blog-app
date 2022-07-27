import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import UpdateBlog from "../pages/UpdateBlog";
import Navbar from "../components/Navbar";
import NotFound from "../pages/NotFound";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<PrivateRouter />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/newblog" element={<NewBlog />} />
          <Route path="/updateblog/:id" element={<UpdateBlog />} />
        </Route>

        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
