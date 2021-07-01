import styled from "styled-components"
import PlusButton from "../../../util-components/plus-button/PlusButton"

const HicardiDesc = () => {
    return (
        <StyledHicardiDesc className="hicardi-desc">
            <StyledHicardiImage />
            <PlusButton />
        </StyledHicardiDesc>
    )
}

export default HicardiDesc

const StyledHicardiImage = styled.div`
    width:40rem;
    height:30vh;
    background: url('./image/Hicardi_front.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    filter: drop-shadow(0 0 3px black);
`;

const StyledHicardiDesc = styled.div`
    position:relative;
    ${({theme}) => theme.center};
    width:100%;
    height:100vh;
`;
