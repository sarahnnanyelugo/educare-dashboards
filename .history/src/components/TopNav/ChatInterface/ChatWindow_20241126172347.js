import React, { useState, useEffect } from "react";
import "./chat.scss";
export const ChatWindow = ({ messages, selectedContact }) => {
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  useEffect(() => {
    setChatMessages(messages);
  }, [messages]);

  const handleSend = () => {
    if (newMessage.trim()) {
      const newChatMessage = { sender: "You", text: newMessage };
      setChatMessages((prevMessages) => [...prevMessages, newChatMessage]);

      // Simulate real-time message sending with a slight delay
      setTimeout(() => {
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { sender: "System", text: "Your message was sent!" },
        ]);
      }, 500); // Adjust delay to simulate real-time message sending

      setNewMessage(""); // Clear the input box
    }
  };

  return (
    <div className="chat-window">
      <h3>Chat with {selectedContact}</h3>
      <div className="message-list">
        {chatMessages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "You" ? "sent" : "received"}`}
          >
            <p>
              <strong>{msg.sender}:</strong> {msg.text}
            </p>
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};
