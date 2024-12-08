import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { tipo } from '../utils/helpers'

function Details() {
  const params = useParams()
  const [pokemon, setPokemon] = useFetch()

  useEffect(()=> {
    if(params.name) getPokemon()
  },[params.name])
  
  const getPokemon = ( ) => {
    setPokemon(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
  }

  const types = pokemon?.types.map(type => type.type.name)

  return (<>
  <div className='aline'>
  <div className='hero'></div>
  <div className='hero2'><img className='img_poke' src="/poke.png" alt="" /></div>
  </div>
    <div class="pokedex-container">
  <div class="back-link">
  <Link to="/pokedex" className='volver'>{'←'} Volver</Link>
  </div>
  <div class="pokemon-info">
    <div class="pokemon-image">
      <img src={pokemon?.sprites?.other?.dream_world?.front_default} alt={pokemon?.name}/>
    </div>
    <div class="pokemon-details">
      <div class="id-name">
        <span className="id">#{pokemon?.id?.toString().padStart(3, '0')}</span>
        <h2 className="name">{pokemon?.name}</h2>
      </div>
      <div className="size">
        <div className="weight">
          <span className="label">Peso</span>
          <span className="value">{pokemon?.weight}</span>
        </div>
        <div className="height">
          <span className="label">Altura</span>
          <span className="value">{pokemon?.height}</span>
        </div>
      </div>
      <div className="type-abilities">
        <div className="type">
          <h3 className="label">Tipo</h3>
          <div className="values">
            {types?.map(type =>(
              <span key={type} className={`type-${type}`}>{tipo[type]}</span>
            ))}
          </div>
        </div>
        <div className="abilities">
          <h3 className="label">Habilidades</h3>
          <div className="values">
            {pokemon?.abilities?.map(data =>(
              <span key={data.ability.name} className="ability">{data.ability.name}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export  {Details}