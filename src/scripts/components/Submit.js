// Create a submit button

import {
  createMessage,
  createMessageTopic,
} from "../managers/messageManager.js";
import { getCurrentState } from "./TransientState.js";

export const Submit = () => {
  return `
    <button type="submit" name="transmit">Transmit</button>
    `;
};

const addTopics = async (messageId) => {
  const message = getCurrentState();
  await Promise.all(
    message.topics.map((topicId) => {
      const messageTopic = {
        messageId: messageId,
        topicId: topicId,
      };
      createMessageTopic(messageTopic);
    })
  );
};

const handleSubmit = async (e) => {
  if (e.target.name === "transmit") {
    e.preventDefault();
    const message = getCurrentState();
    const newMessage = {
      senderId: message.senderId,
      recipientId: message.recipientId,
      content: message.content,
      timestamp: new Date(),
    };
    const response = await createMessage(newMessage);
    await addTopics(response.id);
    const customEvent = new CustomEvent("newTransmission");
    document.dispatchEvent(customEvent);
  }
};

document.addEventListener("click", handleSubmit);
