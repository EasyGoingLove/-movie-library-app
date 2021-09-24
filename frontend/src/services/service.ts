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



const Service = {
    getAllFavs,
    searchedMovies,
    saveToFav,
    // update,
    // remove,
    // removeAll,
    // findByTitle,
  };
  
  export default Service;