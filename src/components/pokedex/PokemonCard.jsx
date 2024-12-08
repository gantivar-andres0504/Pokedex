import React, { Fragment, useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Link } from 'react-router-dom'
import { tipo } from '../../utils/helpers'


function PokemonCard({url}) {
    const [pokemon, setPokemon] = useFetch()

   useEffect(() => {
    if(url) getPokemon()
   }, [url])

   const getPokemon = () => {
    setPokemon(url)
   }

   const types = pokemon?.types?.map((type) => type.type.name) 

   if (!types) return
  return (
    <Link className='poke' to={`/pokedex/${pokemon?.name}`}>
      <div className='borde'>
      <div className={`poke_card type--${types[0] }`}>
          <div className='poke_card-header'>
              <img src={pokemon?.sprites?.other?.dream_world?.front_default} alt={pokemon?.name}/>
          </div>
          <div className='poke_card-body'>
              <h2 className='poke__card-name'>
              {pokemon?.name}
              </h2>
              <span className='poke_card-types'>
                {types.map((type,index)=>{
                  
                  return(<Fragment key={type}>
                    {index > 0? (<> 
                      / <span key={index +1} >{tipo[type]}</span>
                      </>): (
                    <span key={index + 1}>{tipo[type]}</span>
                  )}
                    </Fragment>)
                  })}
              </span>
              <p className='poke_card-type-label'>Tipo</p>
              <div className='poke_card-stats'>
              <div className='poke_card-stats-item'>
                <span>HP</span>
                <span>{pokemon?.stats[0]?.base_stat}</span>
              </div>
              <div className='poke_card-stats-item'>
                <span>Ataque</span>
                <span>{pokemon?.stats[1]?.base_stat}</span>
              </div>
              <div className='poke_card-stats-item'>
                <span>Defensa</span>
                <span>{pokemon?.stats[2]?.base_stat}</span>
              </div>
              <div className='poke_card-stats-item'>
                <span>Velocidad</span>
                <span>{pokemon?.stats[5]?.base_stat}</span>
              </div>
            </div>
          </div>    
        </div>
      </div>
        
    </Link>
  )
}

export default PokemonCard
