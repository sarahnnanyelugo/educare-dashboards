import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./subject-tab.scss";

const SubjectTab = () => {
  const data = [
    {
      subject: "Home Economics",
      teacher: "Mr. Patrick",
      lessonPlan: [
        "Week 1: Introduction to Home Management",
        "Week 2: Importance of Hygiene in the Home",
        "Week 3: Types of Family Resources",
        "Week 4: Food Preparation Techniques",
        "Week 5: Budgeting and Meal Planning",
        "Week 6: Laundry and Clothing Care",
        "Week 7: Basic First Aid in the Home",
        "Week 8: Home Safety Tips",
        "Week 9: Kitchen Equipment and Their Uses",
        "Week 10: Revision and Assessment",
      ],
    },
    {
      subject: "English",
      teacher: "Mr. Ifeanyi",
      lessonPlan: [
        "Week 1: Sentence Structure and Types",
        "Week 2: Comprehension Practice: Passage 1",
        "Week 3: Figures of Speech (Similes, Metaphors, etc.)",
        "Week 4: Writing Skills: Narrative Essays",
        "Week 5: Letter Writing: Formal and Informal",
        "Week 6: Poetry Analysis: Introduction to Rhythm",
        "Week 7: Active and Passive Voice",
        "Week 8: Comprehension Practice: Passage 2",
        "Week 9: Vocabulary Development",
        "Week 10: Revision and Test Preparation",
      ],
    },
    {
      subject: "Mathematics",
      teacher: "Mrs. Uju",
      lessonPlan: [
        "Week 1: Introduction to Algebra",
        "Week 2: Simplifying Algebraic Expressions",
        "Week 3: Solving Linear Equations",
        "Week 4: Geometry: Properties of Triangles",
        "Week 5: Data Representation (Bar Charts, Line Graphs)",
        "Week 6: Basic Trigonometry",
        "Week 7: Word Problems in Algebra",
        "Week 8: Introduction to Probability",
        "Week 9: Construction: Drawing Angles and Triangles",
        "Week 10: Revision and Problem Solving",
      ],
    },
    {
      subject: "French",
      teacher: "Mrs. Ogo",
      lessonPlan: [
        "Week 1: Greetings and Introductions in French",
        "Week 2: French Alphabets and Pronunciation",
        "Week 3: Days of the Week and Months of the Year",
        "Week 4: Simple Sentence Construction",
        "Week 5: Numbers (1-100) in French",
        "Week 6: Common Verbs and Their Conjugations",
        "Week 7: Vocabulary: Household Items",
        "Week 8: Listening Practice: Short Dialogues",
        "Week 9: Writing Practice: Short Paragraphs",
        "Week 10: Revision and Oral Practice",
      ],
    },
    {
      subject: "Business Studies",
      teacher: "Mr. David",
      lessonPlan: [
        "Week 1: Introduction to Business",
        "Week 2: Office Equipment and Their Uses",
        "Week 3: Simple Bookkeeping: Basics",
        "Week 4: Trade and Its Importance",
        "Week 5: Communication in Business",
        "Week 6: Banking Procedures",
        "Week 7: Entrepreneurship Basics",
        "Week 8: Advertising and Promotion",
        "Week 9: Consumer Rights",
        "Week 10: Revision and Assessment",
      ],
    },
    {
      subject: "Basic Technology",
      teacher: "Mr. Daniel",
      lessonPlan: [
        "Week 1: Workshop Safety Rules",
        "Week 2: Introduction to Simple Machines",
        "Week 3: Uses of Tools and Materials",
        "Week 4: Basic Electricity: Circuits and Symbols",
        "Week 5: Introduction to Technical Drawing",
        "Week 6: Building Materials and Their Properties",
        "Week 7: Energy Sources: Renewable vs Non-renewable",
        "Week 8: Maintenance of Tools",
        "Week 9: Engineering Materials: Metals and Plastics",
        "Week 10: Revision and Practical Exercises",
      ],
    },
    {
      subject: "Social Studies",
      teacher: "Mrs. Chidera",
      lessonPlan: [
        "Week 1: Introduction to Culture and Norms",
        "Week 2: Family Structures and Roles",
        "Week 3: Government and Citizenship",
        "Week 4: Social Vices: Causes and Prevention",
        "Week 5: National Symbols and Their Importance",
        "Week 6: Human Rights and Responsibilities",
        "Week 7: Population Education",
        "Week 8: Environmental Conservation",
        "Week 9: Leadership and Followership",
        "Week 10: Revision and Class Discussion",
      ],
    },
    {
      subject: "Computer Science",
      teacher: "Mr. Blessed",
      lessonPlan: [
        "Week 1: History and Evolution of Computers",
        "Week 2: Basic Computer Hardware Components",
        "Week 3: Introduction to Software Applications",
        "Week 4: Fundamentals of Word Processing",
        "Week 5: Spreadsheet Basics",
        "Week 6: Introduction to Computer Networks",
        "Week 7: Internet Safety and Ethics",
        "Week 8: File Management Techniques",
        "Week 9: Practical: Creating and Formatting Documents",
        "Week 10: Revision and Practical Assessment",
      ],
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <div className="vertical-tab col-md-12">
        <div className="tab-list col-md-5">
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

        <div className="tab-content col-md-7">
          <h3>Lesson Plan</h3>
          <ul>
            {data[selectedIndex].lessonPlan.map((plan, i) => (
              <li key={i}>{plan}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SubjectTab;
