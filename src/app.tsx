import React, {FunctionComponent, useState, useEffect} from "react";
import Pokemon from "./models/Pokemon";
import PokemonCard from './components/Pokemon-card'

import MockPokemon, {POKEMONS} from "./models/mock-pokemon";
import './css/style.css'
import {types} from "util";
const App: FunctionComponent = () => {

    //const [name, setState] = useState<String>('react');
    const [pokemons, setPokemon] = useState<Pokemon[]>([])

    useEffect( () => {
        setPokemon(POKEMONS)
    })

    return (
        <div className="pokedex">
            <h1>Pokedex</h1>
            <div className="containerPokedex">
                {pokemons.map(({id, name, picture, types, created}) => (
                    <div className='card'>
                        <p>{name}</p>
                        <img src={picture} alt={name}/>
                        <div className="types">
                        {types.map(({color, name}) => (
                            <p className="type" style={{background: color}} key={id}>{name}</p>
                        ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default App;
