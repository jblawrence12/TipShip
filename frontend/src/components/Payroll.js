import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Employee from "./Employee";

function Payroll({employeeList, show, handleClose }) {
  const { employees, setEmployees } = employeeList;
    if (!show) {
      return null; 
    }
    
  return (
    <div className='payrollForm'>
    <h2 id='title'>Payroll Information</h2>
    {employees.map((employee, index) => (
      <Row key={employee.id} className="mb-3">
        <Col xs="auto">
          <Form.Group as={Col} controlId={`hoursWorked-${employee.id}`}>
            <Form.Label>Hours for {employee.firstName} {employee.lastName}</Form.Label>
            <Form.Control type="number" placeholder="Hours" />
          </Form.Group>
        </Col>
        <Col xs="auto">
          <Form.Group as={Col} controlId={`tipAmount-${employee.id}`}>
            <Form.Label>Tips for {employee.firstName} {employee.lastName}</Form.Label>
            <Form.Control type="number" placeholder="Tips" />
          </Form.Group>
        </Col>
      </Row>
    ))}
    <Button variant="primary" type="submit" onClick ={handleClose}>
      Submit
    </Button>
    <Button variant="primary" type="submit" onClick ={handleClose}>
      Close
    </Button>
  </div>
  );
}
export default Payroll;