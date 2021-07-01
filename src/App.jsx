import "./common/style/reset.css";
import theme from "./common/style/theme";
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";
import { GlobalContext } from './util/GlobalProvider';
import { useContext, useEffect, useRef, useCallback, useState } from 'react';
import AllProductDesc from "./components/all-productDesc/AllProductDesc";
import Aside from './components/aside/Aside';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LocationPoints from "./components/location-points/LocationPoints";
import HicardiDesc from "./components/all-productDesc/hicardi/hicardi-desc/HicardiDesc";
import SmartViewDesc from "./components/all-productDesc/smart-view/smart-view-desc/SmartViewDesc";

function App() {
  const { globalState, globalDispatch } = useContext(GlobalContext);
  const { offsetTop, screenSize } = globalState;
  const targetRef = useRef();
  const [test, setTest] = useState(null);

  useEffect(() => {
    globalDispatch({type: 'screenSizeRegister', payload:{width: window.innerWidth, height: window.innerHeight}})
    const prodLocation = document.querySelector(".all-products").offsetTop;
    const hicardiLocation = document.querySelector(".hicardi-desc").offsetTop;
    const smartViewLocation = document.querySelector(".smart-view-desc").offsetTop;
    const footerLocation = document.querySelector(".footer").offsetTop;
    globalDispatch({ type: "offsetTopChange", payload: { mainLocation: 0, prodLocation: prodLocation, hicardiLocation:hicardiLocation, smartViewLocation: smartViewLocation, footerLocation: footerLocation }});
  },[]);

  const onScrollEvent = (event) => {
    const scrollValue = event.target.scrollTop;
    if(scrollValue < offsetTop.prodLocation-screenSize.height/2) {
      globalDispatch({type:'scrollPointChange', payload:{ target: 0 }});
    }
    else if(scrollValue < offsetTop.hicardiLocation-screenSize.height/2) {
      globalDispatch({type:'scrollPointChange', payload:{ target: 1 }});
    }
    else if(scrollValue < offsetTop.smartViewLocation-screenSize.height/2) {
      globalDispatch({type:'scrollPointChange', payload:{ target: 2 }});
    }
    else if(scrollValue < offsetTop.footerLocation-screenSize.height/2) {
      globalDispatch({type:'scrollPointChange', payload:{ target: 3 }});
    }
  }

  // const onWheelEvent = useCallback((event) => {
  //   event.wheelDelta < 0 ? setTest("down") : setTest("up");
  // })

  // useEffect(() => {
  //   targetRef.current.addEventListener('wheel', onWheelEvent);
  //   return () => targetRef.current.removeEventListener('wheel', onWheelEvent);
  // },[onWheelEvent]);

  return (
    <ThemeProvider theme={theme}>
      <Aside />
      <LocationPoints />
      <StyledApp className="App" ref={targetRef} onScroll={onScrollEvent}>
        <Header />
        <AllProductDesc />
        <HicardiDesc />
        <SmartViewDesc />
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;

const StyledApp = styled.div`
  overflow: scroll;
  width:100%;
  height:100vh;
`;
