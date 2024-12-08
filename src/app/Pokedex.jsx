import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Filters from '../components/pokedex/Filters'
import Search from '../components/pokedex/Search'
import { useFetch } from '../hooks/useFetch'
import PokemonList from '../components/pokedex/PokemonList'
import PokemonCard from '../components/pokedex/PokemonCard'
import { useNameContext } from '../contexts/nameContext'

function Pokedex() {
    const [name] = useNameContext()
   const [pokemons, setPokemons] = useFetch()
    const [pokemonUrl, setPokemonUrl] = useState(null)
    const [isFiltering,SetIsFiltering] =  useState(false)

   useEffect(() => {
    getPokemons()
   }, [])

   const getPokemons = () => {
    setPokemons('https://pokeapi.co/api/v2/pokemon')
   }
    const handleSearch = (value) => {
        if (!value) {
            SetIsFiltering(false)
            setPokemonUrl(null)
            setPokemons('https://pokeapi.co/api/v2/pokemon')
        } else{
            value = value.toLowerCase().trim()
            setPokemonUrl(`https://pokeapi.co/api/v2/pokemon/${value}/`)
        }
        
    }

    const handleTypeFilter = (type) => {
        if(!type){
            SetIsFiltering(false)
            setPokemons('https://pokeapi.co/api/v2/pokemon')
        } else {
            SetIsFiltering(true)
            setPokemons(`https://pokeapi.co/api/v2/type/${type}`)
        }
        console.log(type)
    }

    const onNext= () => {
        setPokemons(pokemons?.next)
    }

    const onPrev = () => {
        setPokemons(pokemons?.previous)
    }

    const pokemonsArray = isFiltering ? pokemons?.pokemon : pokemons?.results 
  return (<>
    <div className='aline'>
  <div className='hero'></div>
  <div className='hero2'><img className='img_poke' src="/poke.png" alt="" /></div>
  </div>
    <div className='pokedex'>
        <Link className='volver' to="/">{'←'} Volver</Link>

    <div className="pokedex_container">
        <div className='pokedex_header'>
                <p>Bienvenido {name},Aquí podrás encontrar tu pokemón favorito </p>       
        </div>

        <div className='pokedex_form'>
            <Search handleSearch={handleSearch}/>
            <Filters handleTypeFilter={handleTypeFilter}/>

        </div>

        <div>
            <button onClick={onPrev} disabled={!pokemons?.previous} className='volver'>Anterior</button>
            <button onClick={onNext} disabled={!pokemons?.next} className='volver'>Siguiente</button>
        </div>

        <div className='pokedex_cards'>
           {pokemonUrl? (
            <PokemonCard url={pokemonUrl}/>
        ) : (
            <PokemonList pokemons={pokemonsArray} isFiltering={isFiltering} />
           )}
                
        </div>
        </div>  
    </div>
    </>
  )
}

export {Pokedex}