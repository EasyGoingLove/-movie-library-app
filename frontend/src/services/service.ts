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



const Service = {
    getAllFavs,
    searchedMovies,
    saveToFav,
    removeFav,
    check,
    // remove,
    // removeAll,
    // findByTitle,
  };
  
  export default Service;