import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const[color, setColor] = useState("")
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#A12345').all(10))

  const handleSubmit = (e) =>{
    e.preventDefault();
    try{
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log('error')
  
    }
  }
  return(
  <>
    <section className='container' >
      <h3>color generator</h3>
      <form onSubmit={handleSubmit} >
        <input 
        type='text' 
        placeholder="#A12345"
        value={color} 
        onChange={(e)=>setColor(e.target.value)}
        className={`${error ? 'error' : null}`}
        />
  <button className='gen-btn' type='submit'  >submit</button>
      </form>
  
  </section>
  <section className='colors' >
    {list.map((color, index)=>{
      console.log(color)
      return <SingleColor key={index}
      {...color}
        index={index}
          hexColor={color.hex}
      />
    })}
  </section>
  </>
  )
}

export default App
