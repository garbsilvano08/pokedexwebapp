import React from 'react';
import { useStyle } from '../hooks/useStyle';
import { useState, useRef, useEffect } from 'react';
import { pokemonsList, PokemonState } from '../state/reducer/pokemonReducer';
import { Modal, Box } from '@material-ui/core';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { useActions } from '../hooks/useActions';
import ModalPage from './ModalPage';


export const Cards: React.FC<pokemonsList> = (results : pokemonsList) => {
    const classes = useStyle();
    const [openPokemon, setOpenPokemon] = useState<boolean>(false);
    const [selectedPokemon, setSelectedPokemon] = useState<string>('');
    const state : PokemonState = useTypedSelector((state)=> state.pokemon);
    const { searchPokemon }  = useActions();
    

    const handleOpenModal = (e: React.MouseEvent<HTMLDivElement>) => {
        const element = e.currentTarget as HTMLDivElement
        const id = element.id;
        setSelectedPokemon(id);
        setOpenPokemon(true);
        searchPokemon(id);
    };

    const handleCloseModal = () => {
        setOpenPokemon(false);
    };
    

    return (
       <>
        <div className={classes.cards}>
                {
                    results.results?.map((pokemon, index) => {
                       return (
                        <div onClick={handleOpenModal}  id={pokemon.name} key={index} className={classes.card}>
                            <div className={classes.cardTitle}>
                                {pokemon.name.toUpperCase()}    
                            </div>
                        </div>
                       )
                    })
                }
        </div>
        <ModalPage openPokemon={openPokemon} handleCloseModal={handleCloseModal}/>
       </>
    )
}
