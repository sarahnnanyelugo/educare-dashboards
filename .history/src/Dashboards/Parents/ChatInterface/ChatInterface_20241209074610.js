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
      <TabletAndBelow>
        <div className="chat-app-mobile">
          {view === "contacts" && (
            <div className="contact-list">
              <h3>Contacts</h3>
              <ul>
                {contacts.map((contact) => (
                  <li
                    key={contact.id}
                    className="contact-item"
                    onClick={() => handleContactClick(contact)}
                  >
                    <span className="contact-name">{contact.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {view === "chat" && selectedContact && (
            <div className="chat-window">
              <div className="chat-header">
                <button onClick={handleBackToContacts} className="back-button">
                  ← Back
                </button>
                <h3>{selectedContact.name}</h3>
              </div>
              <div className="message-list">
                {chatMessages.length === 0 ? (
                  <p className="no-messages">No messages here yet…</p>
                ) : (
                  chatMessages.map((msg, index) => (
                    <div
                      key={index}
                      className={`message ${
                        msg.sender === "You" ? "sent" : "received"
                      }`}
                    >
                      <p>
                        <strong>{msg.sender}:</strong> {msg.text}
                      </p>
                      <span className="message-time">
                        {new Date(msg.time).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  ))
                )}
              </div>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Type a message..."
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage(e.target.value);
                      e.target.value = ""; // Clear input
                    }
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </TabletAndBelow>
    </>
  );
};

export default ChatInterface;
