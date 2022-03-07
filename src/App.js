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

  return (
    <div>
      <FilterableProductTable Product={Product} />
    </div>
  );
}

export default App;
