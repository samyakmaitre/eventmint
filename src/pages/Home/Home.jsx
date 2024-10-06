import React from "react";
import ImageSlider from "../../components/ImageSlider";
import Offers from "../../components/Offers";
import NavBar from "../../components/NavBar";
import EventRenderer from "../../components/EventRenderer";

const Home = () => {
  

  return (
    <>
      <div className="home">
      <NavBar />
        <ImageSlider />
        <EventRenderer />
        <Offers />
      </div>
    </>
  );
};

export default Home;
