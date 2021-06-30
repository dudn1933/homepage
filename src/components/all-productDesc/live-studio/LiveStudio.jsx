import styled from "styled-components"
import { useContext } from 'react';
import { GlobalContext } from '../../../util/GlobalProvider';

const LiveStudio = () => {
    const { globalState, globalDispatch } = useContext(GlobalContext);
    const { productView } = globalState;

    const onMouseEnterEvent = () => {
        globalDispatch({type:'productViewChange', payload: {hicardi: false, smartView: false, liveStudio: true}});
    };

    return (
        <StyledLiveStudio>
            <StyledProduct onMouseEnter={onMouseEnterEvent}/>
        </StyledLiveStudio>
    )
}

export default LiveStudio

const StyledLiveStudio = styled.div`
    ${({theme}) => theme.center};
`;

const StyledProduct = styled.div`
    position:relative;
    cursor: pointer;
    background: url('./image/LiveStudio.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width:100%;
    height:80%;
    box-sizing: border-box;

    filter: drop-shadow(0 0 2px black);
`;
