import styled from "styled-components"
import { FcPlus } from 'react-icons/fc';
import { useContext } from 'react';
import { GlobalContext } from '../../../../util/GlobalProvider';
import FourthContent from "../../../all-productDesc/smart-view/smart-view-desc/fourth-content/FourthContent";

const FourthButton = () => {
    const { globalState, globalDispatch } = useContext(GlobalContext);

    // scrollPoint.target 으로 + 버튼들 위치를 정한다.
    const { mousePoint, scrollPoint } = globalState;

    const onMouseEnterEvent = (event) => {
        const value = event.type === 'mouseenter' ? 4 : 0;
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
        <StyledFourthButton target={scrollPoint.target}>
            <FcPlus onMouseEnter={onMouseEnterEvent} onMouseLeave={onMouseLeaveEvent} onMouseMove={onMouseMoveEvent} />
            {mousePoint.show === 4 && <FourthContent />}
        </StyledFourthButton>
    )
}

export default FourthButton

const StyledFourthButton = styled.div`
    position:relative;
    > svg {
        border-radius: 50%;
        position:absolute;
        left: ${({target}) => target === 3 ? '-140px' : null};
        top: ${({target}) => target === 3 ? '140px' : null};
        stroke-width: 5px;
        font-size: 30px;
        stroke: #cf227e;
        > circle {
            fill : transparent;
        }
        > g {
            fill: #cf227e;
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
            box-shadow: 0 0 8px #cf227e;
        }
    }
`;