import React from "react";
import { useState } from "react";

const SearchBar = () => {

  const [userInput,setUserInput] = useState({
    enteredProduct: '',
    checked: false,
  });

  const productSearchHandler =(event)=>{
    event.preventDefault();

    setUserInput(()=>{
      return {...userInput, enteredProduct:event.target.value,};
    })
    
  };

  const productInStockHandler =(event)=>{
    setUserInput(()=>{
      return {...userInput, checked: event.target.value};
    })
    console.log("check");
  };

  const submitHandler =(event)=>{
    event.preventDefault();
    console.log("submit");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label>Search: </label>
          <input type="text" value={enteredProduct} onChange={productSearchHandler}></input>
        </div>
        <div>
          <input type="checkbox" value={checked} onChange={productInStockHandler}></input>
          <label>Only show products in stock</label>
        </div>
        <div>
          
          <button type="submit">Sumbit</button>
        </div>
      </div>
    </form>
  );
};
export default SearchBar;
