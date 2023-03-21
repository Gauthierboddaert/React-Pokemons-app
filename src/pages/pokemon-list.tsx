import React, {FunctionComponent} from "react";
import Pokemon from "../models/Pokemon";
import PokemonCard from "../components/Pokemon-card";
import usePokemons from "../hooks/pokemon-hook";

const PokemonList : FunctionComponent = () => {

    const pokemons = usePokemons();

    return (
        <div className="pokedex">
            <div className="containerPokedex">
                {pokemons.map((pokemon: any) => (
                    <h1>{pokemon.slug}</h1>
                ))}
            </div>
        </div>
    );
}
export default PokemonList;