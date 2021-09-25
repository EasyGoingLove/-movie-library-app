import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import service from "../../services/service";
import "./ClickedMovie.css";
import { Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

const ClickedMovie = (props: any) => {
 
  const [text, setText] = useState<string>(""),
    [liked, setLiked] = useState<any>(),
    [starts, setStars] = useState<number>(0),
    [onChlogic,setOnChlogic] = useState<number>(0);

  useEffect(() => {
    const id: string = props.location.state.id;
    service
      .check(id)
      .then((response) => {
        if (response.data === "Yes") {
          setLiked(
            <Button
              variant="contained"
              disabled={true}
              endIcon={<SaveIcon />}

            >
              Save to favotires
            </Button> 
          );
          setOnChlogic(1);
        } else {
          setLiked(
            <Button variant="contained" endIcon={<SaveIcon />}  onClick={saveToFav}>
              Save to favotires
            </Button>
          );
        }
      })
      .catch((e) => {
        console.log(e);
      });
   service.getStarText(props.location.state.id)
   .then((response) => {
     setStars(Number(response.data.stars));
     setText(response.data.rewiew)
    })
   .catch((e) => {
     console.log(e);
   });
  }, []);

  const saveToFav = () => {
    console.log("meiow");
    
    let title: string = props.location.state.title;
    let timeDuration: number = props.location.state.timeDuration;
    let releaseData: string = props.location.state.releaseData;
    let summarary: string = props.location.state.summarary;
    let image: string = props.location.state.image;
    let genres: string = props.location.state.genres;
    let stars: number = starts;
    let comments: string = text;
    service
      .saveToFav({
        title,
        timeDuration,
        releaseData,
        summarary,
        image,
        genres,
        stars,
        comments,
      })
      .then((response) => {})
      .catch((e) => {
        console.log(e);
      });
      window.location.reload();
  };

  const textValue = (e: any) => {
    if(onChlogic===1){
      service.update(props.location.state.id,e.target.value,0)
      .then((response) => {})
      .catch((e) => {
        console.log(e);
      });
     }
     setText(e.target.value);
  };
  const starValue = (e: any) => {
    if(onChlogic===1){
     service.update(props.location.state.id,e.target.value,1)
     .then((response) => {})
     .catch((e) => {
       console.log(e);
     });
    }
    setStars(Number(e.target.value));
  };

  return (
    <div className="clicked-container">
      <div className="polaroid">
        <div className="img-withSumm">
          <div>
            <img
              className="img"
              src={props.location.state.image}
              alt={props.location.state.title}
            />
          </div>
          <div className="info-container">
            <p>Genres: {props.location.state.genres} </p>
            <p>
              Summarary:
              <br />
              {props.location.state.summarary}{" "}
            </p>
            <p>Release Data: {props.location.state.releaseData} </p>
            <p>
              Time Duration:{" "}
              {!props.location.state.timeDuration
                ? "No INF"
                : props.location.state.timeDuration}{" "}
            </p>
            <Rating
              name="size-large"
              defaultValue={starts}
              value={starts}
              size="large"
              onChange={starValue}
            />
            <br />
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              onChange={textValue}
              value={text}
            />
            {liked}
          </div>
        </div>
        <div className="container">
          <p>{props.location.state.title}</p>
        </div>
      </div>
    </div>
  );
};

export default ClickedMovie;
