import React, { useEffect, useState } from "react";
import ProductCategories from "../../Products/ProductCategories/ProductCategories";
import About from "../About";
import Banner from "../Banner/Banner";
import Contact from "../Contact";
import FAQ from "../FAQ";
import Feature from "../Feature";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://smart-key-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  // console.log(categories);

  return (
    <div className="">
      <Banner></Banner>
      <ProductCategories categories={categories}></ProductCategories>
      <Feature />
      <Reviews></Reviews>
      <FAQ></FAQ>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;
