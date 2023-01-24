import React from "react";
import Character from "../../components/character/Character";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import OurTeam from "../../components/ourteam/OurTeam";
import Welcome from "../../components/welcome/Welcome";

const Home = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <Character />
      <OurTeam />
      <Footer />
    </div>
  );
};

export default Home;
