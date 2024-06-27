export const getAllMessages = async () => {
  const response = await fetch("http://localhost:8088/messages");
  const data = await response.json();
  return data;
};

export const createMessage = async (data) => {
  const response = await fetch("http://localhost:8088/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const createMessageTopic = async (data) => {
  const response = await fetch("http://localhost:8088/messageTopics", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
