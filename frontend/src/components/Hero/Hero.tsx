import React from "react";

import "./Hero.css";
import SimpleImageSlider from "react-simple-image-slider";

import FeaturedMovie from "../FeaturedMovie/FeaturedMovie";

const Hero = () => {
  const images = [
    { url: "https://m.media-amazon.com/images/I/61smmUGqjBL._SY445_.jpg" },
    { url: "https://upload.wikimedia.org/wikipedia/en/7/70/Terminator1984movieposter.jpg" },
    { url: "https://static.posters.cz/image/750/%D0%BF%D0%BB%D0%B0%D1%81%D1%82%D0%BC%D0%B0%D1%81%D0%BE%D0%B2%D0%B0-%D1%80%D0%B0%D0%BC%D0%BA%D0%B0-harry-potter-harry-ron-hermione-i69614.jpg" },
    { url: "https://bestsimilar.com/img/movie/thumb/c2/18736.jpg" },
    { url: "http://www.scrolldroll.com/wp-content/uploads/2021/07/weathering-with-you-best-japanese-anime-movies.jpg" },
    { url: "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg" },
    { url: "https://www.kyuhoshi.com/wp-content/uploads/2017/11/my_neighbor_totoro.jpg" },
  ];

  return (
    <div className="hero-container">
      <FeaturedMovie />
      <SimpleImageSlider
        width={400}
        height={500}
        images={images}
        showNavs={false}
        showBullets={true}
        slideDuration={2}
        useGPURender={true}
      />
    </div>
  );
};

export default Hero;
