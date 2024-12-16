import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import { UploadPhoto } from "../../../components/UploadPhoto/UploadPhoto";
import Modal from "react-bootstrap/Modal";
import { Desktop, TabletAndBelow } from "../../../Utils/mediaQueries";

function Image(props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="add-photo-div">
            <Link to={"/photo-journal"}>
              {" "}
              <GoArrowLeft /> Back
            </Link>
            <h5>Create Album</h5>
            <form>
              <h6>Enter title</h6>
              <input placeholder="Give a title" />
              <h6>Add caption / description</h6>
              <input placeholder="Caption here" />
              <h6>Upload Photo / Video</h6>
              <UploadPhoto height="130px" />
              <div className="upload-btns">
                {" "}
                <center>
                  <button className="cancel col-5">Cancel</button>
                  <button className="app-btn col-5">Upload</button>
                </center>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
function AddAlbum() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Desktop>
        <button variant="primary" onClick={() => setModalShow(true)}>
          Create Album
        </button>
      </Desktop>

      <Image show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default AddAlbum;
