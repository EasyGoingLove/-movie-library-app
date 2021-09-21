import http from "../services/http";


const getAll = () => {
  return http.get("/tutorials");
};

const get = (id: any) => {
  return http.get(`/tutorials/${id}`);
};



const Service = {
    getAll,
    get,
    // create,
    // update,
    // remove,
    // removeAll,
    // findByTitle,
  };
  
  export default Service;