// List all source topics in dropdown
// Need to fetch all topics

import { getAllTopics } from "../managers/topicManager.js";
import { setTopics } from "./TransientState.js";

export const TopicSelector = async () => {
  const topics = await getAllTopics();

  let topicHTML = `<label for="topic">Topic:</label>
    <div id="topic-container" name="topic">`;

  topicHTML += topics
    .map((topic) => {
      return `
            <input type="checkbox" id="topic--${topic.id}"/>
            <label>${topic.label}</label><br>
        `;
    })
    .join("");

  topicHTML += `</div>`;

  return topicHTML;
};

const handleTopicChange = (e) => {
  if (e.target.id.startsWith("topic--")) {
    const topicId = parseInt(e.target.id.split("--")[1]);
    setTopics(topicId, e.target.checked);
  }
};

document.addEventListener("click", handleTopicChange);
