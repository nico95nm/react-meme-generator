import './App.css';
/* import { useState } from 'react';
 */
import BottomText from './BottomText';
import Download from './Download';
import TopText from './TopText';

export default function App() {
  return (
    <div className="App">
      <div className="Top">
        <TopText />
      </div>
      <div className="img">
        {/*           <img{`https://api.memegen.link/images/${template}/${toptext}/${BottomText}.jpge`}/>
         */}{' '}
        <img
          src="https://api.memegen.link/images/random.jpg"
          alt="random"
          width="500"
          height="333"
        />
      </div>
      <div className="bot">
        <BottomText />
      </div>

      <div className="Button">
        <button>Download</button>
      </div>
      <div className="MemeTemplate">
        <button>Meme Template</button>
      </div>
    </div>
  );
}
