import React from "react";
import Item from "./Item"

function Filter({ items, onCategoryChange, itemsToDisplay }) {
    console.log(itemsToDisplay)
    return (
        <div className="Filter">
        <select name="filter" onChange={onCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
        <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
        </div>
    )
}

export default Filter