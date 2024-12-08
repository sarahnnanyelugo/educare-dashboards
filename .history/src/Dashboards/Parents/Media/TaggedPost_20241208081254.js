import React, { useState } from "react";
import Kid1 from "../../../assets/images/kid1.png";
import Kid2 from "../../../assets/images/kid2.jpeg";
import Kid3 from "../../../assets/images/kid3.jpeg";
import Kid4 from "../../../assets/images/kid4.jpg";
import Kid5 from "../../../assets/images/kid5.jpg";
import Kid6 from "../../../assets/images/girl1.png";
import Kid7 from "../../../assets/images/cul4.png";
import Kid8 from "../../../assets/images/cultural2.png";
import Kid9 from "../../../assets/images/cul3.jpg";
import Kid11 from "../../../assets/images/cul1.png";
import Kid12 from "../../../assets/images/cultural3.png";
import Kid13 from "../../../assets/images/gradu.png";
import Kid16 from "../../../assets/images/Kid16.png";
import Kid10 from "../../../assets/images/cul3.png";
import Kid19 from "../../../assets/images/grad2.png";
import Kid20 from "../../../assets/images/baloon.png";
import SchLogo from "../../../assets/images/logo.png";
import Kid14 from "../../../assets/images/gradu2.png";
import Kid15 from "../../../assets/images/Kid15.jpg";
import Kid17 from "../../../assets/images/baloon2.png";
import Kid18 from "../../../assets/images/grad.png";

