import axios from 'axios'
import React, { Dispatch } from 'react'
import { Action } from '../action'
import { ActionTypes } from '../actionTypes';
import { pokemons, PokemonState } from '../reducer/pokemonReducer';


export const searchPokemon = ( name: string | null) => {
    return async(dispatch : Dispatch<Action>) =>{
        dispatch({
            type: ActionTypes.SEARCH_POKEMON
        });

        try{
            const pokemons: PokemonState = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

            dispatch({
                type: ActionTypes.SEARCH_POKEMON_SUCCESS,
                payload: pokemons
            })

        }catch(err){
            let errorMessage = "";
            if (err instanceof Error) {
                errorMessage = err.message;
            }
            dispatch({
                type: ActionTypes.SEARCH_POKEMON_ERROR,
                payload: errorMessage,
            });
        }
    }

}

