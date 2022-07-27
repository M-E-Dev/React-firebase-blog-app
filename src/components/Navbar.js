import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import homeIcon from "../assets/home.png";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { AuthContext } from "../contexts/AuthContext";
import { logOut } from "../helpers/userFunction";
import "./Navbar.css";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // const currentUser = { displayName: "betul sonmez" };
  // const currentUser = false;

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className="navbar" position="static">
      <Container maxWidth="xl" className="container">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <Link to={"/"}>
                <img src={homeIcon} alt="home-icon" />
              </Link>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Link to="/about">
                <MenuItem onClick={handleCloseUserMenu}>About</MenuItem>
              </Link>
            </Menu>
          </Box>

          <Box className="header" sx={{ flexGrow: 1, display: "flex" }}>
            <Typography
              variant="h5"
              component="h1"
              onClick={() => navigate("/")}
            >
             ──── <span> {"<Betul/>"}</span> Blog ────
            </Typography>
          </Box>

          {currentUser ? (
            <Box className="userInf" sx={{ flexGrow: 0, display: "flex" }}>
              <h5>{currentUser?.displayName}</h5>

              <Box sx={{ flexGrow: 0, display: "flex" }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar src="/broken-image.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <Link className="link" to="/profile">
                    <MenuItem value="profile" onClick={handleCloseUserMenu}>
                      Profile
                    </MenuItem>
                  </Link>
                  <Link className="link" to="/newblog">
                    <MenuItem onClick={handleCloseUserMenu}>New</MenuItem>
                  </Link>
                  <Link className="link" to="/login">
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" onClick={() => logOut()}>
                        Logout
                      </Typography>
                    </MenuItem>
                  </Link>
                </Menu>
              </Box>
            </Box>
          ) : (
            <Box className="buttons" sx={{ flexGrow: 0, display: "flex" }}>
              <Button
                className="button"
                color="secondary"
                variant="outlined"
                onClick={() => navigate("/login")}
              >
                login
              </Button>
              <Button
                className="button"
                color="secondary"
                variant="outlined"
                onClick={() => navigate("/register")}
              >
                Register
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
