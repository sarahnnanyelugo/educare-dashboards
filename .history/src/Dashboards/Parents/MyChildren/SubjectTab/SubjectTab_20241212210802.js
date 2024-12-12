import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./subject-tab.scss";

const SubjectTab = () => {
  const data = [
    {
      subject: "Home Economics",
      teacher: "Mr. Patrick",
      lessonPlan: [
        "Week 1-2: Introduction to Home Management",
        "Week 3-4: Importance of Hygiene in the Home",
        "Week 5-6: Types of Family Resources",
        "Week 7-8: Food Preparation Techniques",
        "Week 9-10: Budgeting and Meal Planning",
        "Week 11: Revision",
        "Week 12: Examination",
      ],
    },
    {
      subject: "English",
      teacher: "Mr. Ifeanyi",
      lessonPlan: [
        "Week 1-2: Sentence Structure and Types",
        "Week 2-3: Comprehension Practice: Passage 1",
        "Week 4-5: Figures of Speech (Similes, Metaphors, etc.)",
        "Week 6-7: Writing Skills: Narrative Essays",
        "Week 8-9: Letter Writing: Formal and Informal",
        "Week 10-11: Poetry Analysis: Introduction to Rhythm",
        "Week 11: Revision",
        "Week 12: Examination",
      ],
    },
    {
      subject: "Mathematics",
      teacher: "Mrs. Uju",
      lessonPlan: [
        "Week 1-2: Introduction to Algebra",
        "Week 3-4: Simplifying Algebraic Expressions",
        "Week 5-6: Solving Linear Equations",
        "Week 7-8: Geometry: Properties of Triangles",
        "Week 9-10: Data Representation (Bar Charts, Line Graphs)",
        "Week 11: Revision",
        "Week 12: Examination",
      ],
    },
    {
      subject: "French",
      teacher: "Mrs. Ogo",
      lessonPlan: [
        "Week 1-2: Greetings and Introductions in French",
        "Week 3-4: French Alphabets and Pronunciation",
        "Week 5-6: Days of the Week and Months of the Year",
        "Week 7-8: Simple Sentence Construction",
        "Week 9-10: Numbers (1-100) in French",
        "Week 11: Revision",
        "Week 12: Examination",
      ],
    },
    {
      subject: "Business Studies",
      teacher: "Mr. David",
      lessonPlan: [
        "Week 1-2: Introduction to Business",
        "Week 3-4: Office Equipment and Their Uses",
        "Week 5-6: Simple Bookkeeping: Basics",
        "Week 7-8: Trade and Its Importance",
        "Week 9-10: Communication in Business",
        "Week 11: Revision",
        "Week 12: Examination",
      ],
    },
    {
      subject: "Basic Technology",
      teacher: "Mr. Daniel",
      lessonPlan: [
        "Week 1-2: Workshop Safety Rules",
        "Week 3-4: Introduction to Simple Machines",
        "Week 5-6: Uses of Tools and Materials",
        "Week 7-8: Basic Electricity: Circuits and Symbols",
        "Week 9-10: Introduction to Technical Drawing",
        "Week 11: Revision",
        "Week 12: Examination",
      ],
    },
    {
      subject: "Social Studies",
      teacher: "Mrs. Chidera",
      lessonPlan: [
        "Week 1-2: Introduction to Culture and Norms",
        "Week 3-4: Family Structures and Roles",
        "Week 5-6: Government and Citizenship",
        "Week 7-8: Social Vices: Causes and Prevention",
        "Week 9-10: National Symbols and Their Importance",
        "Week 11: Revision",
        "Week 12: Examination",
      ],
    },
    {
      subject: "Computer Science",
      teacher: "Mr. Blessed",
      lessonPlan: [
        "Week 1-2: History and Evolution of Computers",
        "Week 3-4: Basic Computer Hardware Components",
        "Week 5-6: Introduction to Software Applications",
        "Week 7-8: Fundamentals of Word Processing",
        "Week 9-10: Internet Safety and Ethics",
        "Week 11: Revision",
        "Week 12: Examination",
      ],
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <div className="vertical-tab col-md-12">
        <div className="tab-list col-md-5 col-10">
          <Row style={{ borderBottom: "solid 1px #e7e7e7", padding: "10px" }}>
            <Col>
              <h6>Subject</h6>
            </Col>
            <Col>
              <h6>Teacher</h6>
            </Col>
          </Row>
          {data.map((item, index) => (
            <div
              key={index}
              className={`tab-item ${index === selectedIndex ? "active" : ""}`}
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

        <div className="tab-content col-md-7 col-12">
          <h3>Lesson Plan</h3>
          <Row>
            {data[selectedIndex].lessonPlan
              .reduce(
                (result, plan, i) => {
                  const colIndex = i % 2;
                  if (!result[colIndex]) result[colIndex] = [];
                  result[colIndex].push(plan);
                  return result;
                },
                [[], []]
              )
              .map((plans, index) => (
                <Col key={index} md={6}>
                  <ul className="list-unstyled">
                    {plans.map((plan, i) => {
                      const [week, description] = plan.split(":");
                      return (
                        <li key={i}>
                          <strong>{week}:</strong> {description}
                        </li>
                      );
                    })}
                  </ul>
                </Col>
              ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default SubjectTab;
