import Table from "react-bootstrap/Table";
import "./time-table.scss";
function Timetable() {
  return (
    <Table bordered className="subject-table">
      <thead>
        <tr>
          <th></th>
          <td>8:00am-8:30am</td>
          <td>8:30am-9:00am</td>
          <td>9:00am-9:30am</td>
          <td>9:30am-10:00am</td>
          <td>10:00am-10:30am</td>
          <td>12:00pm-1:00pm</td>
          <td>1:00pm-1:30pm</td>
          <td>1:30pm-2:00pm</td>
          <td>2:00pm-3:00pm</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Monday</td>
          <td>H. Econs</td> <td>French</td>
          <td rowSpan={6} className="vertical-td">
            Short break
          </td>
          <td>Basic Science</td>
          <td>Basic Science</td>
          <td rowSpan={6} className="vertical-td">
            Long break
          </td>
          <td>Basic Tech.</td>
          <td>S. O. S.</td>
          <td>Business Studies</td>
        </tr>
        <tr>
          <td>Tuesday</td>
          <td>H. Econs</td>

          <td>French</td>
          <td>Basic Science</td>
          <td>P. H. E.</td>
          <td>Basic Tech.</td>
          <td>S. O. S.</td>
          <td>Business Studies</td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td>H. Econs</td> <td>French</td>
          <td>Basic Science</td> <td>Music</td>
          <td>Basic Tech.</td>
          <td>S. O. S.</td>
          <td>Business Studies</td>
        </tr>{" "}
        <tr>
          <td>Thursday</td>
          <td>H. Econs</td>
          <td>French</td>
          <td>Basic Science</td> <td>Music</td>
          <td>Basic Tech.</td>
          <td>S. O. S.</td>
          <td>Business Studies</td>
        </tr>{" "}
        <tr>
          <td>Friday</td>
          <td>H. Econs</td>
          <td>French</td>
          <td>English</td>
          <td>Music</td>
          <td>Basic Tech.</td>
          <td>S. O. S.</td>
          <td>Business Studies</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Timetable;
