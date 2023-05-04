import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="input">
        <label htmlFor="test">
          test
          <input />
        </label>
        <label htmlFor="test">
          <input />
          test
        </label>
      </div>
      <div class="Buttons">
        <button>Download</button>
      </div>
      <div class="Generate">
        <button>Meme Template</button>
      </div>
    </div>
  );
}
