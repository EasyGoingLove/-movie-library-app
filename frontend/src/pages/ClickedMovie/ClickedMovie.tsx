import React, { useEffect, useState } from "react";
import Rating from '@mui/material/Rating';
import service from "../../services/service";
import "./ClickedMovie.css";


const ClickedMovie = (props: any) => {
  console.log(props.location.state);
  const [text,setText] = useState<string>();

  useEffect(() => {
    const id:string =  props.location.state.id ;
    service.check(id)
    .then((response) => {
      console.log(response.data);      
    })
    .catch((e) => {
      console.log(e);
    });
  }, []);

  const textValue =(e: { target: { value: React.SetStateAction<string | undefined>; }; })=>{
     setText(e.target.value);  
  };

  return (
    <div className="clicked-container">
      <div className="polaroid">
        <div className="img-withSumm">
        <div >
          <img
            className="img"
            src={props.location.state.image}
            alt={props.location.state.title}
          /></div>
          <div className="info-container">
          <p>Genres: {props.location.state.genres} </p>
          <p>Summarary:<br/>{props.location.state.summarary} </p>
          <p>Release Data: {props.location.state.releaseData} </p>
          <p>Time Duration: {!props.location.state.timeDuration? "No INF" : props.location.state.timeDuration} </p>
          <Rating name="size-large" defaultValue={2} size="large" /><br/>
          <textarea id="subject" name="subject" placeholder="Write something.." onChange={textValue} value={text} />
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
