import React, {FunctionComponent} from "react";
import Pokemon from "../models/Pokemon";
import Type from "../models/Type";

type Props = {
    pokemon: Pokemon
};

const types: Type[] = [
    new Type('red', 'Feu'),
    new Type('blue', 'Eau')
];

const PokemonForm : FunctionComponent<Props> = ({pokemon}) => {
    return (
        <form>
            <div className="form">
                <label>Nom</label>
                <input type="text"></input>
                <label>Points de vie</label>
                <input type="text"></input>
                <label>Types</label>
                {types.map((type: Type) => (
                    <div>
                        <label style={{color: type.color}} htmlFor="">{type.name}</label>
                        <input type="checkbox"/>
                    </div>
                ))}
            </div>
        </form>
    )
}

export default PokemonForm;