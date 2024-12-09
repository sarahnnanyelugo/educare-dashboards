import React, { useState } from "react";
import { ChatWindow } from "./ChatWindow";
import Contacts from "./Contacts";
import { contacts, messages } from "../../../TestData/chatContactData";
import { Desktop, TabletAndBelow } from "../../../Utils/mediaQueries";

const ChatInterface = ({ contacts, messages, defaultMessages }) => {
  const [selectedContactId, setSelectedContactId] = useState(null);
  const currentContact = contacts.find(
    (contact) => contact.id === selectedContactId
  );

  const handleBackToContacts = () => {
    setSelectedContactId(null); // Reset to show contacts list
  };

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
    ? messages[selectedContactId] || [] // Messages for the selected contact
    : defaultMessages;
  const currentContactName = selectedContactId
    ? contacts.find((c) => c.id === selectedContactId).name
    : "";

  return (
    <>
      {" "}
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
      <TabletAndBelow>
        <div className="chat-interface">
          {selectedContactId === null ? (
            <Contacts
              contacts={contacts}
              onSelectContact={setSelectedContactId}
              activeContactId={selectedContactId}
            />
          ) : (
            <ChatWindow
              messages={currentMessages}
              selectedContact={currentContactName}
              onBack={() => setSelectedContactId(null)}
            />
          )}
        </div>
      </TabletAndBelow>
    </>
  );
};

export default ChatInterface;
