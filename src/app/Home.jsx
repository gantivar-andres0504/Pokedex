import React, { useRef } from 'react'
import { types, useNameContext } from '../contexts/nameContext'
import { Link,useNavigate } from 'react-router-dom'

function Home() {
 const inputRef = useRef()
 const [name, dispatch] = useNameContext()
 const navigate = useNavigate()

 const setName = () => {
  console.log(inputRef.current.value)
  dispatch({
    type: types.SET_NAME,
    payload: inputRef.current.value.trim()
  })
  inputRef.current.value = ''
  navigate('/pokedex')
 }

 const  clearName = () => {

  dispatch({
    type: types.CLEAR_NAME,
  })
 }
  return (<>
  <div className='aline'>
  <div className='hero'></div>
  <div className='hero2'><img className='img_poke' src="/poke.png" alt="" /></div>
  </div>
    <div className='home'>
      <img src="/dex.png" alt="" width={'500'}/>
       <div className="home_content">
        <h2 className='home_title'>¡Hola {name? (
            <>de nuevo, {name}</>
          ): ('Entrenador')}!</h2>

        <div>
          {name? (<>
            <p className='home_text'>¡Continuemos con tu viaje ! Ve a tu<Link className='home_link' to="/pokedex"> Pokedex</Link></p>
            <button onClick={clearName} className='home_btn btn--radius'>Salir</button>
            </>) : (<>
          <p className='home_text'>Para poder comenzar, dame tu nombre</p>

        <input ref={inputRef} type="text" placeholder='Tu nombre...' className='home_input'/>
        <button 
        onClick={setName} className='home_btn'>Comenzar</button>
        </>)} 
        </div>
       </div>
    </div>
    </>
  )
}

export  {Home}