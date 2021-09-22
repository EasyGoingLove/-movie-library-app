export default class ShowData {
  data: any;
  title: string[];
  timeDuration: number[];
  releaseData: string[];
  summarary: string[];
  image: string[];
  genres: string[];
  nanImg:string;

  constructor(data: any) {
    this.data = data;
    this.title = [];
    this.timeDuration = [];
    this.releaseData = [];
    this.summarary = [];
    this.image = [];
    this.genres = [];
    this.nanImg = 'https://img.whaleshares.io/wls-img/einstei1/d765e65f432e7e6f0d062616d19364ecdc5631da.png';
  }
  async extractData() {
    const allData = await this.data;

    // console.log(allData[0]);

    for (let i in allData) {
      this.title.push(allData[i].show.name);
      this.timeDuration.push(allData[i].show.runtime);
      this.releaseData.push(allData[i].show.premiered);
      this.summarary.push(allData[i].show.summarary);
      if (allData[i].show.image === null) {
        this.image.push(this.nanImg);
      } else {
        this.image.push(allData[i].show.image.original);
      }
      this.genres.push(allData[i].show.genres);
    }
    const arrayOfData = [ this.title,this.timeDuration,this.releaseData,this.summarary,this.image,this.genres]
    return arrayOfData;
  }
}
