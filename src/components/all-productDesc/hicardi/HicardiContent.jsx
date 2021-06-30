import styled, { keyframes } from "styled-components"

const HicardiContent = () => {
    return (
        <StyledHicardiContent>
            <StyledTitleBox>
                <div>SmartPatch</div>
                <div>패치형 심전계</div>
            </StyledTitleBox>
        </StyledHicardiContent>
    )
}

export default HicardiContent

const contentAnimation = keyframes`
    0% {
        opacity:0;
        top:20px;
    }
    100% {
        opacity:1;
        top:0px;
    }
`;

const StyledTitleBox = styled.div`
    display:flex;
    height:3rem;
    > div {
        &:first-child {
            color: #20206d;
            font-size: 3rem;
        }
        &:last-child {
            padding-top:1.5rem;
            padding-left:1rem;
            font-size: 1rem;
            font-weight: bold;
            color: #cf227e;
        }

    }
`;

const StyledHicardiContent = styled.div`
    position:absolute;  
    padding: 10% 10% ;
    height:100vh;

    animation-name: ${contentAnimation};
    animation-fill-mode: forwards;
    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
`;
