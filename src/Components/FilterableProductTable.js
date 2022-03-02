import React from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
const FilterableProductTable = (props) => {
    const searchDataArr={};
  function controlSearchDataHandler  (enteredData)  {
     searchDataArr = {
      ...enteredData,
    };

  };
console.log(searchDataArr)
  const sortedProduct = props.Product.reduce((acc, curr) => {
    const { category } = curr;
    const objInAcc = acc.find((o) => o.category === category);
    if (objInAcc) objInAcc.data.push(curr);
    else acc.push({ category: category, data: [curr] });
    return acc;
  }, []);

  return (
    <div>
      <SearchBar onSubmitData={controlSearchDataHandler} />
      <ProductTable ProductList={sortedProduct} />
    </div>
  );
};
export default FilterableProductTable;
//      <SearchBar />
