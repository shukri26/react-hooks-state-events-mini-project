import React from "react";

function CategoryFilter({categories, click, selectedCategory}) {
  const buttons = categories.map((category, index) => {
    return (
      <button 
        key={index} 
        className={category === selectedCategory ? "selected" : ""} 
        onClick={() => click(category)}
      >
        {category} 
      </button>
    )
  });
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;