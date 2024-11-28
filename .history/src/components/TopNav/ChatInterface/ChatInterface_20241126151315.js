import React, { useState } from "react";

export const ChatInterface = ({ messages, selectedContact }) => {
  const [newMessage, setNewMessage] = useState("");
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
        {messages.map((msg, index) => (
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
