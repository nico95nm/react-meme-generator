import { useState } from 'react';

export default function InputText() {
  const [label, setLabel] = useState('');
  const [meme, setMeme] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <span>{meme}</span>
      <input
        value={meme}
        onChange={(event) => {
          setMeme(event.currentTarget.value);
        }}
      />
      <input type="name" name="name" placeholder="Bottom text" />
    </form>
  );
}
