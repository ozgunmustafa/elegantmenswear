import React from "react";

const Product = ({ children, classnames }) => {
 
  const body = React.Children.map(children, (child) =>
    child.type.displayName === "Body" ? child : null
  );
  const footer = React.Children.map(children, (child) =>
    child.type.displayName === "Footer" ? child : null
  );
  return (
    <div className={`product-card  ${classnames ? classnames : ""}`}>
      {body}
      {footer}
    </div>
  );
};


const Body = ({ children }) => <div className="product-card-body">{children}</div>;
Body.displayName = "Body";
Product.Body = Body;

const Footer = ({ children, classnames }) => (
  <div className={`${classnames} product-card-footer`}>{children}</div>
);
Footer.displayName = "Footer";
Product.Footer = Footer;

export default Product;
