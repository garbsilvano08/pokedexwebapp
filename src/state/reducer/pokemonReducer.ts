import React from 'react'
import { Action } from '../action';
import { ActionTypes } from '../actionTypes';

export interface PokemonState{
    loading: boolean;
    error: string | null;
    data: {
            abilities: 
                Array<{
                    ability:{
                        name: string;
                        url: string;
                    };
                    is_hidden: boolean;
                    slot: number;
                }>;
            base_experience: number;
            forms:Array<
                {
                    name: string;
                    url: string;
                }
            >;
            game_indices:Array<
                {
                    game_index: number;
                    version: {
                        name: string;
                        url: string;
                    }
                }
            >;
            height: number;
            held_items: never[];
            id: number;
            is_default: boolean;
            location_area_encounters: string;
            moves:Array<{}>;
            name: string;
            order: number;
            past_types: never[]
            species: {};
            sprites: {};
            stats: Array<
                {
                    base_stat: number,
                    effort: number,
                    stat:{
                        name: string,
                        url: string
                    }
                }
            >;
            types: Array<
                {
                    slot: number,
                    type:{
                        name: string,
                        url: string,
                    }
                }
            >;
            weight: number;
        };
}

export interface pokemons{
    data: {
        count: number,
        next: string,
        previous: string,
        results: [
            {
                name: string;
                url: string;
            }
        ]
    }
}

export interface pokemonsList{
   results: [{
        name: string,
        url: string,
    }] | undefined
}

export interface pokemonDetail{
    pokemon : 
        {
            name: string;
            url: string;
        }
}

const initialState = {
    loading: false,
    error: null,
    data: {
        abilities:[{
                ability:{
                    name: '',
                    url: '',
                },
                is_hidden: false,
                slot: 0,
        }],
        base_experience: 0,
        forms:[
            {
                name: '',
                url: '',
            }
        ],
        game_indices:[
                {
                    game_index: 0,
                    version: {
                        name: '',
                        url: '',
                    }
                }
        ],
        height: 0,
        held_items: [],
        id: 0,
        is_default: false,
        location_area_encounters: '',
        moves:[{}],
        name: '',
        order: 0,
        past_types: [],
        species: {},
        sprites: {},
        stats: [{
                    base_stat: 0,
                    effort: 0,
                    stat:{
                        name: '',
                        url: ''
                    }
        }],
        types: [{
            slot: 0,
            type:{
                name: '',
                url: '',
            }
        }],
        weight: 0,
    }
}

const pokemonReducer = (state : PokemonState = initialState, action: Action) : PokemonState  => {
    switch (action.type) {
        case ActionTypes.SEARCH_POKEMON:
            return{
                loading: true,
                error: null,
                data: {
                    abilities:[{
                            ability:{
                                name: '',
                                url: '',
                            },
                            is_hidden: false,
                            slot: 0,
                    }],
                    base_experience: 0,
                    forms:[
                        {
                            name: '',
                            url: '',
                        }
                    ],
                    game_indices:[
                            {
                                game_index: 0,
                                version: {
                                    name: '',
                                    url: '',
                                }
                            }
                    ],
                    height: 0,
                    held_items: [],
                    id: 0,
                    is_default: false,
                    location_area_encounters: '',
                    moves:[{}],
                    name: '',
                    order: 0,
                    past_types: [],
                    species: {},
                    sprites: {},
                    stats: [{
                        base_stat: 0,
                        effort: 0,
                        stat:{
                            name: '',
                            url: ''
                        }
                    }],
                    types: [{
                        slot: 0,
                        type:{
                            name: '',
                            url: '',
                        }
                    }],
                    weight: 0,
                }
            }
        case ActionTypes.SEARCH_POKEMON_ERROR:
            return{
                loading: false,
                error: action.payload,
                data: {
                    abilities:[{
                            ability:{
                                name: '',
                                url: '',
                            },
                            is_hidden: false,
                            slot: 0,
                    }],
                    base_experience: 0,
                    forms:[
                        {
                            name: '',
                            url: '',
                        }
                    ],
                    game_indices:[
                            {
                                game_index: 0,
                                version: {
                                    name: '',
                                    url: '',
                                }
                            }
                    ],
                    height: 0,
                    held_items: [],
                    id: 0,
                    is_default: false,
                    location_area_encounters: '',
                    moves:[{}],
                    name: '',
                    order: 0,
                    past_types: [],
                    species: {},
                    sprites: {},
                    stats: [{
                        base_stat: 0,
                        effort: 0,
                        stat:{
                            name: '',
                            url: ''
                        }
                    }],
                    types: [{
                        slot: 0,
                        type:{
                            name: '',
                            url: '',
                        }
                    }],
                    weight: 0,
                }
            }
        case ActionTypes.SEARCH_POKEMON_SUCCESS:
            return{
                loading: false,
                error: null,
                data: action.payload.data
            }
        default:
            return state;
    }
}

export default pokemonReducer
