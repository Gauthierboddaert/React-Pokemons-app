import Pokemon from "../type/Pokemon";

export default class pokemonService {

    static getPokemons(): Promise<Pokemon[]>{
        return fetch('https://pokebuildapi.fr/api/v1/pokemon')
            .then(response => response.json());
    }

    static getPokemonsById(id: string): Promise<Pokemon>{
        return fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`)
        .then(response => response.json());
    }
}

