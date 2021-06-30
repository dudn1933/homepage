import styled from 'styled-components';
import { useContext, useEffect } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {GlobalContext} from '../../util/GlobalProvider';

const Aside = () => {
    const { globalState, globalDispatch } = useContext(GlobalContext);
    const { navigationBar } = globalState;
    const App = document.querySelector('.App');

    useEffect(() => {
        const clickCheck = (event) => {
            const target = event.target.closest('.navigationBar');
            if(!target) globalDispatch({type:'navigationView', payload:{ show: false}});
        };

        window.addEventListener('click', clickCheck);
        return () => window.removeEventListener('click', clickCheck);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const onClick = () => {
        App.scrollTo({top:0, behavior:'smooth'});
    }

    const onClickEvent = () => {
        globalDispatch({type:'navigationView', payload:{ show: !navigationBar.show}});
    }

    const onClickMoveEvent = (pageNumber) => {
        const result = pageNumber === 0 ? 'mainLocation' : null;
        // pageNumber === 1 ? 'prodLocation' : pageNumber === 2 ? 'contentLocation' : pageNumber === 3 ? 'useLocation' : pageNumber === 4 ? 'footerLocation' : null;
        globalDispatch({type:'navigationView', payload:{ show: !navigationBar.show}});
        App.scrollTo({top:globalState.offsetTop[result], behavior:'smooth'});
    }    

    return (
        <StyledAside>
            <Logo onClick={onClick}>
                <CompanyLogo />
            </Logo>
            <GiHamburgerMenu className="navigationBar" onClick={onClickEvent}/>
            { navigationBar.show && (
                <StyledNavigationBar className="navigationBar">
                    <div onClick={() => onClickMoveEvent(0)}>메인</div>
                    {/* <div onClick={() => onClickMoveEvent(1)}>carousel사진</div>
                    <div onClick={() => onClickMoveEvent(2)}>기기설명</div>
                    <div onClick={() => onClickMoveEvent(3)}>사용법</div>
                    <div onClick={() => onClickMoveEvent(4)}>support</div> */}
                </StyledNavigationBar>
            )}
        </StyledAside>
    )
}

export default Aside

const StyledNavigationBar = styled.div`
    position:absolute;
    z-index: 11;
    width: 200px;
    height: 30vh;
    right:0;
    top:70%;
    margin-right:3%;
    background-color: white;
    border-radius: 10px;
    border: ${({theme}) => `1px solid ${theme.colors.main}`};
    color:black;

    display: grid;
    grid-template-columns: repeat(1,5fr);
    align-items: center;
    box-sizing: border-box;
    padding: 10px 20px;

    > div {
        pointer-events: fill;
        cursor: pointer;
        &:hover {
            color: ${({theme}) => theme.colors.main};
        }
    }
`;

const Logo = styled.div`
    cursor:pointer;
    width:120px;
    height:40px;
    background-color: transparent;
`;

const CompanyLogo = styled.div`
    background: url('./image/P_logo.png');
    background-repeat: no-repeat;
    background-size: contain;
    width:100%;
    height:40px;
`;

const StyledAside = styled.div`
    pointer-events: none;
    z-index:10;
    position:fixed;
    box-sizing: border-box;
    width:100%;
    display:flex;
    justify-content: space-between;
    background-color: transparent;
    padding: 3%;

    > svg {
        pointer-events: fill;
        cursor: pointer;
        color: black;
        font-size: 30px;
    }
`;
