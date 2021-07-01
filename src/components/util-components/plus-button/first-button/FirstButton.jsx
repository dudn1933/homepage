import styled from "styled-components"
import { FcPlus } from 'react-icons/fc';
import { useContext } from 'react';
import { GlobalContext } from '../../../../util/GlobalProvider';
import FirstContent from "../../../all-productDesc/hicardi/hicardi-desc/first-content/FirstContent";


const FirstButton = () => {
    const { globalState, globalDispatch } = useContext(GlobalContext);

    // scrollPoint.target 으로 + 버튼들 위치를 정한다.
    const { mousePoint, scrollPoint } = globalState;

    const onMouseEnterEvent = (event) => {
        const value = event.type === 'mouseenter' ? 1 : 0;
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
        <StyledFirstButton target={scrollPoint.target}>
            <FcPlus onMouseEnter={onMouseEnterEvent} onMouseLeave={onMouseLeaveEvent} onMouseMove={onMouseMoveEvent} />
            {mousePoint.show === 1 && <FirstContent />}
        </StyledFirstButton>
    )
}

export default FirstButton;

const StyledFirstButton = styled.div`
    position:relative;
    > svg {
        border-radius: 50%;
        position:absolute;
        left: ${({target}) => target === 2 ? '-12px' : target === 3 ? '100px' : null};
        top: ${({target}) => target === 2 ? '-100px' : target === 3 ? '-225px' : null};
        stroke-width: 5px;
        font-size: 30px;
        stroke: #F28E06;
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
            box-shadow: 0 0 8px #F28E06;
        }
    }
`;
