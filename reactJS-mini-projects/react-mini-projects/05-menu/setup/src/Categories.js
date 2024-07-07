import React from 'react';

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="headerr">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="btns"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
