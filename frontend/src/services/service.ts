import http from "../services/http";
import IMovieData from '../types/movie'; 

const getAll = () => {
  return http.get("/tutorials");
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
    getAll,
    searchedMovies,
    saveToFav,
    // update,
    // remove,
    // removeAll,
    // findByTitle,
  };
  
  export default Service;