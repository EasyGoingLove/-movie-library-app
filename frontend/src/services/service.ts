import http from "../services/http";
import IMovieData from '../types/movie'; 

const getAllFavs = () => {
  return http.get("/allFavMovies");
};

const searchedMovies = (name: string) => {
  return http.get('/searchedMovies',{
    params: {
      searchedName: name
    }
  });
};
const saveToFav = (data: IMovieData) => {
  return http.put('/savingFavMovie',data);
};

const removeFav = (itemId: any) => {
  return http.delete(`/deleteFav`,{
    data: {
      source: itemId
    }});
};

const check = (id: string) => {
  return http.put('/checkIfinDb',{id:id});
};

const update = (id:string,starOrtext: number | string,devider:number) => {
  return http.put('/onChangeStar|Text',{starOrtext:starOrtext,id:id,devider:devider});
};



const Service = {
    getAllFavs,
    searchedMovies,
    saveToFav,
    removeFav,
    check,
    update,
  };
  
  export default Service;