import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
function FeedBackForm(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="feed-back-form">
          {" "}
          <h5>Add Feedback</h5>
          <form>
            <h6>Category</h6>
            <h6>Child</h6>
            <h6>Details</h6>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function AddFeedBack() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button className="add-feedback-btn" onClick={() => setModalShow(true)}>
        Add FeedBack
      </button>

      <FeedBackForm show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default AddFeedBack;
