
import './App.css';
import ToggleTextColor from './ToggleTextColor';
import { useState } from 'react';
import Square from './Square';
function App() {

  const [colorValue,setColorValue] =useState('');
  const [hexValue,setHexValue] =useState('');
  const [isTextBlack,setIsTextBlack] =useState(true);
  return (
    <div className="App">
      <Square
      colorValue={colorValue} 
      isTextBlack={isTextBlack}
      hexValue={hexValue} > </Square>
      <ToggleTextColor 
      colorValue={colorValue} 
      setColorValue={setColorValue}
      isTextBlack={isTextBlack}
      setIsTextBlack={setIsTextBlack}
      setHexValue={setHexValue} ></ToggleTextColor>
    </div>
  );
}

export default App;
