import Table from "react-bootstrap/Table";

function Timetable() {
  return (
    <Table bordered>
      <thead>
        <tr>
          <th></th>
          <th>8:00am-8:30am</th>
          <th>break</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Monday</td>
          <td>8:30am-9:00am</td>
          <td rowSpan={6}>break</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>Tuesday</td>
          <td>9:00am-9:30am</td>

          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td>9:30am-10:00am</td>

          <td>@twitter</td>
          <td>@twitter</td>
        </tr>{" "}
        <tr>
          <td>Thursday</td>
          <td>10:00am-10:30am</td>

          <td>@twitter</td>
          <td>@twitter</td>
        </tr>{" "}
        <tr>
          <td>Friday</td>
          <td>10:30am-11:00am</td>

          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Timetable;
