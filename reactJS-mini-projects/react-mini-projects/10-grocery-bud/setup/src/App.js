import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
const [name, setName] = useState('')
const [list, setList] = useState([])
const [isEditing, setIsEditing] = useState(false)
const [editId, setEditId] = useState(null)
  return <main>
    <article className='groc-art'>
      <h3>grocery bud</h3>
      <div className='div-groc' >
        <input 
      className='inputt' 
      type='text' 
      placeholder='e.g.eggs'
      />
      <button className='sub-btn' >submit</button>
      </div>
      
    </article>
  </main>
}

export default App
