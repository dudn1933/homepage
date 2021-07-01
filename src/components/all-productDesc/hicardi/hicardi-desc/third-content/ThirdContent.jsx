import styled from "styled-components";
import { useContext } from "react";
import { GlobalContext } from '../../../../../util/GlobalProvider'

const ThirdContent = () => {
    const { globalState } = useContext(GlobalContext);
    const { mousePoint, scrollPoint } = globalState;
    return (
        <StyledThirdContent point={mousePoint} target={scrollPoint.target}>
            
        </StyledThirdContent>
    )
}

export default ThirdContent

const StyledThirdContent = styled.div.attrs(({point, target}) => ({
    style: {
        top: target === 2 ? 200+point.y : target === 3 ? -220+point.y : null,
        left: target === 2 ? -630+point.x : target === 3 ? -700+point.x : null,
    }
}))`
    position:absolute;
    width:400px;
    height:12vh;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 5px #9bd347;
    
    filter:drop-shadow(0 0 3px #9bd347);
    ${({theme}) => theme.center};
`;