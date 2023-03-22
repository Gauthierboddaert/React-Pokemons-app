import {useEffect, useState} from "react";
import Pokemon from "../type/Pokemon";
import pokemonService from "../Service/pokemon-service";

const usePokemonById = (id: string) => {

    const [pokemon, setPokemon] = useState<Pokemon|null>(null);

    useEffect(() => {
        pokemonService.getPokemonsById(id)
        .then( (pokemon: any) => {
            setPokemon(pokemon);
        }
    );
        
    }, [])

    return pokemon;
}

export default usePokemonById;