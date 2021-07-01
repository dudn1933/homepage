import styled from "styled-components"
import FirstButton from "./first-button/FirstButton"
import FourthButton from "./fourth-button/FourthButton"
import SecondButton from "./second-button/SecondButton"
import ThirdButton from "./third-button/ThirdButton"

import { useContext } from 'react';
import { GlobalContext } from "../../../util/GlobalProvider"


const PlusButton = () => {
    const { globalState } = useContext(GlobalContext);
    const { scrollPoint } = globalState;

    return (
        <StyledPlusButton >
            <FirstButton />
            <SecondButton />
            <ThirdButton />
            {scrollPoint.target === 3 && <FourthButton /> }
        </StyledPlusButton>
    )
}

export default PlusButton

const StyledPlusButton = styled.div`
    position:absolute;
    z-index: 100;
    top:50%;
    left:50%;
`;