import styled from "styled-components"
import { useContext } from "react";
import { GlobalContext } from '../../../../../util/GlobalProvider'

const SecondContent = () => {
    const { globalState } = useContext(GlobalContext);
    const { mousePoint, scrollPoint } = globalState;

    return (
        <StyledSecondContent point={mousePoint} target={scrollPoint.target}>
            
        </StyledSecondContent>
    )
}

export default SecondContent

const StyledSecondContent = styled.div.attrs(({point, target}) => ({
    style: {
        top: target === 2 ? 200+point.y : target === 3 ? -50+point.y : null,
        left: target === 2 ? 200+point.x : target === 3 ? 250+point.x : null,
    }
}))`
    position:absolute;
    width:400px;
    height:12vh;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 5px #25aae1;
    
    filter:drop-shadow(0 0 3px #25aae1);
    ${({theme}) => theme.center};
`;
