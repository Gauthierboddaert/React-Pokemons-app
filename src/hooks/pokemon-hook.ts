import {useState, useEffect} from "react";
import Pokemon from "../models/Pokemon";
import POKEMONS from "../models/mock-pokemon";
const usePokemons = () => {
    const [pokemons, setPokemons] = useState<Array<Pokemon>>([]);

    useEffect(() => {
        setPokemons(POKEMONS)
    }, [])

    return pokemons;
}



export default usePokemons;