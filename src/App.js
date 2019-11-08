import React from "react";
import NasaList from "./components/NasaList"
import "./App.css";
import NasaNav from "./components/NavBar";
import styled from 'styled-components';

const WrapperDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
`;

function App() {
  return (
    <div className="App">
      <WrapperDiv>
        <NasaNav />
        <NasaList />
      </WrapperDiv>
    </div>

  );
}

export default App;
