import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const Home = () => {
  const [meme, setMeme] = useState();

  useEffect(() => {
    fetch("https://memegen.link/")
    .then((r) => r.json())
    .then(setMeme);
  }, []);

  return <App meme={meme} />;
    };

    createRoot(document.getElementById("root")).render(<Home />);






const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
