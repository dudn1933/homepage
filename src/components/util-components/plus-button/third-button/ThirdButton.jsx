import styled from "styled-components"
import { FcPlus } from 'react-icons/fc';
import { useContext } from 'react';
import { GlobalContext } from '../../../../util/GlobalProvider';
import ThirdContent from "../../../all-productDesc/hicardi/hicardi-desc/third-content/ThirdContent";

const ThirdButton = () => {
    const { globalState, globalDispatch } = useContext(GlobalContext);
    const { mousePoint, scrollPoint } = globalState;

    const onMouseEnterEvent = (event) => {
        const value = event.type === 'mouseenter' ? 3 : 0;
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
        <StyledThirdButton target={scrollPoint.target}>
            <FcPlus onMouseEnter={onMouseEnterEvent} onMouseLeave={onMouseLeaveEvent} onMouseMove={onMouseMoveEvent}/>
            {mousePoint.show===3 && <ThirdContent />}
        </StyledThirdButton>
    )
}

export default ThirdButton

const StyledThirdButton = styled.div`
    position:relative;
    > svg {
        border-radius: 50%;
        position:absolute;
        left: ${({target}) => target === 2 ? '-230px' : target === 3 ? '-230px' : null};
        bottom: ${({target}) => target === 2 ? '-150px' : target === 3 ? '130px' : null};
        stroke-width: 5px;
        font-size: 30px;
        stroke: #9bd347;
        > circle {
            fill : transparent;
        }
        > g {
            fill: #9bd347;
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
            box-shadow: 0 0 8px #9bd347;
        }
    }
`;