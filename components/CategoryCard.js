import React from "react";

const CategoryCard = ({ src, name }) => {
  return (
    <a href="#" className="category-card">
      <div className="img-hover-zoom">
        <img className="prd-img" src={src} alt="" />
      </div>

      <div className="category-bottom">
        <div className="category-name">{name}</div>
      </div>
    </a>
  );
};

export default CategoryCard;
