import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Select from "../../../components/Select/Select";
const category = [
  { value: "2020/2022", label: "2020/2022" },
  { value: "2021/2022", label: "2021/2022" },
  { value: "2022/2023", label: "2022/2023" },
  { value: "2023/2024", label: "2023/2024" },
];
function FeedBackForm(props) {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="feed-back-form col-md-12">
          {" "}
          <h5>Add Feedback</h5>
          <form className="col-md-12 feedback-form ">
            <h6>Category</h6>
            <div className="col-md-8 card">
              <Select
                options={category}
                value={selectedCategory}
                onChange={setSelectedCategory}
                placeholder="Select a feedback category"
              />
            </div>
            <h6>Child</h6>
            <div className="">
              {" "}
              <input placeholder="Add child" />
            </div>

            <h6>Details</h6>
            <div className="card">
              {" "}
              <textarea placeholder="Enter details" />
            </div>
            <div className="d-flex mt-3 feed-back-btns">
              <div style={{ flexGrow: 1 }} />
              <button className="cancel-btn" onClick={props.onHide}>
                Cancel
              </button>
              <button className="submit-btn">Submit</button>
            </div>
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
