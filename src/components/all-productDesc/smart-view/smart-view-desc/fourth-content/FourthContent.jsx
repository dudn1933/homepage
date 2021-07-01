import styled from "styled-components"
import { useContext } from "react";
import { GlobalContext } from '../../../../../util/GlobalProvider'

const FourthContent = () => {
    const { globalState } = useContext(GlobalContext);
    const { mousePoint, scrollPoint } = globalState;

    return (
        <StyledFourthContent point={mousePoint} target={scrollPoint.target}>
            
        </StyledFourthContent>
    )
}

export default FourthContent

const StyledFourthContent = styled.div.attrs(({point, target}) => ({
    style: {
        top: target === 3 ? 70+point.y : null,
        left: target === 3 ? -650+point.x : null,
    }
}))`
    position:absolute;
    width:400px;
    height:12vh;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 5px #cf227e;
    
    filter:drop-shadow(0 0 3px #cf227e);
    ${({theme}) => theme.center};
`;
