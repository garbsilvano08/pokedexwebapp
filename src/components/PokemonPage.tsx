import { Button, Container } from '@material-ui/core';
import React from 'react'
import { useStyle } from '../hooks/useStyle'
import { useTypedSelector } from '../hooks/useTypeSelector';
import { PokemonState } from '../state/reducer/pokemonReducer';
import { useEffect, useState } from 'react';
import { useActions } from '../hooks/useActions';
import ModalPage from './ModalPage';

const PokemonPage: React.FC = () => {
    const { searchPokemon }  = useActions();
    const classes = useStyle();
    const state : PokemonState = useTypedSelector((state)=> state.pokemon);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [abilityUrl, setAbilityUrl] = useState<string>('');


    const handelBackButton = (e : React.MouseEvent<HTMLButtonElement>) => {
        if(localStorage.getItem('selectedPokemon')){
            localStorage.removeItem('selectedPokemon');
            window.location.replace(`/`);
        }else{
            window.location.replace(`/`);
        }
    }

    const handleOpenModal = (e: React.MouseEvent<HTMLDivElement>) =>{
        const element = e.currentTarget as HTMLDivElement
        const id = element.id;
        console.log(id);
        setAbilityUrl(id);
        setOpenModal(true);
    }

    const handleCloseModal = () =>{
        setAbilityUrl('');
        setOpenModal(false)
    }

    useEffect(() => {
        if(localStorage.getItem('selectedPokemon')){
            const name: string | null = localStorage.getItem('selectedPokemon');
            searchPokemon(name);
        }
    }, [])
    return (
        <>
        <Container className={classes.container} maxWidth={'lg'}>
        <span className={classes.logo}>PokeDex</span>
        <Button onClick={handelBackButton} className={classes.pokemonBackBtn} >BACK</Button>
         <div className={classes.pokemonHeader}>
                 <h1 className={classes.pokemonPokemon}>{state.data.name.toUpperCase()}</h1>
                 <div className={classes.pokemonTypeCards}>
                     {
                         state.data.types.map((type) =>{ 
                             return(
                                 <div key={type.slot} className={
                                     type.type.name === 'grass'? 
                                     classes.pokemonTypeCardGrass : 
                                     type.type.name === 'poison'? 
                                     classes.pokemonTypeCardPoison : 
                                     type.type.name === 'water'? 
                                     classes.pokemonTypeCardWater : 
                                     type.type.name === 'fire'? 
                                     classes.pokemonTypeCardFire : 
                                     type.type.name === 'ground'? 
                                     classes.pokemonTypeCardGround : 
                                     type.type.name === 'rock'? 
                                     classes.pokemonTypeCardRock : 
                                     type.type.name === 'steel'? 
                                     classes.pokemonTypeCardSteel : 
                                     type.type.name === 'ice'? 
                                     classes.pokemonTypeCardIce : 
                                     type.type.name === 'electric'? 
                                     classes.pokemonTypeCardElectric : 
                                     type.type.name === 'dragon'? 
                                     classes.pokemonTypeCardDragon : 
                                     type.type.name === 'ghost'? 
                                     classes.pokemonTypeCardGhost : 
                                     type.type.name === 'psychic'? 
                                     classes.pokemonTypeCardPsychic : 
                                     type.type.name === 'fighting'? 
                                     classes.pokemonTypeCardFighting : 
                                     type.type.name === 'bug'? 
                                     classes.pokemonTypeCardBug : 
                                     type.type.name === 'flying'? 
                                     classes.pokemonTypeCardFlying : 
                                     type.type.name === 'dark'? 
                                     classes.pokemonTypeCardDark : 
                                     type.type.name === 'fairy'? 
                                     classes.pokemonTypeCardWater : 
                                     classes.pokemonTypeCardNormal}>
                                     <h3>{type.type.name.toUpperCase()}</h3>
                                 </div>
                             )
                         })
                     }
                 </div>
         </div>
         <div id={'imgCon'} className={classes.pokemonImgContainer}>
             <img id={'img'} className={classes.pokemonImg} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${state.data.id}.png`}/>
             <div className={classes.pokemonBody}>
                 {
                     state.data.stats.map((stat , index)=>{
                         return(
                             <div key={index} className={classes.pokemonBodyStatsCard}>
                                 <div className={classes.pokemonBodyStatsCardTitle}>
                                     {stat.stat.name.toUpperCase()}
                                 </div>
                                 <div className={classes.pokemonBodyStatsCardBody}>
                                     {stat.base_stat}
                                 </div>
                             </div>
                         )
                     })
                 }
             </div>
         </div>
         <div className={classes.pokemonFooter}>
                 <div className={classes.pokemonFooterTitle}>
                     ABILITIES
                 </div>
                 <div className={classes.pokemonCardsCon}>
                 {state.data.abilities.map((ability) => {
                     return(
                         <div key={ability.slot} onClick={handleOpenModal} id={ability.ability.url} className={classes.pokemonCards}>
                                 {ability.ability.name.toUpperCase()}
                         </div>
                     )
                 })}
                 </div>
         </div>
        </Container>
        {
            openModal && <ModalPage openModal={openModal} abilityUrl={abilityUrl} handleCloseModal={handleCloseModal} />
        }
        </>
    )
}

export default PokemonPage
