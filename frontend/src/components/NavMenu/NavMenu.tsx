import React, { useState } from "react";

import { Redirect} from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import Header from "../Header/Header";

import "./NavMenu.css";
import Home from "../../pages/Home/Home";

const NavMenu = () => {
    const[page,setPage] = useState<any>();
    
    const redirect = (location:string) =>{

     setPage(<Redirect to={`/${location}`}><Home/></Redirect>);
    };
  return (
    <div className="nav-container">
      <Stack spacing={12} direction="column">
        <Button className="nav-btns" variant="contained" onClick={()=>{redirect("home");}}>
          Home
        </Button>
        <Button className="nav-btns" variant="contained" onClick={()=>{redirect("searchedMovies");}}>
          Search 
        </Button>
        <Button className="nav-btns" variant="contained" onClick={()=>{redirect("searchedMovies");}}>
          My Movies
        </Button>
      </Stack>
      {page}
    </div>
  );
};

export default NavMenu;
