import React, { useState } from "react";
import Modal from "react-modal";
import Kid1 from "../../../assets/images/kid1.jpg";
import Kid2 from "../../../assets/images/kid2.jpeg";
import Kid3 from "../../../assets/images/kid3.jpeg";
import Kid4 from "../../../assets/images/kid4.jpg";
import Kid5 from "../../../assets/images/kid5.jpg";
// Sample data
const photoAlbums = [
  {
    title: "Cultural Day",
    photos: [Kid1, Kid2],
  },
  {
    title: "Sports Day",
    photos: [Kid3, Kid4],
  },
  {
    title: "Graduation Day",
    photos: [Kid5, Kid6, Kid7],
  },
  // Add more albums here
];

const PhotoJournal = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openAlbum = (album) => {
    setSelectedAlbum(album);
    setCurrentPhoto(null); // Reset current photo selection
  };

  const openPhoto = (photo) => {
    setCurrentPhoto(photo);
    setIsModalOpen(true);
  };

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
          <button onClick={() => setSelectedAlbum(null)}>Back to Albums</button>
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
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="photo-modal"
        overlayClassName="photo-overlay"
      >
        <button onClick={() => setIsModalOpen(false)} className="close-modal">
          Close
        </button>
        {currentPhoto && (
          <div className="modal-content">
            <button
              onClick={() => navigatePhoto(-1)}
              className="nav-button left"
            >
              {"<"}
            </button>
            <img
              src={currentPhoto}
              alt="Zoomed Photo"
              className="modal-photo"
            />
            <button
              onClick={() => navigatePhoto(1)}
              className="nav-button right"
            >
              {">"}
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default PhotoJournal;
