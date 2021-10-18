import { type } from "os";
import { ActionTypes } from "../actionTypes";
import { PokemonState } from "../reducer/pokemonReducer";

interface SearchPokemon_Action {
    type: ActionTypes.SEARCH_POKEMON;
}

interface SearchPokemonSuccess_Action{
    type: ActionTypes.SEARCH_POKEMON_SUCCESS;
    payload: PokemonState
}

interface SearchPokemonError_Action{
    type: ActionTypes.SEARCH_POKEMON_ERROR;
    payload: string;
}

export type Action =
    SearchPokemon_Action |
    SearchPokemonSuccess_Action |
    SearchPokemonError_Action 
