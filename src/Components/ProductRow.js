import React from "react";

const ProductRow = (props) => {
  
  //console.log("test2");
  return (
    <div>
      <h2>{props.Product.name} {props.Product.price}</h2>
    </div>
  );
};

export default ProductRow;
