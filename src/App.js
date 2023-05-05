import './App.css';
import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

export default function App() {

  return (
    <div className="App">
      <div className="input">
        <label>
          Top text
          <input />
        </label>
        <div>
           <label>
          <input />
          Bottom text
        </label></div>

      </div>
      <div class="button">
        <button>Download</button>
      </div>
      <div class="MemeTemplate">
        <button>Meme Template</button>
      </div>
    </div>
  );
}
