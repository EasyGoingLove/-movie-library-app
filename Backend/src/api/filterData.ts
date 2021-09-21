export default class ShowData {
    data: any;
    title: string;
    timeDuration: number;
    releaseData: string;
    summarary: string;
    image: string;
    genres: string[];
   
    constructor(data:any) {
      this.data = data;
      this.title = '';
      this.timeDuration = 0;
      this.releaseData = '';
      this.summarary = '';
      this.image = '';
      this.genres = [];
    }
    async extractData() {
      const allData = await this.data;

      console.log(allData);
      console.log("sada");
      
    }
  }