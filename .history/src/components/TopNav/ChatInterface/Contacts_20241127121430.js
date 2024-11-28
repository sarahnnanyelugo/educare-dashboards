import React from "react";
const Contacts = ({ contacts, onSelectContact, activeContactId }) => {
  return (
    <div className="chat-contacts">
      <h3>Chats</h3>
      <ul>
        {contacts.map((contact) => (
          <li
            key={contact.id}
            className={contact.id === activeContactId ? "active" : ""}
            onClick={() => onSelectContact(contact.id)}
          >
            <img src={contact.profilePicture} /> {contact.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
