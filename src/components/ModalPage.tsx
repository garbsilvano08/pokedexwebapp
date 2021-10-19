import { Container, Modal } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import { useStyle } from '../hooks/useStyle'
import { useTypedSelector } from '../hooks/useTypeSelector';
import { PokemonAbilitiesProps, PokemonState } from '../state/reducer/pokemonReducer';
import axios from 'axios';

interface Modalprops{
    abilityUrl: string;
    openModal: boolean;
    handleCloseModal: () => void;
}

const initialStatePokemonAbilitiesProps = {
    data: {
        effect_changes: [''],
    effect_entries: [{
        effect: '',
        language:{
            name: '',
            url: '',
        },
        short_effect: '',
    }],
    flavor_text_entries: [{
        flavor_text: '',
        language: {
            name: '',
            url: '',
        },
        verstion_group: {
            name: '',
            url: '',
        }
    }],
    generation: [{
        name: '',
        url: '',
    }],
    id: 0,
    is_main_series: false,
    name: '',
    names: [{}],
    pokemon: [{}]
    }
}

const ModalPage: React.FC<Modalprops> = ({openModal, abilityUrl, handleCloseModal}: Modalprops) => {
    const classes = useStyle();
    const state : PokemonState = useTypedSelector((state)=> state.pokemon);
    const [data, setdata] = useState<PokemonAbilitiesProps>(initialStatePokemonAbilitiesProps);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const getAbilities = async() => {
        console.log(abilityUrl);
        const {data}: PokemonAbilitiesProps = await axios.get(abilityUrl);
        setdata({data});
        setIsLoaded(true);
    }

    console.log(data.data.effect_entries);

    useEffect(() => {
        getAbilities();
    }, [isLoaded])
    return (
        <Modal
            open={openModal}
            onClose={handleCloseModal}
        >
            <Container className={classes.abilitiesContainer} maxWidth={'lg'}>
                <div className={classes.abilitiesHeader}>
                    {
                        data.data.name.toUpperCase()
                    }
                </div>
                <div className={classes.abilitiesTitle}>
                {
                        data.data.effect_entries.map((effect, index) => {
                            if(effect.language.name === 'en'){
                            return effect.short_effect
                            }
                        })
                    }
                </div>
                <div className={classes.abilitiesBody}>
                    {
                        data.data.effect_entries.map((effect, index) => {
                            if(effect.language.name === 'en'){
                            return effect.effect
                            }
                        })
                    }
                </div>
            </Container>
        </Modal>
    )
}

export default ModalPage
