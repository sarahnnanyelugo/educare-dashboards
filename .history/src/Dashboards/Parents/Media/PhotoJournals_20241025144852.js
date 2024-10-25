import React, { useState } from "react";
import Kid1 from "../../../assets/images/kid1.jpg";
import Kid2 from "../../../assets/images/kid2.jpeg";
import Kid3 from "../../../assets/images/kid3.jpeg";
import Kid4 from "../../../assets/images/kid4.jpg";
import Kid5 from "../../../assets/images/kid5.jpg";
import Kid6 from "../../../assets/images/cul6.jpg";
import Kid7 from "../../../assets/images/cul5.jpeg";
import Kid8 from "../../../assets/images/cul4.jpg";
import Kid9 from "../../../assets/images/cul3.jpg";
import Kid10 from "../../../assets/images/cul2.jpeg";
import Kid11 from "../../../assets/images/cul1.jpeg";
import Kid12 from "../../../assets/images/gra1.webp";
import Kid13 from "../../../assets/images/gra3.webp";
import Kid14 from "../../../assets/images/gra4.webp";
import Kid15 from "../../../assets/images/spt.webp";
import Kid16 from "../../../assets/images/spt3.webp";
import Kid17 from "../../../assets/images/spt2.jpg";
import "./photo-journals.scss";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

// Sample data
const photoAlbums = [
  {
    title: "Cultural Day",
    photos: [Kid6, Kid7, Kid8, Kid9, Kid10, Kid11],
  },
  {
    title: "Sports Day",
    photos: [Kid15, Kid16, Kid17],
  },
  {
    title: "Graduation Day",
    photos: [Kid12, Kid13, Kid14],
  },
  {
    title: "Regular School Days",
    photos: [Kid1, Kid2, Kid3, Kid4, Kid5],
  },
  // Add more albums here
];

const PhotoGallery = () => {
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
    <div>
      {/* Album Grid */}
      {!selectedAlbum && (
        <div className="album-grid">
          {photoAlbums.map((album) => (
            <div key={album.title} onClick={() => openAlbum(album)}>
              <img
                src={album.photos[0]}
                alt={album.title}
                className="album-cover"
              />
              <p>{album.title}</p>
            </div>
          ))}
        </div>
      )}

      {/* Photos in Album */}
      {selectedAlbum && (
        <div className="photo-grid">
          <Button variant="secondary" onClick={() => setSelectedAlbum(null)}>
            Back to Albums
          </Button>
          {selectedAlbum.photos.map((photo) => (
            <img
              key={photo}
              src={photo}
              alt={photo}
              onClick={() => openPhoto(photo)}
              className="photo-thumbnail"
            />
          ))}
        </div>
      )}

      {/* Modal for Single Photo View */}
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Photo View</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {currentPhoto && (
            <div className="modal-content">
              <Button
                variant="link"
                onClick={() => navigatePhoto(-1)}
                className="nav-button left"
              >
                {"<"}
              </Button>
              <img src={currentPhoto} alt="Zoomed" className="modal-photo" />
              <Button
                variant="link"
                onClick={() => navigatePhoto(1)}
                className="nav-button right"
              >
                {">"}
              </Button>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PhotoGallery;
