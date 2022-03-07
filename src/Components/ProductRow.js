import React from "react";

const ProductRow = (props) => {
  return (
    <div>
      <h2>
        {props.Product.name} {props.Product.price}
      </h2>
    </div>
  );
};

export default ProductRow;
