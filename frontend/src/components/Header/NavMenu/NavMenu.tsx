import React, { useState } from "react";

import { Redirect } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import "./NavMenu.css";

const NavMenu = () => {
  const [page, setPage] = useState<any>();

  const redirect = (location: string) => {
    setPage(
      <Redirect
        to={{
          pathname: `/${location}`,
          state: { enteredWord: "" },
        }}
      />
    );
  };
  return (
    <div className="nav-container">
      <Stack spacing={12} direction="column">
        <Button
          className="nav-btns"
          variant="contained"
          onClick={() => {
            redirect("");
          }}
        >
          Home
        </Button>
        <Button
          className="nav-btns"
          variant="contained"
          onClick={() => {
            redirect("searchedMovies");
          }}
        >
          Search
        </Button>
        <Button  
          id="nav-btns"
          variant="contained"
          onClick={() => {
            redirect("myFavorites");
          }}
        >
          My Movies
        </Button>
      </Stack>
      {page}
    </div>
  );
};

export default NavMenu;
