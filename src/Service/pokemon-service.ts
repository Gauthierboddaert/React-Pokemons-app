import React from "react";
import Pokemon from "../models/Pokemon";

export default class pokemonService {

    static getPokemons(): any{
        return fetch('https://pokebuildapi.fr/api/v1/pokemon')
            .then(response => response.json());
    }

}

