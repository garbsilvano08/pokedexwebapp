import { type } from "os";
import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducer";

const reducers = combineReducers({ pokemon: pokemonReducer, })

export default reducers;

export type RootState = ReturnType<typeof reducers>;