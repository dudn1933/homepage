import styled from "styled-components"
import { FcPlus } from 'react-icons/fc';
import { useContext } from 'react';
import { GlobalContext } from '../../../../util/GlobalProvider';
import SecondContent from "../../../all-productDesc/hicardi/hicardi-desc/second-content/SecondContent";

const SecondButton = () => {
    const { globalState, globalDispatch } = useContext(GlobalContext);
    const { mousePoint, scrollPoint } = globalState;

    const onMouseEnterEvent = (event) => {
        const value = event.type === 'mouseenter' ? 2 : 0;
        globalDispatch({type: 'mousePointChange', payload: { show: value, x: mousePoint.x, y: mousePoint.y }})
    }

    const onMouseMoveEvent = (event) => {
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;
        globalDispatch({type: 'mousePointChange', payload: { show: mousePoint.show, x:x, y:y}});
    }

    const onMouseLeaveEvent = () => {
        globalDispatch({type: 'mousePointChange', payload: { show: false, x:mousePoint.x, y:mousePoint.y }});
    }

    return (
        <StyledSecondButton target={scrollPoint.target}>
            <FcPlus onMouseEnter={onMouseEnterEvent} onMouseLeave={onMouseLeaveEvent} onMouseMove={onMouseMoveEvent}/>
            {mousePoint.show === 2 && <SecondContent />}
        </StyledSecondButton>
    )
}

export default SecondButton

const StyledSecondButton = styled.div`
    position:relative;
    > svg {
        border-radius: 50%;
        position:absolute;
        right: ${({target}) => target === 2 ? '-220px' : target === 3 ? '-230px' : null};
        bottom: ${({target}) => target === 2 ? '-150px' : target === 3 ? '-50px' : null};
        stroke-width: 5px;
        font-size: 30px;
        stroke: #25aae1;
        > circle {
            fill : transparent;
        }
        > g {
            fill: #F28E06;
            > rect {
                &:first-child {
                    x: 23.5px;
                    width: .01px;
                }
                &:last-child {
                    y: 23.5px;
                    height: .01px;
                }
            }
        }
        &:hover {
            box-shadow: 0 0 8px #25aae1;
        }
    }
`;
