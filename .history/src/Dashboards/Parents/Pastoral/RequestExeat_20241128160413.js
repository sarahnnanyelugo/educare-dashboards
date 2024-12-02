import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Select from "../../../components/Select/Select";
const category = [
  { value: "school fees", label: "School fees" },
  { value: "health issues", label: "Health issues" },
  { value: "travel", label: "Traveling" },
  { value: "excursion", label: "Excursion" },
];
const child = [
  { value: "anosike john", label: "Anosike John" },
  { value: "anosike mark", label: "Anosike Mark" },
  { value: "anosike princess", label: "Anosike Princess" },
  { value: "anosike philip", label: "Anosike Philip" },
];
function RequestForm(props) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedChild, setSelectedChild] = useState("");

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
          <h5>Request Exeat</h5>
          <form className="col-md-12" style={{ width: "450px" }}>
            <h6>Type</h6>
            <div className=" card">
              <Select
                options={category}
                value={selectedCategory}
                onChange={setSelectedCategory}
                placeholder="Select type"
              />
            </div>
            <h6>Child</h6>{" "}
            <div className=" card">
              <Select
                options={child}
                value={selectedChild}
                onChange={setSelectedChild}
                placeholder="Select a child"
              />
            </div>
            <h6>Exeat reason</h6>
            <div className="card">
              {" "}
              <textarea placeholder="what's your reason for requesting exeat?" />
            </div>
            <h6>Exeat time & date</h6>
            <input type="date-time" />
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

function RequestExeat() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button className="add-feedback-btn" onClick={() => setModalShow(true)}>
        Request Exeat
      </button>

      <RequestForm show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default RequestExeat;