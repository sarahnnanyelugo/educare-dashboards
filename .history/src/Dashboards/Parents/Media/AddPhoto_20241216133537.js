import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import { UploadPhoto } from "../../../components/UploadPhoto/UploadPhoto";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
export const AddPhoto = () => {
  return (
    // <div className="add-photo-div">
    //   <Link to={"/photo-journal"}>
    //     {" "}
    //     <GoArrowLeft /> Back
    //   </Link>
    //   <h5>Create Album</h5>
    //   <form>
    //     <h6>Enter title</h6>
    //     <input placeholder="Give a title" />
    //     <h6>Add caption / description</h6>
    //     <input placeholder="Caption here" />
    //     <h6>Upload Photo / Video</h6>
    //     <UploadPhoto height="130px" />
    //     <div className="upload-btns">
    //       {" "}
    //       <center>
    //         <button className="cancel col-5">Cancel</button>
    //         <button className="app-btn col-5">Upload</button>
    //       </center>
    //     </div>
    //   </form>
    // </div>
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};