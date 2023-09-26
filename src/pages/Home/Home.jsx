import React from "react";
import Hero from "./Hero";
import Cards from "./Cards";
import Footer from "../../components/Footer";

function Home(props) {
  const { setCategory } = props;

  return (
    <>
      <Hero setCategory={setCategory} />
      <Cards setCategory={setCategory} />
      <Footer />
    </>
  );
}

export default Home;
