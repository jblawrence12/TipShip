import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

function AddEmployee({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmployeeID">
            <Form.Label>Employee ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="ID"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPosition">
            <Form.Label>Position</Form.Label>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-autoclose-true" className="form-control">
                Select Position
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Manager</Dropdown.Item>
                <Dropdown.Item href="#">Bartender</Dropdown.Item>
                <Dropdown.Item href="#">Server</Dropdown.Item>
                <Dropdown.Item href="#">Busser</Dropdown.Item>
                <Dropdown.Item href="#">Driver</Dropdown.Item>
                <Dropdown.Item href="#">Cook</Dropdown.Item>
                <Dropdown.Item href="#">Washer</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formWage">
            <Form.Label>Wage</Form.Label>
            <Form.Control
              type="text"
              placeholder="Wage"
              autoFocus
            />
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

export default AddEmployee;
