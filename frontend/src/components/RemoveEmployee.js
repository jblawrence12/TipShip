import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Employee from './Employee';

function RemoveEmployee({ show, handleClose, employeeList }) {
  const { employees, setEmployees } = employeeList;
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    console.log("Employees received in RemoveEmployee:", employees); // Debugging line
  }, [employees]);

  const handleSelect = (employeeID) => {
    setSelectedEmployee({ employeeID });
  };

  const handleRemove = async () => {
    if (selectedEmployee) {
      try {
        const response = await fetch(`http://localhost:4000/api/employee/${selectedEmployee.employeeID}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          setEmployees(employees.filter((emp) => emp.employeeID !== selectedEmployee.employeeID));
          setSelectedEmployee(null);
          handleClose();
        } else {
          const data = await response.json();
          console.error('Error removing employee:', data.message);
        }
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
                {selectedEmployee ? selectedEmployee.employeeID : 'Select Employee'}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {employees.map((employee) => (
                  <Dropdown.Item
                    key={employee.employeeID}
                    onClick={() => handleSelect(employee.employeeID)}
                  >
                    {employee.firstName + " " + employee.lastName + " " + employee.employeeID}
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
