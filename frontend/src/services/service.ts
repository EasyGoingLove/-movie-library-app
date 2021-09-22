import http from "../services/http";


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



const Service = {
    getAll,
    searchedMovies,
    // create,
    // update,
    // remove,
    // removeAll,
    // findByTitle,
  };
  
  export default Service;