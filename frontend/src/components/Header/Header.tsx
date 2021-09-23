import * as React from "react";

import "./Header.css";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import { Redirect } from "react-router-dom";

import { useState } from "react";

import NavMenu from "../NavMenu/NavMenu";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Header() {
  const [redirect, setRedirect] = useState<any>(),
    [navbarOpen, setNavbarOpen] = useState<any>(false),
    [icon, setIcon] = useState<any>(<MenuIcon />);

  const activateNav = () => {
    if (navbarOpen) {
      setNavbarOpen(false);
      setIcon(<MenuIcon />);
    } else {
      setNavbarOpen(true);
      setIcon(<CloseIcon />);
    }
  };

  const Sumbit = (e: any) => {
    if (e.key === "Enter") {
      setRedirect(
        <Redirect
          to={{
            pathname: "/searchedMovies",
            state: { enteredWord: e.target.value },
          }}
        />
      );
    }
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={activateNav}
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              {icon}
            </IconButton>

            <Typography
              id="h6-restyle"
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              My Movies Collection
            </Typography>
            <Search onKeyDown={Sumbit}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search by movie title..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
      {navbarOpen === true ? <NavMenu /> : ""}
      {redirect}
    </div>
  );
}
