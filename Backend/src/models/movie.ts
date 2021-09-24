import {IMOvie} from '../types/movie';
import { model, Schema } from "mongoose"

const movieSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: false,
    },

    timeDuration: {
      type: Number,
      required: false,
    },

    releaseData: {
      type: String,
      required: false,
    },

    summarary: {
      type: String,
      required: false,
    },

    image: {
      type: String,
      required: false,
    },

    genres: {
      type: String,
      required: false,
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