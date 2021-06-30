import "./common/style/reset.css";
import theme from "./common/style/theme";
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";
import { GlobalContext } from './util/GlobalProvider';
import { useContext, useEffect } from 'react';
import AllProductDesc from "./components/all-productDesc/AllProductDesc";
import Aside from './components/aside/Aside';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LocationPoints from "./components/location-points/LocationPoints";

function App() {
  const { globalState, globalDispatch } = useContext(GlobalContext);
  const { offsetTop } = globalState;

  useEffect(() => {
    const prodLocation = document.querySelector(".all-products");
    // const contentLocation = document.querySelector(".productContentView").offsetTop;
    // const useLocation = document.querySelector(".use").offsetTop;
    const footerLocation = document.querySelector(".footer").offsetTop;
    globalDispatch({ type: "offsetTopChange", payload: { mainLocation: 0, prodLocation: prodLocation, footerLocation: footerLocation }});
  },[]);

  return (
    <ThemeProvider theme={theme}>
      <Aside />
      <LocationPoints />
      <StyledApp className="App">
        <Header />
        <AllProductDesc />
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
