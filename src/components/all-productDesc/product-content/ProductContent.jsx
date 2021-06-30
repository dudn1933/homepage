import styled, { keyframes } from "styled-components"
import { useContext } from 'react';
import { GlobalContext } from '../../../util/GlobalProvider';
import HicardiContent from "../hicardi/HicardiContent";
import SmartViewContent from "../smart-view/SmartViewContent";
import LiveStudioContent from "../live-studio/LiveStudioContent";

const ProductContent = () => {
    const { globalState, globalDispatch } = useContext(GlobalContext);
    const { productView } = globalState;

    return (
        <StyledProductContent>
            { productView.hicardi ? <HicardiContent /> : productView.smartView ? <SmartViewContent /> : productView.liveStudio ? <LiveStudioContent /> : null}
        </StyledProductContent>
    )
}

export default ProductContent



const StyledProductContent = styled.div`
    position: relative;
    width:100%;
    height:100vh;
    background-color: transparent;
`;
