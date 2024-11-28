import React, { useState } from "react";
import { ChatWindow } from "./ChatWindow";
import Contacts from "./Contacts";
import { contacts, messages } from "../../../TestData/chatContactData";

const ChatInterface = () => {
  const [selectedContactId, setSelectedContactId] = useState(null);

  // Default message for when no contact is selected
  const defaultMessages = [
    {
      sender: "System",
      text: "No messages here yet… send a message to start a conversation!",
    },
  ];

  const currentMessages = selectedContactId
    ? messages[selectedContactId]
    : defaultMessages;
  const currentContactName = selectedContactId
    ? contacts.find((c) => c.id === selectedContactId).name
    : "Welcome!";

  return (
    <div className="chat-interface">
      <Contacts contacts={contacts} onSelectContact={setSelectedContactId} />
      <ChatWindow
        messages={currentMessages}
        selectedContact={currentContactName}
      />
    </div>
  );
};

export default ChatInterface;
