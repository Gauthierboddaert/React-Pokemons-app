import React, {FunctionComponent, useState} from "react";
import Pokemon from "./models/Pokemon";
import MockPokemon from "./models/mock-pokemon";

const App: FunctionComponent = () => {

    const [name, setState] = useState<String>('react');
    const [pokemon, setPokemon] = useState<Array<Pokemon>>(MockPokemon)

    return (
        <h1>Il y a {pokemon.length} présent dans le pokedex </h1>

    )
}

export default App;