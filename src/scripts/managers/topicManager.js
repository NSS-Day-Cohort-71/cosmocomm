export const getAllTopics = async () => {
  const response = await fetch("http://localhost:8088/topics");
  const data = await response.json();
  return data;
};

export const getMessageTopics = async (id) => {
  const response = await fetch(
    `http://localhost:8088/messageTopics?_expand=topic&messageId=${id}`
  );
  const data = response.json();
  return data;
};
