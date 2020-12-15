import axios from "axios";

export const fetchProducts = () => (dispatch) => {
  var token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4NjU3N2JiZS05ZGUzLTQ1MDItOTMyYS05ZThiNTVlMDhiNzMiLCJFbWFpbCI6InNlcmlmQGtheXRhbi5jb20iLCJleHAiOjE2MDc1MDczNzEsImlzcyI6IkFudHJldGFZYXppbGltIn0.V-3gj_glh_0GL8jARLjrB_QDSqH7rghIbohXxI6UMIE";

  const config = {
    headers: {Authorization: `Bearer ${token}`, "Content-Type": "application/json"},
  };
  axios
    .get(
      "http://havangiyim.bayserif.com/odata/product?$filter=ShowOnHomePage eq true",
      config
    )
    .then((response) => {
      dispatch({ type: 'HOME_PRODUCTS', payload: response.data.value });
    })
    .catch(()=>{
      dispatch({ type: 'HOME_PRODUCTS_ERR',payload:"hataa" });
    });
};
