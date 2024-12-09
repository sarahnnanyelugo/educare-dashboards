import React, { useState } from "react";
import { ChatWindow } from "./ChatWindow";
import Contacts from "./Contacts";
import { contacts, messages } from "../../../TestData/chatContactData";
import { Desktop, TabletAndBelow } from "../../../Utils/mediaQueries";
import Img1 from "../../../assets/images/peter.png"; // Adjust path as necessary

const ChatInterface = () => {
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [chatMessages, setChatMessages] = useState(messages);

  // Find the current contact and messages
  const currentContact = contacts.find(
    (contact) => contact.id === selectedContactId
  );
  const currentMessages = selectedContactId
    ? chatMessages[selectedContactId] || []
    : [
        {
          sender: "System",
          text: "No messages here yet… send a message to start a conversation.",
        },
      ];

  // Handle sending messages
  const handleSend = (messageText, resetInput) => {
    if (messageText.trim()) {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      const newChatMessage = {
        sender: "You",
        text: messageText,
        time: currentTime,
      };

      setChatMessages((prev) => ({
        ...prev,
        [selectedContactId]: [
          ...(prev[selectedContactId] || []),
          newChatMessage,
        ],
      }));
      resetInput("");
    }
  };

  return (
    <>
      {/* Web/Desktop View */}
      <Desktop>
        <div className="chat-interface">
          <Contacts
            contacts={contacts}
            onSelectContact={setSelectedContactId}
            activeContactId={selectedContactId}
          />
          <ChatWindow
            messages={currentMessages}
            selectedContact={currentContact?.name || ""}
            handleSend={handleSend}
            profilePicture={currentContact?.profilePicture || Img1} // Fallback to Img1 if profilePicture is missing
            // Pass the profile picture
          />
        </div>
      </Desktop>

      {/* Mobile View */}
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
              selectedContact={currentContact?.name || ""}
              handleSend={handleSend}
              onBack={() => setSelectedContactId(null)} // Back to contacts list
            />
          )}
        </div>
      </TabletAndBelow>
    </>
  );
};

export default ChatInterface;
