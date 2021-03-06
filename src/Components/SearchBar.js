import React from "react";
import { useState } from "react";

const SearchBar = (props) => {
  const [userInput, setUserInput] = useState({
    enteredProduct: "",
    checked: false,
  });

  const productSearchHandler = (event) => {
    event.preventDefault();

    setUserInput(() => {
      return { ...userInput, enteredProduct: event.target.value };
    });
  };

  const productInStockHandler = () => {
    setUserInput(() => {
      return { ...userInput, checked: !userInput.checked };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const submitData = {
      checked: userInput.checked,
      enteredProduct: userInput.enteredProduct,
    };

    console.log(submitData);
    props.onSubmitData(submitData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label>Search: </label>
          <input
            type="text"
            value={userInput.enteredProduct}
            onChange={productSearchHandler}
          ></input>
        </div>
        <div>
          <input
            type="checkbox"
            value={userInput.checked}
            onChange={productInStockHandler}
          ></input>
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
