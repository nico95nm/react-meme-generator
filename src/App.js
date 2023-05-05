import './App.css';

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
          </label>
        </div>
      </div>
      <div className="button">
        <button>Download</button>
      </div>
      <div className="MemeTemplate">
        <button>Meme Template</button>
      </div>{' '}
    </div>
  );
}
