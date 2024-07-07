import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['All',...new  Set(items.map((item) => item.category))]
console.log(allCategories)

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  

  const filterItems = (category) => {
    if(category === 'All'){
    setMenuItems(items);
    return;
  }
    const newItems = items.filter((item)=> item.category === category)
    setMenuItems(newItems)
  }

  

  return(
  <main>
    <section>
      <div>
        <h1 className='header' >our Menu</h1>
      <div className='underline' ></div>
      </div>
      
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </section>
    
  </main>
  )
}

export default App;
