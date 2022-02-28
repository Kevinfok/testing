import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductGrid = (props) => {
  const categoryLists = props.Product.data.map((categoryList) => (
    <ProductRow Product={categoryList} key={categoryList.id} />
  ));

  return (
    <div>
      <ProductCategoryRow Product={props.Product} />
      {categoryLists}
    </div>
  );
};

export default ProductGrid;

//<ProductCategoryRow Product={props.Product}/>
