import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";

function AddEmployee({ show, handleClose, setEmployees }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [employeeID, setEmployeeID] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState("");

  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  function handleSubmit(event) {
    event.preventDefault();
    const employee = {
      firstName,
      lastName,
      employeeID,
      position,
      wage,
    };
    postData("http://localhost:4000/api/employee", employee).then(() => {
      setEmployees((currentEmployees) => [...currentEmployees, employee]);
    });
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              autoFocus
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              autoFocus
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmployeeID">
            <Form.Label>Employee ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="ID"
              autoFocus
              onChange={(e) => {
                setEmployeeID(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPosition">
            <Form.Label>Position</Form.Label>
            <Dropdown onSelect={(e) => setPosition(e)}>
              <Dropdown.Toggle variant="light" id="dropdown-autoclose-true" className="form-control">
                {position || 'Select Position'}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Manager">Manager</Dropdown.Item>
                <Dropdown.Item eventKey="Bartender">Bartender</Dropdown.Item>
                <Dropdown.Item eventKey="Server">Server</Dropdown.Item>
                <Dropdown.Item eventKey="Busser">Busser</Dropdown.Item>
                <Dropdown.Item eventKey="Driver">Driver</Dropdown.Item>
                <Dropdown.Item eventKey="Cook">Cook</Dropdown.Item>
                <Dropdown.Item eventKey="Washer">Washer</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formWage">
            <Form.Label>Wage</Form.Label>
            <Form.Control
              type="text"
              placeholder="Wage"
              autoFocus
              onChange={(e) => {
                setWage(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Add Employee
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" type="submit" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddEmployee;
