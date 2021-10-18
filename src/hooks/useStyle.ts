import { createStyles,makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import pokeball from "../images/pokeball.png";

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
        },
        logo:{
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
        cardsContainer:{
            marginTop: '20px',
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
            backgroundColor: '#FAFAFA',
            width: '96%',
            padding: '20px',
            borderRadius: '0.5em',
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
            cursor: 'pointer',
            fontFamily: [
                'Poppins',
                'sans-serif',
              ].join(','),
            backgroundImage: `url(${pokeball})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '65px, 65px',
            transitionDuration: '500ms',
            '&:hover':{
                transform: 'scale(1.2)',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
                backgroundSize: '80px',
                color: '#26A69A',
                backgroundColor: '#FFF9C4',
            }
        },
        cardTitle:{
            textAlign: 'center',
            margin: 'auto',
            paddingTop: '10px',
        },
        inputDiv:{
            display: 'flex',
            width: '25%',
            position: 'relative',
        },
        searchBtn: {
            position: 'absolute',
            height: '56px',
            backgroundColor: 'yellow',
            right: '0',
            '&:hover':{
                backgroundColor: 'green'
            }
        },
        searchInput: {
            width: '100%',
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
            transitionDuration: '350ms',
        },
        modalHeader:{
            backgroundImage: `url(${pokeball})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '500px, 500px',
            backgroundPosition: 'right',
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
            marginTop: '10px',
            marginBottom: '10px',
            backgroundColor: '#F5F5F5',
            margin: 'auto',
            width: '90%',
            padding: '10px',
            borderRadius: '0.5em',
            fontFamily: [
                'Poppins',
                'sans-serif',
              ].join(','),
        },
        modalPokemon:{
            float: 'right',
            padding: '20px',
            borderRadius: '0.5em',
            color: 'black',
            backgroundColor: 'white',
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
            '-webkit-text-stroke-width': '1px',
            '-webkit-text-stroke-color': 'yellow',
        },
        modalTypeCards:{
            display: 'flex',
            flexWrap: 'wrap',
        },
        modalTypeCardNormal:{
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
        modalTypeCardGrass:{
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
        modalTypeCardPoison:{
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
        modalTypeCardWater:{
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
        modalTypeCardFire:{
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
        modalTypeCardGround:{
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
        modalTypeCardRock:{
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
        modalTypeCardSteel:{
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
        modalTypeCardIce:{
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
        modalTypeCardElectric:{
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
        modalTypeCardDragon:{
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
        modalTypeCardGhost:{
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
        modalTypeCardPsychic:{
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
        modalTypeCardFighting:{
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
        modalTypeCardBug:{
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
        modalTypeCardFlying:{
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
        modalTypeCardDark:{
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
        modalTypeCardFairy:{
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
        modalFooterTitle:{
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
        modalFooter:{
            display: 'flex',
            flexWrap: 'wrap',
            borderRadius: '0.5em',
            backgroundColor: '#FFF9C4',
            margin: 'auto',
            width: '90%',
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
        },
        modalCardsCon:{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '60%',
        },
        modalCards:{
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
        modalBody:{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '60%',
        },
        modalBodyStatsCard:{
            display: 'flex',
            flexWrap: 'wrap',
            padding: '10px',
            background: 'white',
            margin: '10px',
            width:'200px',
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
        modalBodyStatsCardTitle:{
            backgroundColor: 'yellow',
            textAlign: 'center',
            width: '80px',
            padding: '10px',
        },
        modalBodyStatsCardBody:{
            textAlign: 'center',
            padding: '10px',
            margin: 'auto',
        },
        modalImgContainer:{
            display: 'flex',
            flexWrap: 'wrap',
            margin: 'auto',
            width: '90%',
            padding: '10px',
            alignItems: 'center',
            borderRadius: '0.5em',
        },
        modalImg: {
            margin: 'auto',
            width: '250px',
            height: '250px',
            transitionDuration: '500ms',
            '&:hover':{
                transform: 'scale(1.1)',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
            }
        }
    })
);