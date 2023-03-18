import React, {FunctionComponent, useEffect, useState} from "react";
import Pokemon from "../models/Pokemon";
import POKEMONS from "../models/mock-pokemon";
import {RouteComponentProps} from "react-router-dom";
import PokemonForm from "../components/pokemon-form";
import usePokemonById from "../hooks/use pokemon-by-id-hook";

type Props = {
    id: string
}
const PokemonEdit : FunctionComponent<RouteComponentProps<Props>> = ({match}) => {

    const pokemon = usePokemonById(match.params.id)
    return (
        <div>
            {pokemon ? (
                <div>
                    <h1>{pokemon.name}</h1>
                    <PokemonForm pokemon={pokemon}/>
                </div>
                ) : (
                <h1>Pas de pokemon</h1>
                )
            }
        </div>
    )
}

export default PokemonEdit;