import React from 'react'
import { useStyle } from '../hooks/useStyle';
import NextIcon  from '@material-ui/icons/NavigateNext';
import PrevIcon  from '@material-ui/icons/NavigateBefore';
import { Button, ButtonGroup, } from '@material-ui/core';

interface buttonProps{
    isNext: boolean;
    isPrev: boolean;
    handlePages: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Buttons: React.FC<buttonProps> = ({isNext, isPrev, handlePages}: buttonProps ) => {
    const classes = useStyle();
    return (
        <ButtonGroup className={classes.buttonGroup} >
                <Button startIcon={<PrevIcon/>} color={'secondary'} className={classes.buttons} id={'prev'} onClick={handlePages} disabled={!isPrev? true : false} ></Button>
                <Button startIcon={<NextIcon/>} color={'primary'} className={classes.buttons} id={'next'} onClick={handlePages} disabled={!isNext? true : false} ></Button>                
        </ButtonGroup>
    )
}

export default Buttons
