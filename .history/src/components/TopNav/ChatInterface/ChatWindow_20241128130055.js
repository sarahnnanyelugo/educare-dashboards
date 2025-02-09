import React, { useState, useEffect } from "react";
import "./chat.scss";
import Icon1 from "../../../assets/images/mic.svg";
import Icon2 from "../../../assets/images/link.svg";

const formatDate = (date) => {
  const today = new Date();
  const messageDate = new Date(date);

  if (
    messageDate.getDate() === today.getDate() &&
    messageDate.getMonth() === today.getMonth() &&
    messageDate.getFullYear() === today.getFullYear()
  ) {
    return "Today";
  }

  const options = { year: "numeric", month: "long", day: "numeric" };
  return messageDate.toLocaleDateString(undefined, options);
};

const formatTime = (date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};
export const ChatWindow = ({ messages, selectedContact }) => {
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [zoomedImage, setZoomedImage] = useState(null); // For zoom functionality

  useEffect(() => {
    setChatMessages(messages);
  }, [messages]);
  useEffect(() => {
    console.log(audioChunks);
  }, [audioChunks]);
  const handleSend = () => {
    if (newMessage.trim()) {
      // Get the current time when the message is sent
      const currentTime = formatTime(new Date());

      const newChatMessage = {
        sender: "You",
        text: newMessage,
        time: currentTime,
      };

      // Add the new message to the chat messages
      setChatMessages((prevMessages) => [...prevMessages, newChatMessage]);

      // Clear the input box after sending the message
      setNewMessage("");
    }
  };
  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      console.log("Microphone access granted.");

      const recorder = new MediaRecorder(stream);
      const chunks = [];

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          console.log("Audio chunk received:", event.data);
          chunks.push(event.data);
        }
      };

      recorder.onstop = () => {
        if (chunks.length > 0) {
          console.log("Recording stopped. Creating audio blob...");
          const audioBlob = new Blob(chunks, { type: "audio/webm" });
          const audioUrl = URL.createObjectURL(audioBlob);

          // Add audio message to the chat
          const currentTime = formatTime(new Date());
          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              sender: "You",
              text: null,
              audio: audioUrl,
              time: currentTime,
            },
          ]);
        } else {
          console.error("No audio data captured.");
        }
      };

      recorder.start();
      console.log("Recording started.");
      setMediaRecorder(recorder);
      setRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
      alert("Microphone access is required for voice recording.");
    }
  };
  const handleStopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setRecording(false);
    }
  };
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      const currentTime = formatTime(new Date());

      setChatMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "You",
          text: null,
          file: {
            name: file.name,
            url: fileUrl,
            type: file.type,
          },
          time: currentTime,
        },
      ]);

      // Clear the input value for re-selection
      event.target.value = null;
    }
  };
  const handleImageClick = (imageUrl) => {
    setZoomedImage(imageUrl); // Set the clicked image URL
  };

  const closeZoom = () => {
    setZoomedImage(null); // Close the modal
  };
  const groupMessagesByDate = (messages) => {
    const grouped = {};

    messages.forEach((message) => {
      const messageDate = formatDate(new Date(message.time));
      if (!grouped[messageDate]) {
        grouped[messageDate] = [];
      }
      grouped[messageDate].push(message);
    });

    return grouped;
  };

  const groupedMessages = groupMessagesByDate(chatMessages);
  return (
    <div className="chat-window">
      <h3>Chat with {selectedContact}</h3>
      <div className="message-list">
        {Object.entries(groupedMessages).map(([date, messages]) => (
          <div key={date}>
            <div className="date-separator">{date}</div>
            {messages.map((msg, index) => (
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
                  {formatTime(new Date(msg.time))}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
      {zoomedImage && (
        <div className="image-modal" onClick={closeZoom}>
          <div className="image-modal-content">
            <img src={zoomedImage} alt="Zoomed" width="100%" />
          </div>
        </div>
      )}
      <hr />
      <div className="col-md-12 d-flex">
        <div className="input-box col-md-11">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Enter message..."
            className="col-md-12"
          />
          <small onClick={handleSend} className="send-msg">
            Send
          </small>
        </div>{" "}
        <label className="upload-button">
          <img src={Icon2} width="14px" />
          <input
            type="file"
            onChange={handleFileUpload}
            style={{ display: "none" }}
            className="attach-file"
          />
        </label>
        <button
          onClick={recording ? handleStopRecording : handleStartRecording}
          className={`record-button ${recording ? "recording" : ""}`}
          title="record audio"
        >
          <img src={Icon1} width="14px" />
        </button>{" "}
      </div>
    </div>
  );
};
