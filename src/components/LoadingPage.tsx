import { Box, Button, CircularProgress, Container, Modal } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useStyle } from '../hooks/useStyle';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { PokemonState } from '../state/reducer/pokemonReducer';
import loading from '../images/loading.gif';

export interface LoadingProps{
    openLoading: boolean;
    handleCloseLoading: () => void;
}

const LoadingPage: React.FC<LoadingProps> = ({openLoading, handleCloseLoading}: LoadingProps) => {
    const classes = useStyle();
    const state : PokemonState = useTypedSelector((state)=> state.pokemon);

    useEffect(() => {
        if(state.data.name !== ''){
            localStorage.setItem('selectedPokemon',state.data.name);
            window.location.replace(`/pokemon/${state.data.name}`);
        }
    }, [state])
    return (
        <></>
    )
}

export default LoadingPage
