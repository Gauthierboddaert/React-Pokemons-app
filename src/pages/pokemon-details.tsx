import React, {FunctionComponent} from "react";
import {RouteComponentProps, Link} from "react-router-dom";
import usePokemonById from "../hooks/use pokemon-by-id-hook";
import formateDate from "../utils/formate-date";

type Params = {
    id: string
};
const PokemonDetails : FunctionComponent<RouteComponentProps<Params>> = ({match}) => {

    const pokemon = usePokemonById(match.params.id);
    return(
        <div className="containerDetails">
            {pokemon ?
                (
                    <div className="card-details">
                       <div> <p>{pokemon.name}</p></div>
                        <img src={pokemon.picture} alt={pokemon.name}/>
                        <table>
                            <tr>
                                <td>Nom</td>
                                <th>{pokemon.name}</th>
                            </tr>
                            <tr>
                                <td>Types</td>
                                {pokemon.types.map(({color, name}) => (
                                    <th key={color} className="type" style={{background: color}}>{name}</th>
                                ))}

                            </tr>
                            <tr>
                                <td>Point de vie</td>
                                <th>{pokemon.hp}</th>
                            </tr>
                            <tr>
                                <td>Dégats</td>
                                <th>{pokemon.cp}</th>
                            </tr>
                            <tr>
                                <td>Date de création</td>
                                <th>{formateDate(pokemon.created)}</th>
                            </tr>
                        </table>
                    </div>
                )
                :
                <p>Ce pokémon n'existe pas</p>
            }
        </div>

    );

}

export default PokemonDetails;