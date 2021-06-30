import styled from "styled-components"
import { useContext } from 'react';
import { GlobalContext } from '../../../util/GlobalProvider';

const SmartView = () => {
    const { globalState, globalDispatch } = useContext(GlobalContext);
    const { productView } = globalState;

    const onMouseEnterEvent = () => {
        globalDispatch({type:'productViewChange', payload: {hicardi: false, smartView: true, liveStudio: false}});
    };

    return (
        <StyledSmartView>
            <StyledProduct onMouseEnter={onMouseEnterEvent}/>
        </StyledSmartView>
    )
}

export default SmartView

const StyledSmartView = styled.div`
    ${({theme}) => theme.center};
`;

const StyledProduct = styled.div`
    position:relative;
    cursor: pointer;
    background: url('./image/SmartView.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 45%;
    width:100%;
    height:70%;

    filter: drop-shadow(0 0 2px black);
`;
