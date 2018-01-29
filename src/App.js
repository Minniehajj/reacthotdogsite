import React, { Component } from 'react';
import styled from 'styled-components';
import FirstPanel from './components/firstPanel';
import SecondPanel from './components/secondPanel';
import ThirdPanel from './components/thirdPanel';
import FourthPanel from './components/fourthPanel';
import HeroImage from './components/heroImage';
import Footer from './components/footer';
import Menu from './components/menu';


const WrapperStyled = styled.div`
  text-align: center;
  width: 100%;
  font-family: 'Open Sans', sans-serif;
  font-weight: normal;
  min-width: 900px;
`
class App extends Component {
  render() {
    return (
      <WrapperStyled>
        <HeroImage />
        <Menu />
        <FirstPanel />
        <SecondPanel />
        <ThirdPanel />
        <FourthPanel />
        <Footer />
       </WrapperStyled>
    );
  }
}

export default App;
