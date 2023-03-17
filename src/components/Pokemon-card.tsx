import React, {FunctionComponent, useState} from "react";
import Pokemon from "../models/Pokemon";

type Props = {
    pokemon: Pokemon,
    borderColor?: string
};

const PokemonCard : FunctionComponent<Props> = ({pokemon, borderColor = 'black'}) => {

    const [color, setColor] = useState<string>('');
    const showBorder = () => {
        setColor('red');
    }

    const hideBorder = () => {
        setColor(borderColor);
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
                src={pokemon.picture}
                alt={pokemon.name}
            />
            <div className="types">
                {pokemon.types.map(({color, name}) => (
                    <p key={color} className="type" style={{background: color}}>{name}</p>
                ))}
            </div>
            {/*<p>{formatDate(pokemon.created)}</p>*/}
        </div>
    );

}

export default PokemonCard;