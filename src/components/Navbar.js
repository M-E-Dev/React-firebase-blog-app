import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import "./Navbar.css";
import bikeLogo from "../assets/bike.png";
import menuLogo from "../assets/menu.png";
import { useAuth } from "../contexts/AuthContextProvider";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import Dashboard from "../pages/Dashboard";

export default function Navbar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const {currentUser, logout} = useAuth();
  console.log(currentUser)

  const navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    logout();
  };

  // const handleDashboard = () => {
  //   navigate("/dashboard")
  // }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ height: "13vh" }} className="navbar">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => navigate("/dashboard")}
          >
            <img
              src={bikeLogo}
              alt=""
              sx={{ mr: 2 }}
              style={{
                borderRadius: "5px",
                backgroundColor: "inherit",
                height: "95px",
              }}
            />
          </IconButton>
          <Typography
            variant="h4"
            fontFamily="Girassol"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Superbikes Blog
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <img
                  src={menuLogo}
                  alt=""
                  sx={{ mr: 2 }}
                  style={{
                    borderRadius: "5px",
                    backgroundColor: "inherit",
                    height: "75px",
                  }}
                />
              </IconButton>
              {currentUser?.email ? (
                <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link to="/profile" >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Link>
                <Link to="/new-blog" >
                  <MenuItem onClick={handleClose}>New Blog</MenuItem>
                </Link>
                <Link to="/login">
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Link>
              </Menu>
              ) : (
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <Link to="/authorization" >
                    <MenuItem onClick={handleClose}>Authorization</MenuItem>
                  </Link>
                </Menu>
              )}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
