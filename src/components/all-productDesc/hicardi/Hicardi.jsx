import styled from "styled-components";
import { useContext } from 'react';
import { GlobalContext } from '../../../util/GlobalProvider';

const Hicardi = () => {
    const { globalState, globalDispatch } = useContext(GlobalContext);
    const { productView } = globalState;

    const onMouseEnterEvent = () => {
        globalDispatch({type:'productViewChange', payload: {hicardi: true, smartView: false, liveStudio: false}});
    };

    return (
        <StyledHicardi>
            <StyledProduct onMouseEnter={onMouseEnterEvent}/>
        </StyledHicardi>
    )
}

export default Hicardi

const StyledProduct = styled.div`
    cursor: pointer;
    background: url('./image/Hicardi_electrode.png');
    background-repeat: no-repeat;
    background-position: center;
    background-position-x: 8px;
    background-size: contain;
    width:100%;
    height:80%;
    box-sizing: border-box;

    filter: drop-shadow(0 0 2px black);
`;

const StyledHicardi = styled.div`
    ${({theme}) => theme.center};
`;
