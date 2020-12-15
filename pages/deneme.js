import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/actions/productAction";

const Deneme = (props) => {
  const homeProductList = useSelector((state) => state.homeProductList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log({ homeProductList });

  // var token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4NjU3N2JiZS05ZGUzLTQ1MDItOTMyYS05ZThiNTVlMDhiNzMiLCJFbWFpbCI6InNlcmlmQGtheXRhbi5jb20iLCJleHAiOjE2MDc1MDczNzEsImlzcyI6IkFudHJldGFZYXppbGltIn0.V-3gj_glh_0GL8jARLjrB_QDSqH7rghIbohXxI6UMIE";

  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //     "Content-Type": "application/json",
  //   },
  // };
  // axios
  //   .get(
  //     "http://havangiyim.bayserif.com/odata/product?$filter=ShowOnHomePage eq true",
  //     config
  //   )
  //   .then((response) => console.log(response.data.value))
  //   .catch(console.log);
  return (
    <div className="row">
      {homeProductList.map((product) => {
        return (
          <div className="col-4" key={product.Id}>
            <img src="" />
            <p>{product.Name}</p>
            <p>{product.Sku}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Deneme;
