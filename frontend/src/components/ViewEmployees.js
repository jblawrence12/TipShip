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
          <th>Tip Override</th>
        </tr>
      </thead>
      <tbody>
        

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
