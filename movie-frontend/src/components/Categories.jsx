import React, { useState } from "react";
import Category from "./Category";
import { getMovieDetails } from "../common/api-utils";
export default function Categories() {
  const [categories, setCategories] = useState([]);

  useState(() => {
    fetch("http://localhost:9095/allCategoryDetails")
      .then((res) => res.json())
      .then((data) => {
        let cat = [];
        data.forEach((obj) => {
          cat.push(obj.category);
        });
        setCategories(cat);
      });
  }, []);

  return (
    <div className="categories-holder">
      {categories.map((cat) => {
        return <Category title={cat.toUpperCase()} />;
      })}
    </div>
  );
}
