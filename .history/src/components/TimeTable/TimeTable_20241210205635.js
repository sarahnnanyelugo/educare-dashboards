import Table from "react-bootstrap/Table";

function Timetable() {
  return (
    <Table bordered>
      <thead>
        <tr>
          <th></th>
          <th>First Name</th>
          <th>break</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Monday</td>
          <td>ddddddd</td>
          <td rowSpan={3}>break</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>Tuesday</td>
          <td>Jacob</td>

          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td>Larry the Bird</td>

          <td>@twitter</td>
          <td>@twitter</td>
        </tr>{" "}
        <tr>
          <td>Wednesday</td>
          <td>Larry the Bird</td>

          <td>@twitter</td>
          <td>@twitter</td>
        </tr>{" "}
        <tr>
          <td>Wednesday</td>
          <td>Larry the Bird</td>

          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Timetable;
