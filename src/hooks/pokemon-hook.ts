import {useState, useEffect} from "react";
import Pokemon from "../models/Pokemon";
import POKEMONS from "../models/mock-pokemon";
import pokemonService from "../Service/pokemon-service";

const usePokemons = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const api = pokemonService.getPokemons()
            .then((pokemon: any) => {
                setPokemons(pokemon)
            });
    }, [])

    return pokemons;
}


export default usePokemons;