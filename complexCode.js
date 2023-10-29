/*
 * Filename: complexCode.js
 * Description: This code demonstrates a complex implementation of a chat application using JavaScript.
 */

// ChatApp object
const ChatApp = (function () {
  // Private variables
  let users = [];
  let messages = [];

  // Private methods
  function User(name) {
    this.name = name;
    this.id = users.length;
  }

  function addUser(name) {
    const user = new User(name);
    users.push(user);
  }

  function removeUser(id) {
    users = users.filter((user) => user.id !== id);
  }

  function sendMessage(senderId, receiverId, message) {
    const sender = users.find((user) => user.id === senderId);
    const receiver = users.find((user) => user.id === receiverId);

    if (sender && receiver) {
      messages.push({
        sender: sender.name,
        receiver: receiver.name,
        message,
      });
    }
  }

  function getMessagesForUser(userId) {
    const user = users.find((user) => user.id === userId);
    return messages.filter(
      (msg) => msg.sender === user.name || msg.receiver === user.name
    );
  }

  // Public API
  return {
    addUser,
    removeUser,
    sendMessage,
    getMessagesForUser,
  };
})();

// Adding users
ChatApp.addUser("Alice");
ChatApp.addUser("Bob");
ChatApp.addUser("Eve");

// Sending messages
ChatApp.sendMessage(0, 1, "Hi Bob!");
ChatApp.sendMessage(1, 0, "Hey Alice, how are you?");
ChatApp.sendMessage(2, 0, "Hello Alice and Bob!");

// Displaying messages for a user
const aliceMessages = ChatApp.getMessagesForUser(0);
console.log("Alice's messages: ", aliceMessages);

const bobMessages = ChatApp.getMessagesForUser(1);
console.log("Bob's messages: ", bobMessages);

const eveMessages = ChatApp.getMessagesForUser(2);
console.log("Eve's messages: ", eveMessages);

// Removing a user
ChatApp.removeUser(2);

// Displaying updated user list
console.log("Updated user list: ", ChatApp.users);

// Displaying all messages
console.log("All messages: ", ChatApp.messages);

// ... continue with more complex chat app features
...