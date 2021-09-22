import axios from 'axios';

export default class Api {
  searchedShow:string;
  constructor(searchedShow:string){
    this.searchedShow = searchedShow;
  }
    async getShowData() {
      const url : string = 'https://api.tvmaze.com/search/';
        try {
           return await axios.get(url + `shows?q=${this.searchedShow}`); 
        }
        catch (error){
          console.log(error);
        }
   }
 }