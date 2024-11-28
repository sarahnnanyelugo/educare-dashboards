import React, { useState } from "react";

export const ChatInterface = ({ messages, selectedContact }) => {
  const [newMessage, setNewMessage] = useState("");
  const handleSend = () => {
    if (newMessage.trim()) {
      alert(`Message sent to ${selectedContact}: ${newMessage}`);
      setNewMessage("");
    }
  };
  return <div>ChatInterface</div>;
};
