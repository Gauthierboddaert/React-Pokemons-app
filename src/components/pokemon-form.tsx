import React, {FunctionComponent, useState} from "react";
import Pokemon from "../type/Pokemon";
import Type from "../models/Type";
import {useHistory} from "react-router-dom";

type Props = {
    pokemon: Pokemon
};

type Field = {
    value: any;
};

type Form = {
    name: Field,
    type: Field
}

const types: Type[] = [
    new Type('red', 'Feu'),
    new Type('blue', 'Eau'),
    new Type('green', 'Plante')
];

const PokemonForm : FunctionComponent<Props> = ({pokemon}) => {

    const [form, setForm] = useState<Form>({
        name: { value: pokemon.name },
        type: {value: pokemon.apiTypes}
    });

    const hasType = (type: string) => {
        return form.type.value[0].name.includes(type);
    };

    const history = useHistory();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        history.push('/pokemonss')
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName: string = e.target.name;
        const valueFiled: string = e.target.value;
        const newField: Field = {[fieldName]: {value: valueFiled}, value : undefined}

        setForm({...form, ...newField})
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <div className="form">
                <label>Nom</label>
                <input type="text" onChange={e => handleInputChange(e)} id="name" value={form.name.value}></input>
                <label>Types</label>
                {types.map((type: Type) => (
                    <div key={type.name}>
                        <label style={{color: type.color}} htmlFor="">{type.name}</label>
                        <input onChange={(e) => {handleInputChange(e)}} value={type.name} checked={hasType(type.name)} type="checkbox"/>
                    </div>
                ))}
            </div>
            <button>envoyer</button>
        </form>
    )
}

export default PokemonForm;