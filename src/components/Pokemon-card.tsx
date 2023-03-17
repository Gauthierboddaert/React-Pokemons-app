import React, {FunctionComponent} from "react";
import Pokemon from "../models/Pokemon";

type Props = {
    pokemon: Pokemon
};

const PokemonCard : FunctionComponent<Props> = (props) => {

    return(
        <div>pokemon : {props.pokemon.name}</div>
    );

}

export default PokemonCard;