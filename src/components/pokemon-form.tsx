import React, {FunctionComponent, useState} from "react";
import Pokemon from "../models/Pokemon";
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
    hp: Field,
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
        hp: {value: pokemon.hp},
        type: {value: pokemon.types}
    });

    const hasType = (type: string) => {
        return form.type.value[0].name.includes(type);
    };

    const history = useHistory();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(form);
        history.push('/pokemonss')
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName: string = e.target.name;
        const valueFiled: string = e.target.value;
        const newField: Field = {[fieldName]: {value: fieldName}, value : undefined}

        setForm({...form, ...newField})
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <div className="form">
                <label>Nom</label>
                <input type="text" onChange={e => handleInputChange(e)} id="name" value={form.name.value}></input>
                <label>Points de vie</label>
                <input onChange={(e) => {handleInputChange(e)}} id="hp" name="hp" value={form.hp.value} type="text"></input>
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