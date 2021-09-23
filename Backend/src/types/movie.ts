import { Document } from "mongoose"

export interface IMOvie extends Document {
  title: string;
  timeDuration: number;
  releaseData: string;
  summarary: string;
  image: string;
  genres: string;
  starts:string;
  rewiew:string;
}