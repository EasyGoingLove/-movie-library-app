import {IMOvie} from '../types/movie';
import { model, Schema } from "mongoose"

const movieSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    timeDuration: {
      type: Number,
      required: true,
    },

    releaseData: {
      type: String,
      required: true,
    },

    summarary: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    genres: {
      type: String,
      required: true,
    },
    
    stars: {
      type: String,
      required: false,
    },

    rewiew: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
)

export default model<IMOvie>("Movie", movieSchema);