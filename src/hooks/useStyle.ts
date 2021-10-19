import { createStyles,makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import pokeball from "../images/pokeball.png";
import pokeballopen from "../images/pokeballopen.png";

export const useStyle = makeStyles((theme: Theme) => 
    createStyles({
        container:{
            marginTop: '10px',
            backgroundColor: "#F5F5F5",
            height: '97vh',
            borderRadius: '0.5em',
            padding: '20px',
            paddingLeft: '45px',
            paddingRight: '45px',
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
            overflow: 'auto',
        },
        logo:{
            zIndex: 1,
            fontSize: '40px',
            textAlign: 'left',
            fontFamily: [
                'Poppins',
                'sans-serif',
              ].join(','),
            margin: 0,
            color: '#FBC02D',
            '-webkit-text-stroke-width': '2px',
            '-webkit-text-stroke-color': 'blue',
        },
        loadingContainer:{
            marginTop: '20%',
            margin: 'auto',
            width: '160px',
            backgroundColor: 'white',
            borderRadius: '0.5em',
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
        },
        loadingIcon:{
            height: '49px',
            width: '50%',
            padding: '20px',
            margin: '20px',
            
        },
        errContainer:{
            marginTop: '14%',
            padding: '20px',
            textAlign: 'center',
            margin: 'auto',
            width: '400px',
            backgroundColor: 'white',
            borderRadius: '0.5em',
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
        },
        errHeader:{
            padding: '50px',
            margin: 'auto',
            boxShadow: 'rgba(50, 50, 93, 0.25)',
            backgroundColor: '#EFEBE9',
            borderRadius: '0.5em',
            fontFamily: [
                'Poppins',
                'sans-serif',
              ].join(','),
        },
        errBody:{
            padding: '50px',
            margin: 'auto',
            marginTop: '10px',
            boxShadow: 'rgba(50, 50, 93, 0.25)',
            backgroundColor: 'yellow',
            borderRadius: '0.5em',
            fontFamily: [
                'Poppins',
                'sans-serif',
              ].join(','),
        },
        cardsContainer:{
            marginTop: '20px',
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
            backgroundColor: '#FAFAFA',
            width: '96%',
            padding: '20px',
            borderRadius: '0.5em',
            maxHeight: '55vh',
            overflow: 'auto',
        },
        cards:{
            display: 'flex',
            flexWrap: 'wrap',
        },
        card:{
            padding: '10px',
            width: '240px',
            height: '40px',
            backgroundColor: '#F5F5F5',
            margin: 'auto',
            marginTop: '10px',
            marginBottom: '10px',
            borderRadius: '0.5em',
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
            backgroundImage: `url(${pokeball})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '65px, 65px',
            transitionDuration: '250ms',
            '&:hover':{
                backgroundImage: `url(${pokeballopen})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '50px, 50px',
                transform: 'scale(1.1)',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
                backgroundColor: '#FFF9C4',
            }
        },
        cardLink:{
            textDecoration: 'none',
            cursor: 'pointer',
            fontFamily: [
                'Poppins',
                'sans-serif',
              ].join(','),
            '&:visited':{
                color: '#26A69A',
            },
            '&:link':{
                color: 'black',
            },
            '&:hover':{
                color: 'red',
            }
        },
        cardTitle:{
            textAlign: 'center',
            margin: 'auto',
            paddingTop: '10px',
            textDecoration: 'none',
        },
        inputDiv:{
            display: 'flex',
            width: '25%',
            minWidth: '250px',
            position: 'relative',
            maxWidth: '30%',
        },
        searchBtn: {
            position: 'absolute',
            height: '56px',
            backgroundColor: 'yellow',
            right: '0',
            '&:hover':{
                backgroundColor: 'green'
            },
        },
        searchInput: {
            width: '100%',
            minWidth: '250px',
            backgroundColor: 'white',
            borderRadius: '0.5em',
        },
        buttonGroup: {
            float: 'right',
            padding: '10px',
            paddingTop: '20px',
            paddingRight: '20px',
            margin: 'auto',
        },
        buttons: {
            margin: 'auto',
            borderRadius: '100px',
            width: '100px',
            height: '50px',
        },
        modalContainer:{
            backgroundColor: 'rgba(0,0,0,0.2)',
        },
        pokemonHeader:{
            backgroundImage: `url(${pokeball})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '500px, 500px',
            backgroundPosition: 'right',
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
            marginTop: '25px',
            marginBottom: '10px',
            backgroundColor: '#F5F5F5',
            margin: 'auto',
            width: '90%',
            minWidth: '500px',
            padding: '10px',
            borderRadius: '0.5em',
            fontFamily: [
                'Poppins',
                'sans-serif',
              ].join(','),
        },
        pokemonBackBtn:{
            fontSize: '30px',
            backgroundColor: '#E57373',
            float: 'right',
            fontFamily: [
                'Poppins',
                'sans-serif',
              ].join(','),
            '&:hover':{
                backgroundColor: 'red',
            }
        },
        pokemonPokemon:{
            float: 'right',
            padding: '20px',
            borderRadius: '0.5em',
            color: 'black',
            backgroundColor: 'white',
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
            '-webkit-text-stroke-width': '1px',
            '-webkit-text-stroke-color': 'yellow',
        },
        pokemonTypeCards:{
            display: 'flex',
            flexWrap: 'wrap',
        },
        pokemonTypeCardNormal:{
            backgroundColor: '#EEEEEE',
            margin: '10px',
            padding: '20px',
            fontFamily: [
                'Poppins',
                'sans-serif',
              ].join(','),
            transitionDuration: '200ms',
            '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
            }
        },
        pokemonTypeCardGrass:{
            backgroundColor: 'green',
            margin: '10px',
            padding: '20px',
            fontFamily: [
                'Poppins',
                'sans-serif',
              ].join(','),
            transitionDuration: '200ms',
            '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
            }
        },
        pokemonTypeCardPoison:{
            backgroundColor: 'violet',
            margin: '10px',
            padding: '20px',
            fontFamily: [
                'Poppins',
                'sans-serif',
              ].join(','),
            transitionDuration: '200ms',
            '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
            }
        },
        pokemonTypeCardWater:{
            backgroundColor: 'blue',
            margin: '10px',
            padding: '20px',
            fontFamily: [
                'Poppins',
                'sans-serif',
              ].join(','),
            transitionDuration: '200ms',
            '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
            }
        },
        pokemonTypeCardFire:{
            backgroundColor: 'red',
            margin: '10px',
            padding: '20px',
            fontFamily: [
                'Poppins',
                'sans-serif',
              ].join(','),
            transitionDuration: '200ms',
            '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
            }
        },
        pokemonTypeCardGround:{
            backgroundColor: 'brown',
            margin: '10px',
            padding: '20px',
            fontFamily: [
                'Poppins',
                'sans-serif',
              ].join(','),
            transitionDuration: '200ms',
            '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
            }
        },
        pokemonTypeCardRock:{
            backgroundColor: 'grey',
            margin: '10px',
            padding: '20px',
            fontFamily: [
                'Poppins',
                'sans-serif',
              ].join(','),
            transitionDuration: '200ms',
            '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
            }
        },
        pokemonTypeCardSteel:{
            backgroundColor: '#CFD8DC',
            margin: '10px',
            padding: '20px',
            fontFamily: [
                'Poppins',
                'sans-serif',
              ].join(','),
            transitionDuration: '200ms',
            '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
            }
        },
        pokemonTypeCardIce:{
            backgroundColor: '#BBDEFB',
            margin: '10px',
            padding: '20px',
            fontFamily: [
                'Poppins',
                'sans-serif',
              ].join(','),
            transitionDuration: '200ms',
            '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
            }
        },
        pokemonTypeCardElectric:{
            backgroundColor: '#F9A825',
            margin: '10px',
            padding: '20px',
            fontFamily: [
                'Poppins',
                'sans-serif',
              ].join(','),
            transitionDuration: '200ms',
            '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
            }
        },
        pokemonTypeCardDragon:{
            backgroundColor: '#0D47A1',
            margin: '10px',
            padding: '20px',
            fontFamily: [
                'Poppins',
                'sans-serif',
              ].join(','),
            transitionDuration: '200ms',
            '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
            }
        },
        pokemonTypeCardGhost:{
            backgroundColor: '#D7CCC8',
            margin: '10px',
            padding: '20px',
            fontFamily: [
                'Poppins',
                'sans-serif',
              ].join(','),
            transitionDuration: '200ms',
            '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
            }
        },
        pokemonTypeCardPsychic:{
            backgroundColor: '#D7CCC8',
            margin: '10px',
            padding: '20px',
            fontFamily: [
                'Poppins',
                'sans-serif',
              ].join(','),
            transitionDuration: '200ms',
            '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
            }
        },
        pokemonTypeCardFighting:{
            backgroundColor: '#757575',
            margin: '10px',
            padding: '20px',
            fontFamily: [
                'Poppins',
                'sans-serif',
              ].join(','),
            transitionDuration: '200ms',
            '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
            }
        },
        pokemonTypeCardBug:{
            backgroundColor: '#DCE775',
            margin: '10px',
            padding: '20px',
            fontFamily: [
                'Poppins',
                'sans-serif',
              ].join(','),
            transitionDuration: '200ms',
            '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
            }
        },
        pokemonTypeCardFlying:{
            backgroundColor: '#00E5FF',
            margin: '10px',
            padding: '20px',
            fontFamily: [
                'Poppins',
                'sans-serif',
              ].join(','),
            transitionDuration: '200ms',
            '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
            }
        },
        pokemonTypeCardDark:{
            backgroundColor: '#6A1B9A',
            margin: '10px',
            padding: '20px',
            fontFamily: [
                'Poppins',
                'sans-serif',
              ].join(','),
            transitionDuration: '200ms',
            '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
            }
        },
        pokemonTypeCardFairy:{
            backgroundColor: '#18FFFF',
            margin: '10px',
            padding: '20px',
            fontFamily: [
                'Poppins',
                'sans-serif',
              ].join(','),
            transitionDuration: '200ms',
            '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
            }
        },
        pokemonFooterTitle:{
            marginTop: '20px',
            color: 'black',
            padding: '10px',
            height: '40px',
            borderRadius: '0.1em',
            fontSize: '30px',
            margin: '20px',
            backgroundColor: '#F5F5F5',
            fontFamily: [
                'Poppins',
                'sans-serif',
              ].join(','),
        },
        pokemonFooter:{
            display: 'flex',
            flexWrap: 'wrap',
            borderRadius: '0.5em',
            backgroundColor: '#FFF9C4',
            margin: 'auto',
            width: '90%',
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
        },
        pokemonCardsCon:{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '80%',
            margin: 'auto'
        },
        pokemonCards:{
            color: 'white',
            padding: '23px',
            borderRadius: '0.1em',
            margin: '20px',
            backgroundColor: 'grey',
            fontFamily: [
                'Poppins',
                'sans-serif',
              ].join(','),
            transitionDuration: '350ms',
            '&:hover':{
                transform: 'scale(1.1)',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
            }
        },
        pokemonBody:{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '60%',
            minWidth: '60%',
            margin: 'auto',
        },
        pokemonBodyStatsCard:{
            display: 'flex',
            flexWrap: 'wrap',
            padding: '10px',
            background: 'white',
            margin: '10px',
            width:'200px',
            minWidth:'200px',
            borderRadius: '0.5em',
            transitionDuration: '350ms',
            fontFamily: [
                'Poppins',
                'sans-serif',
              ].join(','),
            '&:hover':{
                transform: 'scale(1.1)',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
            }
        },
        pokemonBodyStatsCardTitle:{
            backgroundColor: 'yellow',
            textAlign: 'center',
            width: '80px',
            padding: '10px',
        },
        pokemonBodyStatsCardBody:{
            textAlign: 'center',
            padding: '10px',
            margin: 'auto',
        },
        pokemonImgContainer:{
            display: 'flex',
            flexWrap: 'wrap',
            margin: 'auto',
            width: '90%',
            padding: '10px',
            alignItems: 'center',
            borderRadius: '0.5em',
        },
        pokemonImg: {
            margin: 'auto',
            width: '25%',
            minWidth: '250px',
            height: '250px',
            transitionDuration: '500ms',
            '&:hover':{
                transform: 'scale(1.1)',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
            }
        },
        abilitiesContainer:{
            marginTop: '5%',
            padding: '20px',
            textAlign: 'center',
            margin: 'auto',
            width: '800px',
            backgroundColor: 'white',
            borderRadius: '0.5em',
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
        },
        abilitiesHeader:{
            color: 'white',
            padding: '23px',
            maxWidth: '400px',
            borderRadius: '0.1em',
            fontSize: '50px',
            margin: 'auto',
            marginBottom: '20px',
            backgroundColor: 'grey',
            fontFamily: [
                'Poppins',
                'sans-serif',
              ].join(','),
            transitionDuration: '350ms',
            '&:hover':{
                transform: 'scale(1.1)',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
            }
        },
        abilitiesBody:{
            backgroundColor: '#FFF9C4',
            fontSize: '20px',
            padding: '20px',
            fontFamily: [
                'Poppins',
                'sans-serif',
              ].join(','),
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'
        },
        abilitiesTitle:{
            backgroundColor: "#FFFDE7",
            padding: '20px',
            fontSize: '20px',
            margin: 'auto',
            fontFamily: [
                'Poppins',
                'sans-serif',
              ].join(','),
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'
        }
    })
);