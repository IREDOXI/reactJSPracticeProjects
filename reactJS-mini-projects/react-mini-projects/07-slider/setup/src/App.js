import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App({}) {

  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  

  return <main>
    <section className='section'>
      <div className='title'>
        <h2><span>/</span> review</h2>
      </div>
      <section>

  <div className='section-center'>
    {people.map((person, personIndex)=>{
    const {image, name, title, quote, id} = person;


    return (<article  key={id} >
          <img src={image} className='person-img' alt={name}  />
                <h4>{name}</h4>
                <p className='title'>{title}</p>
                <p className='quote'>{quote}</p>
                <FaQuoteRight className='icon' />
        </article>
        )
  })}
  <button className='prev'> <FiChevronLeft /> </button>
  <button className='next'> <FiChevronRight /> </button>
  </div>
  
        
        
      </section>
      
    </section>
  </main>;
}

export default App;
