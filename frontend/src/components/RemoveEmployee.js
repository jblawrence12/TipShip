import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

function RemoveEmployee({ show, handleClose, employeeList }) {
  const { employees, setEmployees } = employeeList;
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    console.log("Employees received in RemoveEmployee:", employees); // Debugging line
  }, [employees]);

  const handleSelect = (employeeID, employeeName) => {
    setSelectedEmployee({ employeeID, employeeName });
  };

  const handleRemove = async () => {
    if (selectedEmployee) {
      try {
        await fetch(`http://localhost:4000/api/employees/${selectedEmployee.employeeID}`, {
          method: 'DELETE',
        });
        setEmployees(employees.filter((emp) => emp.employeeID !== selectedEmployee.employeeID));
        setSelectedEmployee(null);
        handleClose();
      } catch (error) {
        console.error('Error removing employee:', error);
      }
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Remove Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formEmployee">
            <Form.Label>Employee List</Form.Label>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-autoclose-true" className="form-control">
                {selectedEmployee ? selectedEmployee.employeeName : 'Select Employee'}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {employees.map((employee) => (
                  <Dropdown.Item
                    key={employee.employeeID}
                    onClick={() => handleSelect(employee.employeeID, employee.firstName + " " + employee.lastName)}
                  >
                    {employee.firstName + " " + employee.lastName}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
          <Button variant="danger" onClick={handleRemove}>
            Remove Employee
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RemoveEmployee;
