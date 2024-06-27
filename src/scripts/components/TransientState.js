// Hold the current state of a new message
// Contains all setter functions
// Contains POST a message

const currentMessageState = {
  senderId: 0,
  recipientId: 0,
  topics: [],
  content: "",
};

export const setSenderId = (id) => {
  currentMessageState.senderId = id;
};

export const setRecipientId = (id) => {
  currentMessageState.recipientId = id;
};

export const setTopics = (id, isChecked) => {
  if (isChecked) {
    currentMessageState.topics.push(id);
  } else {
    currentMessageState.topics = currentMessageState.topics.filter(
      (topicId) => topicId != id
    );
  }
};

export const setMessage = (text) => {
  currentMessageState.content = text;
};

export const getCurrentState = () => currentMessageState;
