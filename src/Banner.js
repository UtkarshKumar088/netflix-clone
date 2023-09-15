import React, { useState, useEffect } from 'react'
import axios from './axios';
import requests from './requests';
import "./Banner.css"

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {

    async function fetchData() {

      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      // Math.floor(Math.random() * request.data.results.length -1)
      return request;
    }
    fetchData();
  }, []);

  // console.log(movie)

  // function truncate(str, n) {
  //   return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  // }

  return (
    <header className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
        "https://i.ytimg.com/vi/Jx6YYAs5xy8/maxresdefault.jpg"
        )`,
        backgroundPosition: "center center"
      }}
    >
      <div className="banner_contents">
      <h1 className="banner_title">Spider-Man: Across the Spider-Verse</h1>


        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">Miles Morales embarks on a thrilling adventure through the multiverse and joins forces with Gwen Stacy and Spider-People to fight a supervillain. </h1> {/* Updated description */}
    </div>

      <div className="banner--fadeBottom" />
    </header>

  )
}

export default Banner
