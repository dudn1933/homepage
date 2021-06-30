import styled from 'styled-components';

const Address = () => {
    return (
        <StyledAddress>
            <div>(26354) 강원도 원주시 지정면 기업도시로200 의료기기종합지원센터 8층 808호</div>
            <div>8F #808 Medical Device Complex Center, Gieopdosi-ro(st) 200, Jijeong-myeon, Wonju-si, Gangwon-do, Republic of Korea</div>
        </StyledAddress>
    )
}

export default Address

const StyledAddress = styled.div`
    > div {
        &:last-child {
            padding-top:10px;
        }
    }
`;
