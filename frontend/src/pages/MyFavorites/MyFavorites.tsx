import React, { useEffect, useState } from "react";
import SearchedMovies from "../../components/SearchedMovies/SearchedMovies";
import PopUpMsg from '../../components/PopUpMsg/PopUpMsg'

import service from "../../services/service";

import "./MyFavorites.css";

const MyFavorites = () => {
    const [favLogic,setFavLogic] = useState<boolean>(false),
    [data, setData] = useState<any>(),
    [loopArr,setLoopArr] = useState<any>(),
    [del,setDel] = useState<string>(),
    [message,setMessage] = useState<any>();

  useEffect(()=>{setDel('onceOnLoad')},[])
  useEffect(() => {
    service
      .getAllFavs()
      .then((response) => {
        let dataLenght = Object.keys(response.data).length;
        setLoopArr(new Array(dataLenght).fill(0));
        setData(response.data);
        setFavLogic(true);       
      })
      .catch((e) => {
        console.log(e);
      });
  }, [del]);

  const deleteFav = (dataId:string) =>{
    service.removeFav(dataId)
    .then((response) => {
        console.log(response.data);
        setDel(response.data);
      })
      .catch((e) => {
        console.log(e);
      });

  };
  const msg =()=>{
    setMessage(
      <PopUpMsg onOff={true} popMsg="Deleted successfully"/>
    );
    setTimeout(()=>{  
      setMessage(
      <PopUpMsg onOff={false} popMsg="Deleted successfully"/>
    ); }, 2000);
  };

  return (
  <div className="myfv-container">
      {favLogic === true
        ? loopArr.map((element: any, i: number) => {
            return (
                <SearchedMovies
                  key={`id:${i}`}
                  title={data[i].title}
                  boolFav={false}
                  timeDuration={!data[i].timeDuration ? NaN : data[i].timeDuration}
                  releaseData={data[i].releaseData}
                  summarary={data[i].summarary}
                  image={data[i].image}
                  genres={data[i].genres}
                  saveOrDelFav={()=>{
                    deleteFav(data[i]._id);
                    msg();
                  }}
                />
            );
          })
        : ""}
    {message}
  </div>);
};

export default MyFavorites;
