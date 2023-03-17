import React, {FunctionComponent, useEffect, useState} from "react";
import Pokemon from "../models/Pokemon";
import POKEMONS from "../models/mock-pokemon";
import PokemonCard from "../components/Pokemon-card";
import usePokemons from "../hooks/pokemon-hook";

const PokemonList : FunctionComponent = () => {

    const pokemons = usePokemons();

    return (
        <div className="pokedex">
            <h1>Pokedex</h1>
            <div className="containerPokedex">
                {pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon}/>
                ))}
            </div>
        </div>
    );
}
export default PokemonList;