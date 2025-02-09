import React from "react";
const Contacts = ({ contacts, onSelectContact, activeContactId }) => {
  return (
    <div className="chat-contacts">
      <h5>Chats</h5>
      <ul>
        {contacts.map((contact) => (
          <li
            key={contact.id}
            className={contact.id === activeContactId ? "active" : ""}
            onClick={() => onSelectContact(contact.id)}
          >
            <img src={contact.profilePicture} width="38px" height="38px" />{" "}
            {contact.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
