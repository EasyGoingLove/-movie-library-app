export default class ShowData {
  data: any;
  title: string[];
  timeDuration: number[];
  releaseData: string[];
  summarary: string[];
  image: string[];
  genres: string[];
  nanImg: string;

  constructor(data: any) {
    this.data = data;
    this.title = [];
    this.timeDuration = [];
    this.releaseData = [];
    this.summarary = [];
    this.image = [];
    this.genres = [];
    this.nanImg =
      "https://img.whaleshares.io/wls-img/einstei1/d765e65f432e7e6f0d062616d19364ecdc5631da.png";
  }
  async extractData() {
    const allData = await this.data;

    for (let i in allData) {
      this.title.push(allData[i].show.name);
      this.timeDuration.push(allData[i].show.runtime);
      this.releaseData.push(allData[i].show.premiered);

      if (allData[i].show.summary === null) {
        this.summarary.push("No Information");
      } else {
        let fix = allData[i].show.summary.replace("<p>", "");
        fix = fix.replace("<b>", "");
        fix = fix.replace("</p>", "");
        fix = fix.replace("</b>", "");
        this.summarary.push(fix);
      }

      if (allData[i].show.image === null) {
        this.image.push(this.nanImg);
      } else {
        this.image.push(allData[i].show.image.original);
      }

      this.genres.push(allData[i].show.genres.join(" , "));
    }

    const arrayOfData = [
      this.title,
      this.timeDuration,
      this.releaseData,
      this.summarary,
      this.image,
      this.genres,
    ];
    return arrayOfData;
  }
}
