import Type from "./Type";

export default class Pokemon {

    id: number;
    hp: number;
    cp: number;
    slug: string;
    picture: string;
    types: Array<Type>;
    created: Date;
    constructor(
        id: number,
        hp: number = 100,
        cp: number = 10,
        slug: string = '',
        picture: string = '',
        types: Array<Type> = [],
        created: Date = new Date()

    ) {
        this.id = id;
        this.hp = hp;
        this.cp  = cp;
        this.slug = slug;
        this.picture = picture;
        this.types = types;
        this.created = created;
    }

}