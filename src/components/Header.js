import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function Header({onDarkModeClick, isDarkMode}) {

    return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>

      <ShoppingList items={itemData} />
    </div>
    )
}

export default Header