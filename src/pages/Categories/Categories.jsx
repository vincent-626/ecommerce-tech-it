import React from "react";
import Footer from "../../components/Footer";
import CategoriesHeader from "./CategoriesHeader";
import { Outlet } from "react-router-dom";

function Categories(props) {
  const { category, setCategory } = props;

  return (
    <div>
      <CategoriesHeader
        category={category}
        setCategory={setCategory}
      />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Categories;
