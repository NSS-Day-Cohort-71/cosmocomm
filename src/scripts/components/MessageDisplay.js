// Display all messages
// Fetch all messages

import { getAllMessages } from "../managers/messageManager.js";
import { getAllPlanets } from "../managers/planetManager.js";
import { getMessageTopics } from "../managers/topicManager.js";

export const MessageDisplay = async () => {
  const messages = await getAllMessages();
  const planets = await getAllPlanets();

  const expandMessage = async (message) => {
    const sender = planets.find((planet) => planet.id === message.senderId);
    const recipient = planets.find(
      (planet) => planet.id === message.recipientId
    );
    const topicMessages = await getMessageTopics(message.id);
    return { ...message, sender, recipient, topicMessages };
  };

  const buildMessageHTML = (message) => {
    return `
            <section class="message">
                <div class="message-date">
                    ${message.timestamp}
                </div>
                <div class="sender">
                    ${message.sender.name}
                </div>
                <div class="recipient">
                    ${message.recipient.name}
                </div>
                <div class="topic">
                    ${message.topicMessages
                      .map((topicMessage) => {
                        return `${topicMessage.topic.label}`;
                      })
                      .join(" * ")}
                </div>
                <div class="message-body">
                    ${message.content}
                </div>
            </section>
        `;
  };

  const messageHTMLs = [];

  for (const message of messages) {
    const expandedMessage = await expandMessage(message);
    const messageHTML = buildMessageHTML(expandedMessage);
    messageHTMLs.push(messageHTML);
  }

  return messageHTMLs.join("");
};
