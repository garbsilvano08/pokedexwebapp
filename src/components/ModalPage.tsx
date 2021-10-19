import { Box, Button, CircularProgress, Container, Modal } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useStyle } from '../hooks/useStyle';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { PokemonState } from '../state/reducer/pokemonReducer';
import loading from '../images/loading.gif';
import backgroundPokeball from '../images/pokeball.png'

export interface ModalProps{
    openPokemon: boolean;
    handleCloseModal: () => void;
}

const ModalPage: React.FC<ModalProps> = ({openPokemon,handleCloseModal}: ModalProps) => {
    const classes = useStyle();
    const state : PokemonState = useTypedSelector((state)=> state.pokemon);

    console.log(state);
    return (
        <Modal
            open={openPokemon}
            onClose={handleCloseModal}
            className={classes.modalContainer}
            >
               <>
               {
                   state.loading === false && state.error === null && 
                   <Container className={classes.container} maxWidth={'lg'}>
                    <h1 className={classes.logo}>PokeDex</h1>
                    <div className={classes.modalHeader}>
                            <h1 className={classes.modalPokemon}>{state.data.name.toUpperCase()}</h1>
                            <div className={classes.modalTypeCards}>
                                {
                                    state.data.types.map((type) =>{ 
                                        return(
                                            <div key={type.slot} className={
                                                type.type.name === 'grass'? 
                                                classes.modalTypeCardGrass : 
                                                type.type.name === 'poison'? 
                                                classes.modalTypeCardPoison : 
                                                type.type.name === 'water'? 
                                                classes.modalTypeCardWater : 
                                                type.type.name === 'fire'? 
                                                classes.modalTypeCardFire : 
                                                type.type.name === 'ground'? 
                                                classes.modalTypeCardGround : 
                                                type.type.name === 'rock'? 
                                                classes.modalTypeCardRock : 
                                                type.type.name === 'steel'? 
                                                classes.modalTypeCardSteel : 
                                                type.type.name === 'ice'? 
                                                classes.modalTypeCardIce : 
                                                type.type.name === 'electric'? 
                                                classes.modalTypeCardElectric : 
                                                type.type.name === 'dragon'? 
                                                classes.modalTypeCardDragon : 
                                                type.type.name === 'ghost'? 
                                                classes.modalTypeCardGhost : 
                                                type.type.name === 'psychic'? 
                                                classes.modalTypeCardPsychic : 
                                                type.type.name === 'fighting'? 
                                                classes.modalTypeCardFighting : 
                                                type.type.name === 'bug'? 
                                                classes.modalTypeCardBug : 
                                                type.type.name === 'flying'? 
                                                classes.modalTypeCardFlying : 
                                                type.type.name === 'dark'? 
                                                classes.modalTypeCardDark : 
                                                type.type.name === 'fairy'? 
                                                classes.modalTypeCardWater : 
                                                classes.modalTypeCardNormal}>
                                                <h3>{type.type.name.toUpperCase()}</h3>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                    </div>
                    <div id={'imgCon'} className={classes.modalImgContainer}>
                        <img id={'img'} className={classes.modalImg} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${state.data.id}.png`}/>
                        <div className={classes.modalBody}>
                            {
                                state.data.stats.map((stat)=>{
                                    return(
                                        <div key={stat.base_stat} className={classes.modalBodyStatsCard}>
                                            <div className={classes.modalBodyStatsCardTitle}>
                                                {stat.stat.name.toUpperCase()}
                                            </div>
                                            <div className={classes.modalBodyStatsCardBody}>
                                                {stat.base_stat}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={classes.modalFooter}>
                            <div className={classes.modalFooterTitle}>
                                ABILITIES
                            </div>
                            <div className={classes.modalCardsCon}>
                            {state.data.abilities.map((ability) => {
                                return(
                                    <div key={ability.slot} className={classes.modalCards}>
                                            {ability.ability.name.toUpperCase()}
                                    </div>
                                )
                            })}
                            </div>
                    </div>
                   </Container>
               }
                { state.loading === true && <div className={classes.loadingContainer}>
                    <img className={classes.loadingIcon} src={`${loading}`} alt={'loading'}/>
                </div>}
               {
                   state.error !== null &&
                   <div className={classes.loadingContainer}>
                       {state.error}
                   </div>
               }
               </>
        </Modal>
    )
}

export default ModalPage
