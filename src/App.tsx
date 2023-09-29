import React from 'react';
import './App.css';
import Header from "./component/Header";
import InputTextBox from "./component/InputTextBox";
import TeamDataProvider from "./context/TeamDataProvider";

function App() {
  return (
    <div className="App">
      <TeamDataProvider>
        <Header />
        <InputTextBox />
      </TeamDataProvider>
    </div>
  );
}

export default App;
