import styled from "styled-components"
import PlusButton from "../../../util-components/plus-button/PlusButton"

const SmartViewDesc = () => {
    return (
        <StyledSmartViewDesc className="smart-view-desc">
            <StyledSmartViewImage />
            <PlusButton />
        </StyledSmartViewDesc>
    )
}

export default SmartViewDesc;

const StyledSmartViewImage = styled.div`
    width:40rem;
    height:80vh;
    background: url('./image/SmartView.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    filter: drop-shadow(0 0 3px black);
`;

const StyledSmartViewDesc = styled.div`
    position:relative;
    ${({theme}) => theme.center};
    width:100%;
    height:100vh;
`;
