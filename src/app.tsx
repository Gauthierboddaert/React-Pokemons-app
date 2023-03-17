import React, {FunctionComponent, useState, useEffect} from "react";
import Pokemon from "./models/Pokemon";
import MockPokemon, {POKEMONS} from "./models/mock-pokemon";
import './css/style.css'
const App: FunctionComponent = () => {

    //const [name, setState] = useState<String>('react');
    const [pokemons, setPokemon] = useState<Pokemon[]>([])

    useEffect( () => {
        setPokemon(POKEMONS)
    })


    return (
        <div className="pokedex">
            <div className="containerPokedex">
                {pokemons.map(({id, name, picture}) => (
                    <div className='card'>
                        <img src={picture} alt={name}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default App;
