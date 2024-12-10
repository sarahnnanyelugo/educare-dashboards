import Table from "react-bootstrap/Table";

function Timetable() {
  return (
    <Table bordered>
      <thead>
        <tr>
          <th></th>
          <th>8:00am-8:30am</th>
          <th>8:30am-9:00am</th>
          <th>9:00am-9:30am</th>
          <th>9:30am-10:00am</th>
          <th>10:00am-10:30am</th>
          <th>12:00pm-1:00pm</th>
          <th>1:00pm-1:30pm</th>
          <th>1:30pm-2:00pm</th>
          <th>2:00pm-3:00pm</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Monday</td>
          <td>H. Econs</td> <td>French</td>
          <td rowSpan={6}>break</td>
          <td>Basic Science</td>
          <td>Basic Science</td>
          <td rowSpan={6}>break</td>
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
          <td>10:00am-10:30am</td>

          <td>@twitter</td>
          <td>@twitter</td>
          <td>Thursday</td>
          <td>Basic Tech.</td>
          <td>S. O. S.</td>
          <td>Business Studies</td>
        </tr>{" "}
        <tr>
          <td>H. Econs</td>
          <td>10:30am-11:00am</td>
          <td>@twitter</td>
          <td>@twitter</td> <td>Friday</td>
          <td>Basic Tech.</td>
          <td>S. O. S.</td>
          <td>Business Studies</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Timetable;
