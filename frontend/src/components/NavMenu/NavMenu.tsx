import React from "react";

import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';

import "./NavMenu.css";

const NavMenu = () => {
  return (
    <div className="nav-container">
      <Stack spacing={4} direction="column">
        <Button className="nav-btns" variant="contained">
          Home
        </Button>
        <Button className="nav-btns" variant="contained">
          Search Movies
        </Button>
        <Button className="nav-btns" variant="contained">
          My Movies
        </Button>
      </Stack>
    </div>
  );
};

export default NavMenu;
