import Table from "react-bootstrap/Table";
import Employee from "./Employee";

function ViewEmployees(employeeList) {
  let cellNumber = 1;
  const { employees, setEmployees } = employeeList;
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
        {/* <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>453</td>
          <td>Bartender</td>
          <td>16.28</td>
        </tr> */}

        {employees.map((employee) => {
          return (
            <Employee
              cellNum={cellNumber}
              {...cellNumber++}
              employee={employee}
              setEmployees={setEmployees}
              key={employee.employeeID}
            />
          );
        })}
      </tbody>
    </Table>
  );
}

export default ViewEmployees;
