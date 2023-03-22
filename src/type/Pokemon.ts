import Type from "../models/Type";
import Evolution from "./Evolution";
import Resistance from "./Resistances";

type Pokemon = {
    id: number;
    pokedexId: number;
    apiEvolution: Array<Evolution>;
    apiGeneration: number;
    apiPreEvolution: string;
    apiResistances: Array<Resistance>;
    apiResistancesWithAbilities: Array<any>;
    apiTypes: Array<Type>;
    name: string;
    image:string
    resistanceModifyingAbilitiesForApi: Array<any>;
    slug: string;
    sprite: string;
}

export default Pokemon