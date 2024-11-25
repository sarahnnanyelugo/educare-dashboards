import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
const sessions = [
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
        <div className="feed-back-form">
          {" "}
          <h5>Add Feedback</h5>
          <form>
            <h6>Category</h6>
            <Select
              options={sessions}
              value={selectedSession}
              onChange={setSelectedSession}
              placeholder="Select Session"
              Icon={Icon3}
            />
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
