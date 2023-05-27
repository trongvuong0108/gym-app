import React, { useEffect, useState } from "react";
// import components
import Banner from "../Features/Banner";
import Header from "../Features/Header";
import About from "../Features/About";
import Workouts from "../Features/Workouts";
import Join from "../Features/Join";
import Footer from "../Features/Footer";
// import aos
import Aos from "aos";
import "aos/dist/aos.css";
import Review from "../Features/Review";
import axios from "axios";

const Home = () => {
  Aos.init({
    duration: 2500,
    delay: 400,
  });
  if (localStorage.getItem("id") !== null) {
    localStorage.removeItem("gym");
    localStorage.removeItem("pt");
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    };
    const checkGymExit = async () => {
      await axios
        .get(
          `http://localhost:8080/client/billGym/checkGymExit/${localStorage.getItem(
            "id"
          )}`,
          {
            headers: headers,
          }
        )
        .then((response) => {
          localStorage.setItem("gym", response.data.gym.name);
        });
    };

    const checkPtExit = async () => {
      await axios
        .get(
          `http://localhost:8080/client/billPt/checkPTExit/${localStorage.getItem(
            "id"
          )}`,
          {
            headers: headers,
          }
        )
        .then((response) => {
          localStorage.setItem("pt", response.data.trainer.name);
        });
    };

    checkGymExit();
    checkPtExit();
  }
  // useEffect(() => {
  //   checkGymExit();
  //   checkPtExit();
  // }, []);
  return (
    <div className="max-w-[1920px] mx-auto bg-page overflow-hidden relative">
      <Header />
      <Banner />
      <About />
      <Workouts />
      {/* <Pricing />
            <Community />
            <Faq /> */}
      <Join />
      <Review />
      <Footer />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default Home;
