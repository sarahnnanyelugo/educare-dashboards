import React, { useEffect, useState } from "react";
import { ChatWindow } from "./ChatWindow";
import Contacts from "./Contacts";
import { contacts, messages } from "../../../TestData/chatContactData";
import { Desktop, TabletAndBelow } from "../../../Utils/mediaQueries";

const ChatInterface = ({ contacts, messages }) => {
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [view, setView] = useState("contacts"); // "contacts" or "chat"
  const [selectedContact, setSelectedContact] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
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
  useEffect(() => {
    if (selectedContact) {
      setChatMessages(messages[selectedContact.id] || []);
    }
  }, [selectedContact, messages]);

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
    setView("chat");
  };

  const handleBackToContacts = () => {
    setView("contacts");
    setSelectedContact(null);
  };

  const handleSendMessage = (text) => {
    if (text.trim()) {
      const newMessage = {
        sender: "You",
        text,
        time: new Date().toISOString(),
      };
      setChatMessages((prev) => [...prev, newMessage]);
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
      <TabletAndBelow></TabletAndBelow>
    </>
  );
};

export default ChatInterface;
