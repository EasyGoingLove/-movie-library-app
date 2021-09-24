import React, { useEffect, useState } from "react";
import service from "../../services/service";
import PopUpMsg from "../PopUpMsg/PopUpMsg";
import SearchedMovies from "../SearchedMovies/SearchedMovies";

type KayWordProps = {
  word: string;
};

const MovieList = (props: KayWordProps) => {

  const [title, setTitle] = useState<any>(),
    [timeDuration, setTimeDuration] = useState<any>(),
    [releaseData, setReleaseData] = useState<any>(),
    [summarary, setSummarary] = useState<any>(),
    [image, setImage] = useState<any>(),
    [genres, setGenre] = useState<any>(),
    [diplay, setDiplay] = useState<any>(false),
    [message,setMessage] = useState<any>();

  useEffect(() => {
    service
      .searchedMovies(props.word)
      .then((response) => {
        setTitle(response.data[0]);
        setTimeDuration(response.data[1]);
        setReleaseData(response.data[2]);
        setSummarary(response.data[3]);
        setImage(response.data[4]);
        setGenre(response.data[5]);
        setDiplay(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [props.word]);

  const saveFav = (title:string,timeDuration:number,releaseData:string,summarary:string,image:string,genres:string)=>{
       
    service
      .saveToFav({title,timeDuration,releaseData,summarary,image,genres})
      .then((response) => {
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const msg =()=>{
    setMessage(
      <PopUpMsg onOff={true} popMsg="Saved successfully"/>
    );
    setTimeout(()=>{  
      setMessage(
      <PopUpMsg onOff={false} popMsg="Saved successfully"/>
    ); }, 2000);
  };

  return (
    <div className="moviesDisplay">
      {diplay === true
        ? title.map((element: any, i: number) => {
            return (
                <SearchedMovies
                  key={`id:${i}`}
                  title={title[i]}
                  boolFav={true}
                  timeDuration={!timeDuration[i] ? NaN : timeDuration[i]}
                  releaseData={
                    !releaseData[i] ? "No Info" : releaseData[i].substring(0, 4)
                  }
                  summarary={summarary[i]}
                  image={image[i]}
                  genres={genres[i]}
                  saveOrDelFav={()=>{
                    let timeD = timeDuration[i];
                    if(!timeDuration[i]){timeD=NaN;}
                    let releaseD='';
                    if(!releaseData[i]){releaseD = "No Info";}
                    else{ releaseD = releaseData[i].substring(0, 4);}
                    
                    saveFav(title[i],timeD,releaseD,summarary[i],image[i],genres[i]);
                    msg();
                  }}
                />
            );
          })
        : ""}
        {message}
    </div>
  );
};
export default MovieList;
