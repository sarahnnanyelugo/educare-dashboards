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
          <td>8:30am-9:00am</td> <td>Otto</td>
          <td rowSpan={6}>break</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td rowSpan={6}>break</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Timetable;
