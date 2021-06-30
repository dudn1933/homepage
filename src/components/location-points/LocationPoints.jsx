import styled from "styled-components"
import Point from './point/Point'

const LocationPoints = () => {
    const point = () => {
        return new Array(5).fill(0).map((v,i) => {
            return <Point key={i} />
        })
    }

    return (
        <StyledLocationPoints>
            {point()}
        </StyledLocationPoints>
    )
}

export default LocationPoints

const StyledLocationPoints = styled.div`
    position:fixed;
    z-index: 100;
    right: 7%;
    top: 48%;
`;