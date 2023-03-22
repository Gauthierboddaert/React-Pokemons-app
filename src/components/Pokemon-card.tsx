import React, {FunctionComponent, useState} from "react";
import Pokemon from "../type/Pokemon";
import {useHistory} from "react-router-dom";
import './style.css'

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

    // const goToPokemon = (id: number) => {
    //     history.push(`/pokemon/${id}`)
    // }

    const goToPokemon = (id: number) => {
        history.push(`/pokemon/${id}`)
    }
    return(
        <div onDoubleClick={() => goToPokemon(pokemon.id)} style={{borderColor: color}} onMouseLeave={hideBorder} onMouseEnter={showBorder} className='card'>
            <p>{pokemon.name}</p>
            <img src={pokemon.image} alt="" />
            <div className="infosPoke">{pokemon.apiTypes.map((type: any) => (
                <div key={type.name}>
                    <img className="type" src={type.image} alt="" />
                </div>
            ))}</div>
        </div>
    );

}

export default PokemonCard;