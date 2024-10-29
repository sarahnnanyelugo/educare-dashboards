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
import Kid16 from "../../../assets/images/Kid16.jpg";
import Kid17 from "../../../assets/images/baloon2.png";
import Kid18 from "../../../assets/images/grad.png";
import Kid19 from "../../../assets/images/grad2.png";
import Kid20 from "../../../assets/images/baloon.png";
import "./photo-journals.scss";
import Modal from "react-bootstrap/Modal";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { GoArrowLeft } from "react-icons/go";

// Sample data
const taggedPhotos = [
  {
    src: Kid19,
    title: "Cultural Day",
    description: "Photo taken during our annual Cultural Day event.",
    tags: ["culture", "event", "celebration"],
  },
  {
    src: Kid16,
    title: "Sports Day",
    description: "A moment from Sports Day.",
    tags: ["sports", "competition", "outdoor"],
  },
  // Add more photos with similar structure
];
const TaggedPhoto = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openAlbum = (album) => {
    setSelectedAlbum(album);
    setCurrentPhoto(null); // Reset current photo selection
  };

  const openPhoto = (photo) => {
    setCurrentPhoto(photo);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const navigatePhoto = (direction) => {
    const photos = selectedAlbum.photos;
    const index = photos.indexOf(currentPhoto);
    const newIndex = (index + direction + photos.length) % photos.length;
    setCurrentPhoto(photos[newIndex]);
  };

  return (
    <div className="gallery-page">
      {/* {!selectedAlbum && (
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          {photoAlbums.map((album) => (
            <div key={album.title} onClick={() => openAlbum(album)}>
              <img
                src={album.photos[0]}
                alt={album.title}
                className="album-cover"
              />
              <h6>{album.title}</h6>
              <p>{album.photos.length} photos</p>
            </div>
          ))}
        </div>
      )} */}

      <div>
        <div className="d-flex gallery-heading">
          <button onClick={() => setSelectedAlbum(null)}>
            {" "}
            <GoArrowLeft /> Backs
          </button>
          {/* <h5 className="album-title">{selectedAlbum.title}</h5>{" "} */}
        </div>
        <div className=" row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          {selectedAlbum.photos.map((photo) => (
            <img
              key={photo}
              src={photo}
              alt={photo}
              onClick={() => openPhoto(photo)}
              className="photo-thumbnail "
            />
          ))}
        </div>
      </div>
      {/* Modal for Single Photo View */}
      <Modal show={showModal} onHide={closeModal} centered size="lg">
        <Modal.Body className="text-center">
          {currentPhoto && (
            <div className="modal-content">
              <BsArrowLeftCircle
                onClick={() => navigatePhoto(-1)}
                className="nav-button left"
              />

              <center>
                <div className="col-md-12">
                  {" "}
                  <img
                    src={currentPhoto}
                    alt="Zoomed"
                    className="modal-photo"
                    width="100%"
                  />
                </div>
              </center>
              <BsArrowRightCircle
                onClick={() => navigatePhoto(1)}
                className="nav-button right"
              />
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TaggedPhoto;
