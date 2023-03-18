import React, {FunctionComponent} from "react";
import {RouteComponentProps, Link} from "react-router-dom";
import usePokemonById from "../hooks/use pokemon-by-id-hook";
import {constants} from "http2";
import PokemonHeader from "./pokemon-header";

type Params = {
    id: string
};
const PokemonDetails : FunctionComponent<RouteComponentProps<Params>> = ({match}) => {

    const pokemon = usePokemonById(match.params.id);
    return(
        <div>
            {pokemon ?
                (
                    <div>
                        <p>{pokemon.name}</p>
                        <img src={pokemon.picture} alt=""/>
                    </div>
                )
                :
                <p>Ce pokémon n'existe pas</p>
            }
        </div>

    );

}

export default PokemonDetails;