import "./photo-journals.scss";
import Modal from "react-bootstrap/Modal";
import { TbHeart } from "react-icons/tb";
import { BiCommentDetail } from "react-icons/bi";
// import taggedPhotos from "../../TestData/mediaData";
// Sample data
const taggedPhotos = [
  {
    src: Kid19,
    title: "Cultural Day",
    description: "Photo taken during our annual Cultural Day event.",
    tags: ["culture", "event", "celebration"],
    likes: 120,
    comments: 34,
    schName: "Green Field School",
    Logo: SchLogo,
    postTime: "12:32PM",
    postDate: "Jun 30, 2024",
    liked: false,
  },
  {
    src: Kid16,
    title: "Sports Day",
    description: "A moment from Sports Day.",
    tags: ["sports", "competition", "outdoor"],
    likes: 85,
    comments: 20,
    schName: "Green Field School",
    Logo: SchLogo,
    postTime: "12:32PM",
    postDate: "Jun 30, 2024",
    liked: false,
  },
  {
    src: Kid20,
    title: "Sports Day",
    description:
      "As we wrap up another successful school year, we want to take a moment to express our heartfelt appreciation for your unwavering support and partnership. Your dedication to your children’s education, and your commitment to fostering a collaborative relationship with our school, has been instrumental in making this year a great success.",
    schName: "Green Field School",
    tags: ["sports", "competition", "outdoor"],
    likes: 85,
    comments: 20,
    Logo: SchLogo,
    postTime: "12:32PM",
    postDate: "Jun 30, 2024",
    liked: false,
  },
  {
    src: Kid13,
    title: "Sports Day",
    description: "A moment from Sports Day.",
    tags: ["sports", "competition", "outdoor"],
    schName: "Green Field School",
    likes: 85,
    comments: 20,
    Logo: SchLogo,
    postTime: "12:32PM",
    postDate: "Jun 30, 2024",
    liked: false,
  },
  {
    src: Kid10,
    title: "Sports Day",
    description: "A moment from Sports Day.",
    tags: ["sports", "competition", "outdoor"],
    schName: "Green Field School",
    likes: 85,
    Logo: SchLogo,
    comments: 20,
    postTime: "12:32PM",
    postDate: "Jun 30, 2024",
    liked: false,
  },
  // Add more photos with similar structure
];
const TaggedPhoto = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]); // Stores comments for the selected photo
  const [photos, setPhotos] = useState(taggedPhotos); // State to manage photos with likes

  const openPhoto = (photo) => {
    setSelectedPhoto(photo);
    setShowModal(true);
    setComments([]); // Clear comments when a new photo is opened
    setComment(""); // Clear comment input field
  };
  const closeModal = () => {
    setShowModal(false);
    setSelectedPhoto(null);
  };
  const handleCommentChange = (e) => setComment(e.target.value);
  const handleCommentSubmit = () => {
    if (comment.trim()) {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();

      setComments((prevComments) => [
        ...prevComments,
        { text: comment, date: formattedDate, time: formattedTime },
      ]);
      setComment(""); // Clear input after submission
    } else {
      alert("Please enter a comment.");
    }
  };
  const handleLikeClick = (src) => {
    setPhotos((prevPhotos) =>
      prevPhotos.map((photo) =>
        photo.src === src
          ? {
              ...photo,
              likes: photo.liked ? photo.likes - 1 : photo.likes + 1,
              liked: !photo.liked,
            }
          : photo
      )
    );
  };
  return (
    <div className="gallery-page">
      {/* Photo Grid */}
      <div className="photo-grid row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        {photos.map((photo) => (
          <div key={photo.src} className="photo-item">
            <img
              src={photo.src}
              alt={photo.title}
              onClick={() => openPhoto(photo)}
              className="photo-thumbnail2"
              width="100%"
            />
            <div className="photo-info d-flex mt-2 ">
              <p style={{ marginRight: "30px" }}>
                <strong>
                  {" "}
                  <TbHeart
                    style={{
                      cursor: "pointer",
                      color: selectedPhoto?.liked ? "red" : "grey",
                    }}
                    onClick={() => handleLikeClick(photo.src)}
                    className="reaction-icons"
                  />
                  {photo.likes}
                </strong>{" "}
                likes
              </p>
              <p>
                <strong>
                  {" "}
                  <BiCommentDetail className="reaction-icons" />
                  {photo.comments}
                </strong>{" "}
                comments
              </p>
            </div>
          </div>
        ))}
      </div>
      <Modal
        show={showModal}
        onHide={closeModal}
        centered
        size="lg"
        className="tagged-posts"
      >
        <Modal.Body>
          <div className="d-md-flex">
            <div className="col-md-5">
              {" "}
              <img
                src={selectedPhoto?.src}
                alt={selectedPhoto?.title}
                className="modal-photo"
                width="100%"
              />
              <div className="photo-info d-flex mt-2 ">
                <p style={{ marginRight: "30px" }}>
                  <strong>
                    {" "}
                    <TbHeart
                      style={{
                        fontSize: "17px",
                        marginRight: "5px",
                        cursor: "pointer",
                        color: selectedPhoto?.liked ? "red" : "grey",
                      }}
                      onClick={() => handleLikeClick(selectedPhoto?.src)}
                    />
                    {selectedPhoto?.likes}
                  </strong>{" "}
                  likes
                </p>
                <p>
                  <strong>
                    {" "}
                    <BiCommentDetail
                      style={{ fontSize: "17px", marginRight: "5px" }}
                    />
                    {selectedPhoto?.comments}
                  </strong>{" "}
                  comments
                </p>
              </div>
            </div>
            <div className="col-md-7 comment-section">
              <div className="d-flex post-track">
                <img src={selectedPhoto?.Logo} height="30px" width="30px" />
                <div>
                  {" "}
                  <h6 className="mt-1"> {selectedPhoto?.schName}</h6>
                  <p>
                    {selectedPhoto?.postTime}.{selectedPhoto?.postDate}
                  </p>
                </div>
              </div>

              <p>{selectedPhoto?.description}</p>
              <form className="mt-4">
                <div className="input-section d-flex">
                  {" "}
                  <input
                    as="textarea"
                    rows={2}
                    placeholder="Add your comment..."
                    value={comment}
                    onChange={handleCommentChange}
                  />
                  <p
                    className="mt-2"
                    variant="primary"
                    onClick={handleCommentSubmit}
                  >
                    Send
                  </p>
                </div>
              </form>
              <div className="comments-section mt-3">
                {comments.length > 0 && <h5>Comments:</h5>}
                {comments.map((commentObj, index) => (
                  <div key={index} className="comment-item">
                    <p>{commentObj.text}</p>
                    <small className="text-muted">
                      {commentObj.date} at {commentObj.time}
                    </small>
                  </div>
                ))}
              </div>
              <p>
                <strong>Tags:</strong> {selectedPhoto?.tags.join(", ")}
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TaggedPhoto;
