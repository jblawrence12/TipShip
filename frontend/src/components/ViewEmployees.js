import Table from 'react-bootstrap/Table';

function ViewEmployees() {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Employee ID</th>
          <th>Position</th> 
          <th>Wage</th> 
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>453</td>
          <td>Bartender</td>
          <td>16.28</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>53</td>
          <td>Server</td>
          <td>16.28</td>
        </tr>
        <tr>
        <td>2</td>
          <td>Jacob</td>
          <td>tonson</td>
          <td>323</td>
          <td>Driverr</td>
          <td>16.28</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default ViewEmployees;