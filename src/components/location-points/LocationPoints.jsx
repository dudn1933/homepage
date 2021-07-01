import styled from "styled-components"
import Point from './point/Point'
import { useEffect, useContext } from 'react'
import { GlobalContext } from '../../util/GlobalProvider';

const LocationPoints = () => {


    const point = () => {
        return new Array(6).fill(0).map((v,i) => {
            return <Point key={i} index={i} />
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
    top: 47%;
`;