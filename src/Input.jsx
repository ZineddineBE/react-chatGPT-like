import { useState } from "react";

export default function Input({ onSubmit }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSubmit(text);
    setText("");
  };

  return (
    <form className="sendMessage" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Écrire un message..."
      />
      <button type="submit" disabled={!text.trim()}>
        Send
      </button>
    </form>
  );
}

