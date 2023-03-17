import React, {FunctionComponent} from "react";
import usePokemons from "../hooks/pokemon-hook";
import {RouteComponentProps, Link} from "react-router-dom";
import usePokemonById from "../hooks/use pokemon-by-id-hook";

type Params = {
    id: string
};
const PokemonDetails : FunctionComponent<RouteComponentProps<Params>> = ({match}) => {

    const pokemon = usePokemonById(match.params.id);

    return(
       <div>
           { pokemon ? (
           <div>{pokemon.name}</div>
           ) : (
               <p>Aucun pokemon présent </p>
           )
           }
       </div>

    );

}

export default PokemonDetails;