import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
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
    [message, setMessage] = useState<any>(),
    [clMovie, setClMovie] = useState<any>();

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

  const saveFav = (
    title: string,
    timeDuration: number,
    releaseData: string,
    summarary: string,
    image: string,
    genres: string
  ) => {
    let stars:number = 0 ;
    let comments:string = '';
    service
      .saveToFav({ title, timeDuration, releaseData, summarary, image, genres,stars,comments})
      .then((response) => {})
      .catch((e) => {
        console.log(e);
      });
  };
  const msg = (corMsg: string) => {
    setMessage(<PopUpMsg onOff={true} popMsg={corMsg} />);
    setTimeout(() => {
      setMessage(<PopUpMsg onOff={false} popMsg={corMsg} />);
    }, 2000);
  };
  const openMovie = (
    title: string,
    timeDuration: number,
    releaseData: string,
    summarary: string,
    image: string,
    genres: string,
    id: string
  ) => {
    setClMovie(
      <Redirect
        to={{
          pathname: `/clickedMovie/${title}`,
          state: {
            title: title,
            timeDuration: timeDuration,
            releaseData: releaseData,
            summarary: summarary,
            image: image,
            genres: genres,
            id: id,
          },
        }}
      />
    );
  };
  const check = (
    title: string,
    timeDuration: number,
    releaseData: string,
    summarary: string,
    image: string,
    genres: string,
    id:number
  ) => {
    
    service
      .check(summarary)
      .then((response) => {
        console.log(response.data);
        if(id===1){
        let timeD = timeDuration;
        if (!timeDuration) {
          timeD = NaN;
        }
        let releaseD = "";
        if (!releaseData) {
          releaseD = "No Info";
        } else {
          releaseD = releaseData.substring(0, 4);
        }
        if (response.data==="Yes") {  
          msg("Movie Already In Favorites");
        } else {
          saveFav(
            title,
            timeD,
            releaseD,
            summarary,
            image,
            genres
          );
          msg("Saved successfully");
        }
      }else{
        let test = releaseData;
        if(!releaseData){
          test="No Info"
        }else{
          test.substring(0, 4)
        }
        openMovie(
          title,
          timeDuration,
          test,
          summarary,
          image,
          genres,
          summarary
        );
      }
      })
      .catch((e) => {
        console.log(e);
      });
   
  };

  return (
    <div className="moviesDisplay">
      {diplay === true
        ? title.map((element: any, i: number) => {
            return (
              <SearchedMovies
                key={`id:${i}`}
                openMovie={() => {
                  check( 
                    title[i],
                    timeDuration[i],
                    releaseData[i],
                    summarary[i],
                    image[i],
                    genres[i],
                    0
                  );
                 
                }}
                title={title[i]}
                boolFav={true}
                timeDuration={!timeDuration[i] ? NaN : timeDuration[i]}
                releaseData={
                  !releaseData[i] ? "No Info" : releaseData[i].substring(0, 4)
                }
                summarary={summarary[i]}
                image={image[i]}
                genres={genres[i]}
                saveOrDelFav={() => {
                  check( 
                    title[i],
                    timeDuration[i],
                    releaseData[i],
                    summarary[i],
                    image[i],
                    genres[i],
                    1
                  );
                }}
              />
            );
          })
        : ""}
      {message}
      {clMovie}
    </div>
  );
};
export default MovieList;
