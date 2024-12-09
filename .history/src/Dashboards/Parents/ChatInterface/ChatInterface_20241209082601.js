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
  const [chatMessages, setChatMessages] = useState(messages);

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
  const handleSend = (messageText, resetInput) => {
    if (messageText.trim()) {
      // Get the current time
      const currentTime = formatTime(new Date());

      const newChatMessage = {
        sender: "You",
        text: messageText,
        time: currentTime,
      };

      // Add the new message to the chat messages
      setChatMessages((prevMessages) => ({
        ...prevMessages,
        [selectedContactId]: [
          ...(prevMessages[selectedContactId] || []),
          newChatMessage,
        ],
      }));

      // Clear the input box
      resetInput("");
    }
  };
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
              onBack={() => setSelectedContactId(null)} // Back functionality
            />
          )}
        </div>
      </TabletAndBelow>
    </>
  );
};

export default ChatInterface;
