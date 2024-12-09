import React, { useState } from "react";
import { ChatWindow } from "./ChatWindow";
import Contacts from "./Contacts";
import { contacts, messages } from "../../../TestData/chatContactData";
import { Desktop, TabletAndBelow } from "../../../Utils/mediaQueries";

const ChatInterface = () => {
  const [selectedContactId, setSelectedContactId] = useState(null);

  // Default message for when no contact is selected
  const defaultMessages = [
    {
      sender: "System",
      text: (
        <p>
          No messages here yet…
          <br /> send a message to start a conversation
        </p>
      ),
    },
  ];

  const currentMessages = selectedContactId
    ? messages[selectedContactId]
    : defaultMessages;
  const currentContactName = selectedContactId
    ? contacts.find((c) => c.id === selectedContactId).name
    : "";

  return (
    <Desktop>
      <div className="chat-interface">
        <Contacts
          contacts={contacts}
          onSelectContact={setSelectedContactId}
          activeContactId={selectedContactId}
        />
        <ChatWindow
          messages={currentMessages}
          selectedContact={currentContactName}
        />
      </div>
    </Desktop>
  );
};

export default ChatInterface;
