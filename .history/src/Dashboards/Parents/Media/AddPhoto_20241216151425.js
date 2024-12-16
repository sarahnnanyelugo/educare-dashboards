import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import { UploadPhoto } from "../../../components/UploadPhoto/UploadPhoto";
import Modal from "react-bootstrap/Modal";
import { Desktop, TabletAndBelow } from "../../../Utils/mediaQueries";
import { IoAdd } from "react-icons/io5";

function Image(props) {
  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="add-photo-modal"
      >
        <Modal.Body>
          <div className="add-photo-div col-md-12">
            <TabletAndBelow>
              <Link to={"/photo-journal"}>
                {" "}
                <GoArrowLeft /> Back
              </Link>
            </TabletAndBelow>
            <h5>Create Album</h5>
            <form>
              <h6>Enter title</h6>
              <input placeholder="Give a title" />
              <h6>
                Add caption / description
                <span style={{ color: "grey" }}>(Optional)</span>
              </h6>
              <input placeholder="Caption here" />
              <h6>Upload Photo / Video</h6>
              <UploadPhoto height="130px" />
              <div className="upload-btns">
                {" "}
                <center>
                  <button className="cancel col-5" onClick={props.onHide}>
                    Cancel
                  </button>
                  <button className="app-btn col-5">Upload</button>
                </center>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
function AddAlbum() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Desktop>
        <button className="app-btn" onClick={() => setModalShow(true)}>
          Create Album
        </button>
      </Desktop>
      <TabletAndBelow>
        {" "}
        <div className="d-flex">
          <div style={{ flexGrow: 1 }} />
          <Link to={"/add-photo"} className="add-photo">
            <IoAdd />
          </Link>
        </div>
      </TabletAndBelow>
      <Image show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default AddAlbum;
