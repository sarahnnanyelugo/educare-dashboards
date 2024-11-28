import React from "react";

const Contacts = ({ contacts, onSelectContact }) => {
  return (
    <div className="sidebar">
      <h3>Contacts</h3>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} onClick={() => onSelectContact(contact.id)}>
            {contact.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
