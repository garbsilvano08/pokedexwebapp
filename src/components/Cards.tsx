import React, {useEffect} from 'react';
import { useStyle } from '../hooks/useStyle';
import { pokemonsList, PokemonState } from '../state/reducer/pokemonReducer';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { useActions } from '../hooks/useActions';


export const Cards: React.FC<pokemonsList> = (results : pokemonsList) => {
    const classes = useStyle();
    const state : PokemonState = useTypedSelector((state)=> state.pokemon);
    const { searchPokemon }  = useActions();
    

    const handleOpenPokemonPage = (e: React.MouseEvent<HTMLDivElement>) => {
        const element = e.currentTarget as HTMLDivElement
        const id = element.id;
        searchPokemon(id);
        localStorage.setItem('selectedPokemon', id);
    };
    

    return (
       <>
        <div className={classes.cards}>
                {
                    results.results?.map((pokemon, index) => {
                       return (
                        <div onClick={handleOpenPokemonPage}  id={pokemon.name} key={index} className={classes.card}>
                            <Link className={classes.cardLink} to={`/pokemon/${pokemon.name}`} >
                                <div className={classes.cardTitle}>
                                    {pokemon.name.toUpperCase()}    
                                </div>
                            </Link>
                        </div>
                       )
                    })
                }
        </div>
       </>
    )
}
