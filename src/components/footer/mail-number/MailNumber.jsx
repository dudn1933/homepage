import React from 'react'
import styled from 'styled-components'

const MailNumber = () => {
    return (
        <StyledMailNumber>
            <StyledList>
                <li>E-mail : help@me-zoo.com</li>
                <li>Phone : +82-33-761-2006</li>
                <li>Fax : +82-33-761-2036</li>
            </StyledList>
        </StyledMailNumber>
    )
}

export default MailNumber

const StyledMailNumber = styled.div``;
const StyledList = styled.ul`
    ${({theme}) => theme.center};
    color: #989898;
    
    > li {
        list-style: square;
        &:not(:first-child) {
            margin-left: 30px;
        }
    }
`;
