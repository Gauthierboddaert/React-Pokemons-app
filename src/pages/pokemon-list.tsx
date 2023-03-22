import React, { FunctionComponent, useEffect } from "react";
import Pokemon from "../type/Pokemon";
import PokemonCard from "../components/Pokemon-card";
import usePokemons from "../hooks/pokemon-hook";

const PokemonList: FunctionComponent = () => {

    const pokemons = usePokemons();
    console.log(pokemons);

    useEffect(() => {
        console.log(pokemons);
    }, [pokemons])

    return (
        <div className="pokedex">
            <div className="containerPokedex">
                {pokemons.map((pokemon: Pokemon) => <PokemonCard pokemon={pokemon} />)}
            </div>
        </div>
    );
}
export default PokemonList;