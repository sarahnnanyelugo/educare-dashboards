import React, { useState } from "react";
import "./VerticalTab.scss";

const SubjectTab = () => {
  const data = [
    {
      subject: "Home Economics",
      teacher: "Mr. Patrick",
      lessonPlan: "Week 1 - 2",
    },
    { subject: "English", teacher: "Mr. Ifeanyi", lessonPlan: "Week 1 - 2" },
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
      lessonPlan: "Week 1 - 2",
    },
    {
      subject: "Social Studies",
      teacher: "Mrs. Chidera",
      lessonPlan: "Week 1 - 2",
    },
    {
      subject: "Computer Science",
      teacher: "Mr. Blessed",
      lessonPlan: "Week 1 - 2",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="vertical-tab">
      {/* Left Panel */}
      <div className="tab-list">
        {data.map((item, index) => (
          <div
            key={index}
            className={`tab-item ${index === selectedIndex ? "active" : ""}`}
            onClick={() => setSelectedIndex(index)}
          >
            <div className="subject">{item.subject}</div>
            <div className="teacher">{item.teacher}</div>
          </div>
        ))}
      </div>

      {/* Right Panel */}
      <div className="tab-content">
        <h3>Lesson Plan</h3>
        <p>{data[selectedIndex].lessonPlan}</p>
      </div>
    </div>
  );
};

export default SubjectTab;
