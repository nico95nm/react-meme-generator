import './App.css';
/* import { useState } from 'react';
 */
import BottomText from './BottomText';
import Gandalf from './Img/Gandalf.jpg';
import TopText from './TopText';

export default function App() {
  return (
    <div className="App">
      <img src={Gandalf} alt="You shall not pass" />
      <div className="input">
        <TopText />
        <div>
          <BottomText />
        </div>
        <div className="Button">
          <button>Download</button>
        </div>
        <div className="MemeTemplate">
          <button>Meme Template</button>
        </div>
      </div>
    </div>
  );
}
