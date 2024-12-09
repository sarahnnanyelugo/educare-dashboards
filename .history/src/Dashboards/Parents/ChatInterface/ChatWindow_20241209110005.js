export const ChatWindow = ({
  messages,
  selectedContact,
  onBack,
  handleSend,
  profilePicture, // Accept the profile picture as a prop
}) => {
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [zoomedImage, setZoomedImage] = useState(null); // For zoom functionality

  useEffect(() => {
    setChatMessages(messages);
  }, [messages]);

  return (
    <div className="chat-window card col-md-8">
      <TabletAndBelow>
        {onBack && (
          <button className="back-button" onClick={onBack}>
            ← Back
          </button>
        )}
      </TabletAndBelow>
      <div className="chat-header">
        {/* Profile picture and contact name */}
        {profilePicture && (
          <img
            src={profilePicture}
            alt={selectedContact}
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          />
        )}
        <h6>Chat with {selectedContact}</h6>
      </div>
      <div className="message-list">
        {chatMessages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "You" ? "sent" : "received"}`}
          >
            {msg.text && (
              <p>
                <strong>{msg.sender}:</strong> {msg.text}
              </p>
            )}
            {msg.audio && (
              <audio controls>
                <source src={msg.audio} type="audio/webm" />
                Your browser does not support the audio tag.
              </audio>
            )}
            {msg.file && (
              <div>
                {msg.file.type.startsWith("image/") ? (
                  <img
                    src={msg.file.url}
                    alt={msg.file.name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "150px",
                      cursor: "pointer",
                    }}
                    onClick={() => setZoomedImage(msg.file.url)} // Zoom image on click
                  />
                ) : (
                  <a href={msg.file.url} download={msg.file.name}>
                    {msg.file.name}
                  </a>
                )}
              </div>
            )}
            <span className="message-time">{msg.time}</span>
          </div>
        ))}
      </div>
      {zoomedImage && (
        <div className="image-modal" onClick={() => setZoomedImage(null)}>
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
          <small
            onClick={() => handleSend(newMessage, setNewMessage)}
            className="send-msg"
          >
            Send
          </small>
        </div>
        <label className="upload-button">
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
        </button>
      </div>
    </div>
  );
};
