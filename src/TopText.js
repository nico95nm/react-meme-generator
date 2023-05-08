import { useState } from 'react';

export default function InputText() {
  const [label, setLabel] = useState('');
  const [textInput, setTextInput] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault('https://api.memegen.link/top/');
      }}
    >
      <span>{label}</span>
      <input
        type="name"
        name="name"
        placeholder="Top Text"
        value={textInput}
        onChange={(event) => {
          setTextInput(event.currentTarget.value);
          setLabel(event.currentTarget.value);
        }}
      />
    </form>
  );
}
