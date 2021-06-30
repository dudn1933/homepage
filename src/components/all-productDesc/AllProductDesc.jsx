import styled from "styled-components"
import { useContext } from 'react';
import Hicardi from "./hicardi/Hicardi"
import LiveStudio from "./live-studio/LiveStudio"
import SmartView from "./smart-view/SmartView"
import { GlobalContext } from '../../util/GlobalProvider'
import ProductContent from "./product-content/ProductContent";

const AllProductDesc = () => {
    const { globalState, globalDispatch } = useContext(GlobalContext);
    const { productView } = globalState;

    return (
        <StyledAllProductDesc className="all-products" productView={productView}>
            <StyledProducts>
                <Hicardi />
                <SmartView />
                <LiveStudio />
            </StyledProducts>
            <ProductContent />
        </StyledAllProductDesc>
    )
}

export default AllProductDesc

const StyledProducts = styled.div`
    bottom:0;
    width: 20%;
    height:90vh;
    padding-top:10vh;
    display:grid;
    grid-template-columns: repeat(1,3fr);
`;

const StyledAllProductDesc = styled.div`
    position:relative;  
    display:flex;
    width:100%;
    height:100vh;
    background: ${({productView}) => productView.hicardi ? `url('./image/hicardibackground2.jpg')` : productView.smartView ? `url('./image/smartViewVideo.gif')` : productView.liveStudio ? `url('./image/LiveStudiobackground.png')` : `url('./image/hicardiLogo.png')`};
    background-repeat: no-repeat;
    background-position: ${({productView}) => productView.hicardi ? 'center' : productView.smartView ? 'center' : productView.liveStudio ? 'center' : '5rem 65%'};
    background-size: ${({productView}) => productView.hicardi ? 'cover' : productView.smartView ? 'contain' : productView.liveStudio ? `cover` : 'contain'};;


    /* transition: all 0.1s ease-in-out; */
`;