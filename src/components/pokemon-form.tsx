import React, {FunctionComponent, useState} from "react";
import Pokemon from "../models/Pokemon";
import Type from "../models/Type";

type Props = {
    pokemon: Pokemon
};

type Field = {
    value: any;
};

type Form = {
    name: Field,
    hp: Field,
    type: Field
}

const types: Type[] = [
    new Type('red', 'Feu'),
    new Type('blue', 'Eau'),
    new Type('green', 'Plante')
];

const PokemonForm : FunctionComponent<Props> = ({pokemon}) => {

    const [form] = useState<Form>({
        name: { value: pokemon.name },
        hp: {value: pokemon.hp},
        type: {value: pokemon.types}
    });

    const hasType = (type: string) => {
        return form.type.value[0].name.includes(type);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName: string = e.target.name;
    }

    return (
        <form>
            <div className="form">
                <label>Nom</label>
                <input type="text" value={form.name.value}></input>
                <label>Points de vie</label>
                <input value={form.hp.value} type="text"></input>
                <label>Types</label>
                {types.map((type: Type) => (
                    <div key={type.name}>
                        <label style={{color: type.color}} htmlFor="">{type.name}</label>
                        <input value={type.name} checked={hasType(type.name)} type="checkbox"/>
                    </div>
                ))}
            </div>
        </form>
    )
}

export default PokemonForm;