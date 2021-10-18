import { Container } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useStyle } from '../hooks/useStyle';
import { useTypedSelector } from '../hooks/useTypeSelector';
import React from 'react';
import {Cards} from './Cards';
import { pokemons, PokemonState } from '../state/reducer/pokemonReducer';
import Buttons from './Buttons';
import Searchbar from './Searchbar';
import axios from 'axios';
import ModalPage from './ModalPage';

const Mainpage : React.FC = () => {
    const classes = useStyle();
    const [name, setName] = useState<string>('');
    const [isNext, setIsNext] = useState<boolean>(false);
    const [isPrev, setIsPrev] = useState<boolean>(false);
    const [nextPage, setNextPage] = useState<string>('');
    const [prevPage, setPrevPage] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<string>('https://pokeapi.co/api/v2/pokemon/');
    const [results, setResults] = useState<[{ name: string, url: string}]>();
    const [openPokemon, setOpenPokemon] = useState<boolean>(false);
    const { searchPokemon }  = useActions();
    const state : PokemonState = useTypedSelector((state)=> state.pokemon);

    const getPokemonsData = async() =>{
        const {data}: pokemons = await axios.get(`${currentPage}`);
        setResults(data.results);
        if(data.next){
            setIsNext(true);
            setNextPage(data.next);
        }else{
            setIsNext(false);
        }

        if(data.previous){
            setIsPrev(true);
            setPrevPage(data.previous);
        }else{
            setIsPrev(false);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setName(e.target.value);
    }
    
    const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) =>{
        searchPokemon(name);
        setOpenPokemon(true);
    }

    const handleCloseModal = () => {
        setOpenPokemon(false);
    };

    console.log(state.data, 'Search');

    const handlePages = (e: React.MouseEvent<HTMLButtonElement>) => {
        const element = e.currentTarget as HTMLButtonElement
        const id = element.id
        if(id === 'next'){
            setCurrentPage(`${nextPage}`);
            getPokemonsData();
        }else{
            setCurrentPage(`${prevPage}`);
        }
    }

    useEffect(()=>{
        getPokemonsData();
    },[currentPage])
    return (
        <>
            <Container className={classes.container} maxWidth={'lg'}>
                <h1 className={classes.logo}>PokeDex</h1>
                <Searchbar name={name} handleChange={handleChange} handleSearch={handleSearch}/>

                <div className={classes.cardsContainer}>
                    {
                        results && (
                            <Cards results={results}/>
                        )
                    }
                </div>
                <Buttons isNext={isNext} isPrev={isPrev} handlePages={handlePages} />
            </Container>
            <ModalPage openPokemon={openPokemon} handleCloseModal={handleCloseModal}/>
        </>
    )
}

export default Mainpage;
