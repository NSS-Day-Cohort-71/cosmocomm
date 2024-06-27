// Create a text field

import { setMessage } from "./TransientState.js";

export const MessageTextArea = () => {
  return `
    <label for="message-content">Message:</label>
    <textarea id="message-content" placeholder="Enter message here!" name="message-content" required></textarea>`;
};

const handleTextChange = (e) => {
  if (e.target.name === "message-content") {
    setMessage(e.target.value);
  }
};

document.addEventListener("change", handleTextChange);
