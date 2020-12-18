import Link from "next/link";
import React from "react";

const CategoryCard = ({category}) => {
  return (
    <Link href="/sonuc">
    <a className="category-card">
      <div className="img-hover-zoom">
        <img className="prd-img" src={category.image} alt="" />
      </div>

      <div className="category-bottom">
        <div className="category-name">{category.name}</div>
      </div>
    </a>
    </Link>
    
  );
};

export default CategoryCard;
