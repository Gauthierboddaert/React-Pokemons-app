import React, {FunctionComponent} from "react";
import {Link,BrowserRouter as Router, Route, Switch} from "react-router-dom";
import '../css/header.css'
import PokemonList from "./pokemon-list";
import PokemonDetails from "./pokemon-details";
import PageNotFound from "./page-not-found";
import pokemonEdit from "./pokemon-edit";
const PokemonHeader : FunctionComponent = () => {

    return (
        <Router>
            <nav>
                <h1><Link to="/pokemons">Pokédex</Link></h1>
            </nav>
            <Switch>
                <Route exact path="/pokemons" component={PokemonList}/>
                <Route exact path="/pokemon/:id" component={PokemonDetails}/>
                <Route exact path="/pokemon/edit/:id" component={pokemonEdit}/>
                <Route component={PageNotFound}/>
            </Switch>
        </Router>
    );

}

export default PokemonHeader;