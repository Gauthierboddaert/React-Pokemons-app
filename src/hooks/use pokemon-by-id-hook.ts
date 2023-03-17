import {useState} from "react";
import Pokemon from "../models/Pokemon";
import POKEMONS from "../models/mock-pokemon";

const usePokemonById = (id: string) => {

    const [pokemon, setPokemon] = useState<Pokemon|null>(null);

    POKEMONS.forEach(pokemon => {
        if(id === pokemon.id.toString()){
            setPokemon(pokemon);
        }
    })

    return pokemon;
}

export default usePokemonById;