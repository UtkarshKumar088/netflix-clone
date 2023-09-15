import React, { useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';

function Banner() {
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      // Here, you can access the data from `request.data.results`, but since you're not using it in the component,
      // you can remove the assignment to a state variable.
      return request;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://i.ytimg.com/vi/Jx6YYAs5xy8/maxresdefault.jpg")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">Spider-Man: Across the Spider-Verse</h1>

        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          Miles Morales embarks on a thrilling adventure through the multiverse and joins forces with Gwen Stacy and Spider-People to fight a supervillain.
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
