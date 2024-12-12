import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./subject-tab.scss";

const SubjectTab = () => {
  const data = [
    {
      subject: "Home Economics",
      teacher: "Mr. Patrick",
      lessonPlan: "Week 1 - 2",
    },
    { subject: "English", teacher: "Mr. Ifeanyi", lessonPlan: "Week 10 - 2" },
    { subject: "Mathematics", teacher: "Mrs. Uju", lessonPlan: "Week 1 - 2" },
    { subject: "French", teacher: "Mrs. Ogo", lessonPlan: "Week 1 - 2" },
    {
      subject: "Business Studies",
      teacher: "Mr. David",
      lessonPlan: "Week 1 - 2",
    },
    {
      subject: "Basic Technology",
      teacher: "Mr. Daniel",
      lessonPlan: "Day 1 - 2",
    },
    {
      subject: "Social Studies",
      teacher: "Mrs. Chidera",
      lessonPlan: "Month 1 - 2",
    },
    {
      subject: "Computer Science",
      teacher: "Mr. Blessed",
      lessonPlan: "Week 1 - 2",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      {/* <div className="subject-tab-container"></div> */}
      <div className="vertical-tab col-md-12">
        <div class="tab-header">
          <div class="header-subject">Subject</div>
          <div class="header-teacher">Teacher</div>
        </div>
        <div className="tablist-container">
          {" "}
          <div className="tab-list col-md-5">
            {data.map((item, index) => (
              <div
                key={index}
                className={`tab-item ${
                  index === selectedIndex ? "active" : ""
                }`}
                onClick={() => setSelectedIndex(index)}
              >
                <Row>
                  <Col>
                    <div className="subject">{item.subject}</div>
                  </Col>
                  <Col>
                    <div className="teacher">{item.teacher}</div>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        </div>

        <div className="tab-content col-md-7">
          <h3>Lesson Plan</h3>
          <p>{data[selectedIndex].lessonPlan}</p>
        </div>
      </div>
    </>
  );
};

export default SubjectTab;
