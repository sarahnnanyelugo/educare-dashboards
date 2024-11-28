import React from "react";
import { CiSearch } from "react-icons/ci";

const Contacts = ({ contacts, onSelectContact, activeContactId }) => {
  return (
    <div className="col-md-3 cover">
      {" "}
      <div className="chat-contacts card col-md-12">
        <h6>Chats</h6>
        <div className="search-contact d-flex">
          <CiSearch />
          <input placeholder="search" />
        </div>
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
    </div>
  );
};

export default Contacts;
