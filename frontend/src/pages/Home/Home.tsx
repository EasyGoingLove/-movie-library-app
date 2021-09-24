import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";

import './Home.css';
import Hero from "../../components/Hero/Hero";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import service from "../../services/service";

const Home = () => {
  const [favLogic, setFavLogic] = useState<boolean>(false),
    [data, setData] = useState<any>(),
    [loopArr, setLoopArr] = useState<any>();

  useEffect(() => {
    service
      .getAllFavs()
      .then((response) => {
        let dataLenght = Object.keys(response.data).length;
        setLoopArr(new Array(dataLenght).fill(0));
        setData(response.data);
        if(dataLenght!==0){setFavLogic(true);}
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const sorryMsg = ()=>{
    alert("To view more details about the movie click \n from 'Searched Movies'\n or from 'My Movies'.")
  };

  return (
    <div className="home-body">
      <Hero />
      
      <div className="favs-container">
      <Typography gutterBottom variant="h5" component="div" align="center" color="whitesmoke">
             <h2>Collection of your favorite movies.</h2>
      </Typography><br/>
        {favLogic === true
          ? loopArr.map((element: any, i: number) => {
              return (
                <Card sx={{ maxWidth: 250 }} className="column-item" key={`id:${i}`} onClick={sorryMsg}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image={data[i].image}
                      alt={data[i].title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <h2>{data[i].title}</h2>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              );
            })
          : 
            <Typography gutterBottom variant="h5" component="div" align="left" id="noinf">
               <h5>Sorry it seems you don't have any liked movies yet.</h5>
             </Typography>
          }
      </div>
    </div>
  );
};

export default Home;
