import React, {FunctionComponent} from "react";
import {RouteComponentProps, useHistory} from "react-router-dom";
import usePokemonById from "../hooks/use pokemon-by-id-hook";
import formateDate from "../utils/formate-date";

type Params = {
    id: string
};
const PokemonDetails : FunctionComponent<RouteComponentProps<Params>> = ({match}) => {

    const history = useHistory();

    const gotToPokemonList = () => {
        history.push('/pokemons')
    }

    const pokemon = usePokemonById(match.params.id);
    return(
        <div className="containerDetails">
            {pokemon ?
                (
                    <div className="card-details">
                       <div> <p>{pokemon.name}</p></div>
                        <img src={pokemon.image} alt={pokemon.name}/>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Nom</td>
                                    <th>{pokemon.name}</th>
                                </tr>
                                <tr>
                                    <td>Types</td>
                                    {pokemon.apiTypes.map((type: any) => (
                                        <div>
                                            <th key={type.name} className="type">{type.name}</th>
                                            <th><img src={type.image} alt="" /></th>
                                        </div>
                                    ))}

                                </tr>
                            </tbody>
                        </table>
                        <button onClick={() => {gotToPokemonList()}}>Retour</button>
                    </div>

                )
                :
                <p>Ce pokémon n'existe pas</p>
            }
        </div>

    );

}

export default PokemonDetails;