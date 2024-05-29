import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

function RemoveEmployee({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Remove Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formPosition">
            <Form.Label>EmployeeList</Form.Label>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-autoclose-true" className="form-control">
                Employees
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Employe1</Dropdown.Item>
                <Dropdown.Item href="#">Employe2</Dropdown.Item>
             
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" onClick={handleClose}>Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RemoveEmployee;
