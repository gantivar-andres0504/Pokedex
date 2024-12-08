import React, { useRef } from 'react'
import { IoSearch, IoSearchOutline } from 'react-icons/io5'

function Search({handleSearch}) {
    const inputRef =useRef()
    const onSearch = () => {
        handleSearch(inputRef.current.value)
        inputRef.current.value = ''
    }
  return (
    <div className='search'>
        <div className='search_input'>
            <IoSearchOutline/>
            <input type="text" placeholder='Buscar un pokemon' ref={inputRef}/>
        </div>
        <button onClick={onSearch} className='search_btn'>Buscar</button>
    </div>
  )
}

export default Search
