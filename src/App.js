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
      <div className="Top">
        <TopText />
      </div>
      <img src={Gandalf} alt="You shall not pass" />
      <div className="bot">
        <BottomText />
      </div>
      {/*       <img src={MemeImage} alt="test" />
       */}{' '}
      <div className="Button">
        <button>Download</button>
      </div>
      <div className="MemeTemplate">
        <button>Meme Template</button>
        <div className="ArrowLeft">
          <button>Old Photo</button>
        </div>
        <div className="ArrowRight">
          <form method="get" action="">
            {' '}
          </form>
        </div>
      </div>
    </div>
  );
}
