import {useState, useEffect} from "react";
import Pokemon from "../type/Pokemon";
import pokemonService from "../Service/pokemon-service";

const usePokemons = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        const api = pokemonService.getPokemons()
            .then((pokemon: Pokemon[]) => {
                setPokemons(pokemon)
            });
    }, [])

    return pokemons;
}


export default usePokemons;