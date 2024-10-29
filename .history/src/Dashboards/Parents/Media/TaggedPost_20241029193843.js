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
import Kid10 from "../../../assets/images/cul3.png";
import Kid11 from "../../../assets/images/cul1.png";
import Kid12 from "../../../assets/images/cultural3.png";
import Kid13 from "../../../assets/images/gradu.png";
import Kid14 from "../../../assets/images/gradu2.png";
import Kid15 from "../../../assets/images/Kid15.jpg";
import Kid16 from "../../../assets/images/Kid16.png";
import Kid17 from "../../../assets/images/baloon2.png";
import Kid18 from "../../../assets/images/grad.png";
import Kid19 from "../../../assets/images/grad2.png";
import Kid20 from "../../../assets/images/baloon.png";
import "./photo-journals.scss";
import Modal from "react-bootstrap/Modal";
import { TbHeart } from "react-icons/tb";
import { BiCommentDetail } from "react-icons/bi";

// Sample data
const taggedPhotos = [
  {
    src: Kid19,
    title: "Cultural Day",
    description: "Photo taken during our annual Cultural Day event.",
    tags: ["culture", "event", "celebration"],
    likes: 120,
    comments: 34,
  },
  {
    src: Kid16,
    title: "Sports Day",
    description: "A moment from Sports Day.",
    tags: ["sports", "competition", "outdoor"],
    likes: 85,
    comments: 20,
  },
  {
    src: Kid20,
    title: "Sports Day",
    description: "A moment from Sports Day.",
    tags: ["sports", "competition", "outdoor"],
    likes: 85,
    comments: 20,
  },
  {
    src: Kid13,
    title: "Sports Day",
    description: "A moment from Sports Day.",
    tags: ["sports", "competition", "outdoor"],
    likes: 85,
    comments: 20,
  },
  {
    src: Kid10,
    title: "Sports Day",
    description: "A moment from Sports Day.",
    tags: ["sports", "competition", "outdoor"],
    likes: 85,
    comments: 20,
  },
  // Add more photos with similar structure
];
const TaggedPhoto = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openPhoto = (photo) => {
    setSelectedPhoto(photo);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPhoto(null);
  };

  return (
    <div className="gallery-page">
      {/* Photo Grid */}
      <div className="photo-grid row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        {taggedPhotos.map((photo) => (
          <div key={photo.src} className="photo-item">
            <img
              src={photo.src}
              alt={photo.title}
              onClick={() => openPhoto(photo)}
              className="photo-thumbnail"
              width="100%"
            />
            <div className="photo-info d-flex mt-2 ">
              <p style={{ marginRight: "30px" }}>
                <strong>
                  {" "}
                  <TbHeart style={{ fontSize: "17px", marginRight: "5px" }} />
                  {photo.likes}
                </strong>{" "}
                likes
              </p>
              <p>
                <strong>
                  {" "}
                  <BiCommentDetail
                    style={{ fontSize: "17px", marginRight: "5px" }}
                  />
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
                width="100%"
                src={selectedPhoto?.src}
                alt={selectedPhoto?.title}
                className="modal-photo"
              />
              <div className="photo-info d-flex mt-2 ">
                <p style={{ marginRight: "30px" }}>
                  <strong>
                    {" "}
                    <TbHeart style={{ fontSize: "17px", marginRight: "5px" }} />
                    {photo.likes}
                  </strong>{" "}
                  likes
                </p>
                <p>
                  <strong>
                    {" "}
                    <BiCommentDetail
                      style={{ fontSize: "17px", marginRight: "5px" }}
                    />
                    {photo.comments}
                  </strong>{" "}
                  comments
                </p>
              </div>
            </div>
            <div className="col-md-7">
              {" "}
              <p>{selectedPhoto?.description}</p>
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
