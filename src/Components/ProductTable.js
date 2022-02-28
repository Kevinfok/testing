import ProductGrid from "./ProductGrid";


const ProductTable = (props) => {
  //console.log("test");

  const listItems = props.ProductList.map((listItem) => (
    <ProductGrid Product={listItem} key ={listItem.category}/>
  ));
  return (
    <div className="">
      <h2>Name Price</h2>
      {listItems}
    </div>
  );
};
export default ProductTable;
//  <TestingComponent/>
