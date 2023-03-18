import React, {FunctionComponent, useState} from "react";
import Pokemon from "../models/Pokemon";
import {useHistory} from "react-router-dom";

type Props = {
    pokemon: Pokemon,
    borderColor?: string
};

const PokemonCard : FunctionComponent<Props> = ({pokemon, borderColor = 'black'}) => {

    const [color, setColor] = useState<string>('');
    const history = useHistory();
    const showBorder = () => {
        setColor('red');
    }

    const hideBorder = () => {
        setColor(borderColor);
    }

    const goToPokemon = (id: number) => {
        history.push(`/pokemon/${id}`)
    }

    const goToEditPokemon = (id: number) => {
        history.push(`/pokemon/edit/${id}`)
    }

    return(
        <div
            style={{borderColor: color}}
            className='card'
            onMouseLeave={hideBorder}
            onMouseEnter={showBorder}
        >
            <p>{pokemon.name}</p>
            <img
                onDoubleClick={() => goToPokemon(pokemon.id)}
                src={pokemon.picture}
                alt={pokemon.name}
            />
            <div className="types">
                {pokemon.types.map(({color, name}) => (
                    <p key={color} className="type" style={{background: color}}>{name}</p>
                ))}
            </div>
            <button onClick={() => goToEditPokemon(pokemon.id)}>Edit</button>
        </div>
    );

}

export default PokemonCard;