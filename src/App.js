import './App.css';
/* import { useState } from 'react';
 */
import BottomText from './BottomText';
import Gandalf from './Img/Gandalf.jpg';
import MemeImage from './MemeImage';
import TopText from './TopText';

export default function App() {
  return (
    <div className="App">
      <div>
        <div>
          <TopText />
        </div>
        <div className="bot">
          <BottomText />
        </div>
      </div>
      <img src={Gandalf} alt="You shall not pass" />
      {/*       <img src={MemeImage} alt="test" />
       */}{' '}
      <div className="Button">
        <button>Download</button>
      </div>
      <div className="MemeTemplate">
        <button>Meme Template</button>
      </div>
    </div>
  );
}
