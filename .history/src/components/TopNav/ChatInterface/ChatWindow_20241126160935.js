import React, { useState, useEffect } from "react";
import "./chat.scss";
export const ChatWindow = ({ messages, selectedContact }) => {
  const [newMessage, setNewMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  useEffect(() => {
    // Check if there are messages for the selected contact
    if (messages.length === 0) {
      setChatMessages([
        {
          sender: "System",
          text: "No messages here yet… send a message to start a conversation!",
        },
      ]);
    } else {
      setChatMessages(messages);
    }
  }, [messages]);
  const handleSend = () => {
    if (newMessage.trim()) {
      alert(`Message sent to ${selectedContact}: ${newMessage}`);
      setNewMessage("");
    }
  };
  return (
    <div className="chat-window">
      <h3>Chat with {selectedContact}</h3>
      <div className="message-list">
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${
                msg.sender === "You" ? "sent" : "received"
              }`}
            >
              <p>
                <strong>{msg.sender}:</strong> {msg.text}
              </p>
            </div>
          ))
        ) : (
          <p className="no-messages">
            No messages here yet… send a message to start a conversation!
          </p>
        )}
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
