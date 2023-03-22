import React, { FunctionComponent, useEffect } from "react";
import Pokemon from "../type/Pokemon";
import PokemonCard from "../components/Pokemon-card";
import usePokemons from "../hooks/pokemon-hook";

const PokemonList: FunctionComponent = () => {

    const pokemons = usePokemons();

    return (
        <div className="pokedex">
            <div className="containerPokedex">
                {pokemons.map((pokemon: Pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
            </div>
        </div>
    );
}
export default PokemonList;