import React, { useState } from "react";
import { ChatWindow } from "./ChatWindow";
import Contacts from "./Contacts";
import { contacts, messages } from "./data";

const ChatInterface = () => {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <div className="chat-interface">
      <Contacts contacts={contacts} onSelectContact={setSelectedContactId} />
      {selectedContactId ? (
        <ChatWindow
          messages={messages[selectedContactId]}
          selectedContact={
            contacts.find((c) => c.id === selectedContactId).name
          }
        />
      ) : (
        <div className="placeholder">Select a contact to start chatting</div>
      )}
    </div>
  );
};

export default ChatInterface;