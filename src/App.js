import "./App.css";
import FilterableProductTable from "./Components/FilterableProductTable";
//import ProductTable from "./Components/ProductTable";
//import SearchBar from "./Components/SearchBar";

function App() {
  const Product = [
    {
      id: "1",
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football",
    },
    {
      id: "2",
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball",
    },
    {
      id: "3",
      category: "Sporting Goods",
      price: "$29.99",
      stocked: false,
      name: "Basketball",
    },
    {
      id: "4",
      category: "Electronics",
      price: "$99.99",
      stocked: true,
      name: "iPod Touch",
    },
    {
      id: "5",
      category: "Electronics",
      price: "$399.99",
      stocked: false,
      name: "iPhone 5",
    },
    {
      id: "6",
      category: "Electronics",
      price: "$199.99",
      stocked: true,
      name: "Nexus 7",
    },
  ];

  /* function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      let key = obj[property]
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(obj)
      return acc
    }, {})
  }*/

  /*  const testFunction =()=>{
    console.log("testingFunction");
  };*/

  /*const sortedProduct = Product.reduce((acc, curr) => {
    const { category } = curr;
    const objInAcc = acc.find((o) => o.category === category);
    if (objInAcc) 
    objInAcc.data.push(curr);
    else 
    acc.push({ category: category, data: [curr] });
    return acc;
  }, []);
*/
  //console.log(sortedProduct);

  //const sortedProduct = groupBy(Product,'category');

  //console.log({sortedProduct});
  //console.log(Product[0]);
  //console.log(sortedProduct['Electronics']);
  return (
    <div>
      <FilterableProductTable Product={Product} />
    </div>
  );
}

export default App;
