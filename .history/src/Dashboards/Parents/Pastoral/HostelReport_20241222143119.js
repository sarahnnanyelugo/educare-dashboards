import React, { useEffect, useState } from "react";
import "./pastoral.scss";
import { RiSearch2Line } from "react-icons/ri";
import Icon1 from "../../../assets/images/clipboard.svg";
import { BsCalendar4Week } from "react-icons/bs";
import { AppTable } from "../../../components/AppTable/AppTable";
import { generateHostelReport } from "../../../Utils/DataUtils";
import Student from "../../../assets/images/student.png";
import Peter from "../../../assets/images/peter.png";

const terms = [
  { value: "first term", label: "First Term" },
  { value: "second term", label: "Second Term" },
  { value: "third term", label: "Third Term" },
];
const sessions = [
  { value: "2020/2022", label: "2020/2022" },
  { value: "2021/2022", label: "2021/2022" },
  { value: "2022/2023", label: "2022/2023" },
  { value: "2023/2024", label: "2023/2024" },
];
function HostelReport() {
  const [hostelReport, setHostelReport] = useState([]);
  const headers = ["Date", "Child", "Class", "Action"];
  const avatarList = [Student, Peter];
  useEffect(() => {
    const fb = generateHostelReport(4, avatarList);
    setHostelReport(fb);
    console.log(fb);
  }, []);
  return (
    <div className="feedbacks-div">
      <div className="col-md-12 heading">
        <h5>Hostel Reports</h5>
      </div>{" "}
      <div className="page-session">
        {" "}
        <div className="d-md-flex">
          {" "}
          <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3 col-md-3">
            <div className=" col">
              <h6>Session</h6>
              <div className="select-div  d-flex col">
                {" "}
                <div>
                  {" "}
                  <img src={Icon1} height="" />
                </div>
                <select>
                  <option>2023/2024</option>
                </select>
              </div>
            </div>
            <div className="col">
              {" "}
              <h6>Term</h6>
              <div className="card col-md-12">
                <Select
                  options={terms}
                  value={selectedTerm}
                  onChange={setSelectedTerm}
                  Icon={Icon4}
                  placeholder="Select Term"
                />
              </div>
            </div>
          </div>
          <div style={{ flexGrow: 1 }} />
          <div className=" col-md-3 ">
            <h6>Search</h6>
            <div className="input-div d-flex">
              <RiSearch2Line className="icon" />

              <input placeholder="search" />
            </div>
          </div>
        </div>
        <hr />
        <div className="feedbacks-table">
          <AppTable
            headers={headers}
            rows={hostelReport}
            includeImages={true}
          />
        </div>
      </div>
    </div>
  );
}

export default HostelReport;
