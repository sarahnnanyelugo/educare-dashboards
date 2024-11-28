import React, { useState } from "react";
import { ChatWindow } from "./ChatWindow";
import Contacts from "./Contacts";
import { contacts, messages } from "../../../TestData/chatContactData";

const ChatInterface = () => {
  const [selectedContactId, setSelectedContactId] = useState(null);
  const defaultMessages = [
    {
      sender: "System",
      text: "No messages here yet… send a message to start a conversation!",
    },
  ];
  const selectedContact = contacts.find((c) => c.id === selectedContactId) || {
    name: "No Contact Selected",
  };

  return (
    <div className="chat-interface">
      <Contacts contacts={contacts} onSelectContact={setSelectedContactId} />
      {selectedContactId ? (
        <ChatWindow
          messages={
            selectedContactId ? messages[selectedContactId] : defaultMessages
          }
          selectedContact={selectedContact.name}
        />
      ) : (
        <div className="placeholder">Select a contact to start chatting</div>
      )}
    </div>
  );
};

export default ChatInterface;
