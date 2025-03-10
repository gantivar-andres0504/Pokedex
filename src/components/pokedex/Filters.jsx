import React, { useEffect, useRef } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { tipo } from '../../utils/helpers'

function Filters({handleTypeFilter}) {
  const [types, setTypes] = useFetch()
  const selectRef = useRef()
  useEffect(() =>{
    getTypes()
  },[])

  const getTypes = () => {
    setTypes('https://pokeapi.co/api/v2/type')
  }



  return (
    <div className='select'>
        <select className='select_input' ref={selectRef} onChange={() => handleTypeFilter(selectRef.current.value)}>
      <option value="">Todos los tipos</option>
      {types?.results?.map(type => (
        <option key={type.name} value={type.name}>
          {tipo[type.name] }
          </option>
      ))}
    </select>
    </div>
    
  )
}

export default Filters