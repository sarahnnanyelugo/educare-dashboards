import React, { useState } from "react";
import Kid1 from "../../../assets/images/kid1.png";
import Kid2 from "../../../assets/images/kid2.jpeg";
import Kid3 from "../../../assets/images/kid3.jpeg";
import Kid4 from "../../../assets/images/kid4.jpg";
import Kid5 from "../../../assets/images/kid5.jpg";
import Kid6 from "../../../assets/images/girl1.png";
import Kid7 from "../../../assets/images/cul5.jpeg";
import Kid8 from "../../../assets/images/cul4.jpg";
import Kid9 from "../../../assets/images/cul3.jpg";
import Kid10 from "../../../assets/images/cul2.jpeg";
import Kid11 from "../../../assets/images/cul1.jpeg";
import Kid12 from "../../../assets/images/gra1.webp";
import Kid13 from "../../../assets/images/gra3.webp";
import Kid14 from "../../../assets/images/gra4.webp";
import Kid15 from "../../../assets/images/Kid15.jpg";
import Kid16 from "../../../assets/images/Kid16.jpg";
import Kid17 from "../../../assets/images/baloon2.png";
import Kid18 from "../../../assets/images/grad.jpg";
import Kid19 from "../../../assets/images/grad2.jpeg";
import "./photo-journals.scss";
import Modal from "react-bootstrap/Modal";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { GoArrowLeft } from "react-icons/go";

// Sample data
const photoAlbums = [
  //   {
  //     title: "Cultural Day",
  //     photos: [Kid6, Kid7, Kid8, Kid9, Kid10, Kid11],
  //   },
  {
    title: "2023 Graduation Pictures",
    photos: [Kid19, Kid6, Kid13, Kid14, Kid18],
  },
  {
    title: "Sports Day",
    photos: [Kid16, Kid15, Kid16, Kid17],
  },
  {
    title: "School Party",
    photos: [Kid19, Kid13, Kid14, Kid18, Kid19],
  },
  {
    title: "Excursion Day",
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
    <div className="gallery-page">
      {!selectedAlbum && (
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
      )}

      {/* Photos in Album */}
      {selectedAlbum && (
        <div>
          <div className="d-flex gallery-heading">
            <button onClick={() => setSelectedAlbum(null)}>
              {" "}
              <GoArrowLeft /> Backs
            </button>
            <h4 className="album-title">{selectedAlbum.title}</h4>{" "}
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
      )}

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
                <div className="col-md-6">
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

export default PhotoGallery;
