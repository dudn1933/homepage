import styled from "styled-components";
import { useContext } from "react";
import { GlobalContext } from '../../../../../util/GlobalProvider'

const FirstContent = () => {
    const { globalState } = useContext(GlobalContext);
    const { mousePoint, scrollPoint } = globalState;
    return (
        <StyledFirstContent point={mousePoint} target={scrollPoint.target} >
            
        </StyledFirstContent>
    )
}

export default FirstContent

const StyledFirstContent = styled.div.attrs(({point,target}) => ({
    style: {
        top: target === 2 ? -330+point.y : target === 3 ? -330+point.y : null,
        left: target === 2 ? -220+point.x : target === 3 ? 200+point.x : null,
    }
}))`
    position:absolute;
    width:400px;
    height:12vh;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 5px #F28E06;
    
    filter: drop-shadow(0 0 3px #F28E06);
    ${({theme}) => theme.center};
`;
