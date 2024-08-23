import React, { useState } from "react";
import { Container, Navbar, Nav, NavDropdown, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddEmployee from "./AddEmployee";
import RemoveEmployee from "./RemoveEmployee";
import ViewEmployees from "./ViewEmployees";
import Payroll from "./Payroll";

function SetNav({ employees, setEmployees }) {
  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);
  const [showRemoveEmployeeModal, setShowRemoveEmployeeModal] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [showPayrollForm, setShowPayrollForm] = useState(false);

  const toggleTable = () => setShowTable(!showTable);

  const handleShowPayrollForm = () => setShowPayrollForm(true);
  const handleClosePayrollForm = () => setShowPayrollForm(false);

  const handleShowAddEmployee = () => setShowAddEmployeeModal(true);
  const handleCloseAddEmployee = () => setShowAddEmployeeModal(false);

  const handleShowRemoveEmployee = () => setShowRemoveEmployeeModal(true);
  const handleCloseRemoveEmployee = () => setShowRemoveEmployeeModal(false);

  return (
    <div className="SetNav">
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">TipShip</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Current Pay Period</Nav.Link>
              <Nav.Link href="#link" onClick={handleShowPayrollForm} >Payroll </Nav.Link>
              <Nav.Link href="#link">Deposits</Nav.Link>
              <NavDropdown title="Manage Employees" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="#" onClick={handleShowAddEmployee}>
                  Add Employee
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#" onClick={handleShowRemoveEmployee}>
                  Remove Employee
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#" onClick={toggleTable}>
                  View Employee
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Set Tip Out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Modals */}
      <AddEmployee
        setEmployees={setEmployees}
        show={showAddEmployeeModal}
        handleClose={handleCloseAddEmployee}
      />
      <RemoveEmployee
        show={showRemoveEmployeeModal}
        handleClose={handleCloseRemoveEmployee}
        employeeList={{ employees, setEmployees }}
      />
      {/* ViewEmployees Table */}
      {showTable && (
        <ViewEmployees employees={employees} setEmployees={setEmployees} />
      )}
      {/*Forms*/}
      <Payroll
        employeeList={{ employees, setEmployees }}
        show={showPayrollForm}
        handleClose={handleClosePayrollForm}
      />
    </div>
  );
}

export default SetNav;

