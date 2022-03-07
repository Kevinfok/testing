import React from "react";
import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
const FilterableProductTable = (props) => {
  const [initProduct, setProduct] = useState(props.Product);

  function sortedProduct_func(obj) {
    const sortedProduct = obj.reduce((acc, curr) => {
      const { category } = curr;
      const objInAcc = acc.find((o) => o.category === category);
      if (objInAcc) objInAcc.data.push(curr);
      else acc.push({ category: category, data: [curr] });
      return acc;
    }, []);
    return sortedProduct;
  }
  const controlSearchDataHandler = (enteredData) => {
    if (enteredData.checked === false) {
      const result = props.Product.filter((list) =>
        list.name
          .toLowerCase()
          .includes(enteredData.enteredProduct.toLowerCase())
      );
      
      setProduct(() => {
        return result;
      });
    } else {
      const result = props.Product.filter(
        (list) =>
          list.name
            .toLowerCase()
            .includes(enteredData.enteredProduct.toLowerCase()) &&
          list.stocked === true
      );

      setProduct(() => {
        return result;
      });
    }
  };

  return (
    <div>
      <SearchBar onSubmitData={controlSearchDataHandler} />
      <ProductTable ProductList={sortedProduct_func(initProduct)} />
    </div>
  );
};
export default FilterableProductTable;
