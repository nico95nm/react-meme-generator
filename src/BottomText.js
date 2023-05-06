import { useState } from 'react';

export default function InputText() {
  const [label, setLabel] = useState('');
  const [textInput, setTextInput] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <span>{label}</span>
      <input
        value={textInput}
        onChange={(event) => {
          setTextInput(event.currentTarget.value);
        }}
      />
      <button
        onClick={() => {
          setLabel(textInput);
        }}
      >
        Bottom text
      </button>
    </form>
  );
}
