import React, { useState, useEffect } from "react";
import "./chat.scss";
const formatTime = (date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // Convert 24-hour to 12-hour
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};
export const ChatWindow = ({ messages, selectedContact }) => {
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  useEffect(() => {
    setChatMessages(messages);
  }, [messages]);

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
      const recorder = new MediaRecorder(stream);

      recorder.ondataavailable = (event) => {
        setAudioChunks((prev) => [...prev, event.data]);
      };

      recorder.onstop = () => {
        const currentTime = formatTime(new Date());
        const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
        const audioUrl = URL.createObjectURL(audioBlob);

        // Add the audio message to the chat
        setChatMessages((prevMessages) => [
          ...prevMessages,
          {
            sender: "You",
            text: null, // No text for audio messages
            audio: audioUrl, // Attach audio URL
            time: currentTime,
          },
        ]);

        setAudioChunks([]); // Reset chunks
      };

      recorder.start();
      setMediaRecorder(recorder);
      setRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  return (
    <div className="chat-window">
      <h3>Chat with {selectedContact}</h3>
      <div className="message-list">
        {chatMessages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "You" ? "sent" : "received"}`}
          >
            {msg.text ? (
              <p>
                <strong>{msg.sender}:</strong> {msg.text}
              </p>
            ) : (
              <audio controls>
                <source src={msg.audio} type="audio/webm" />
              </audio>
            )}
            <span className="message-time">{msg.time}</span>
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
        <button
          onClick={recording ? handleStopRecording : handleStartRecording}
          className={`record-button ${recording ? "recording" : ""}`}
        >
          🎤
        </button>
      </div>
    </div>
  );
};
