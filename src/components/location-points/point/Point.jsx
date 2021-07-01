import styled from "styled-components"
import { useContext } from 'react'
import { GlobalContext } from '../../../util/GlobalProvider'

const Point = ({index}) => {
    const { globalState, globalDispatch } = useContext(GlobalContext);
    const { offsetTop } = globalState;
    const { target } = globalState.scrollPoint;
    const App = document.querySelector('.App');

    const onClickEvent = (event) => {
        const target = event.target.id;
        const location = target === '0' ? 'mainLocation' : target === '1' ? 'prodLocation' : target==='2' ? 'hicardiLocation' : target==='3' ? 'smartViewLocation' : target==='4' ? 'footerLocation' : null;
        App.scrollTo({top: offsetTop[location], behavior:'smooth'});
    }

    return (
        <StyledPoint id={index} target={target} index={index} onClick={onClickEvent}/>
    )
}

export default Point

const StyledPoint = styled.div`
    cursor:pointer;
    width:.5rem;
    height:.5rem;
    margin:5px;
    background-color: ${({target, index}) => target === index ? '#cf227e' : null};
    border: 1px solid #cf227e;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #cf227e;
    }
`;