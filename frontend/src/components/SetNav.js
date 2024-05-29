import React, { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddEmployee from './AddEmployee';  // Import the AddEmployee component
import RemoveEmployee from './RemoveEmployee';  // Ensure this component is imported if it's being used
import ViewEmployees from './ViewEmployees';


function SetNav() {
  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);
  const [showRemoveEmployeeModal, setShowRemoveEmployeeModal] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const toggleTable = () => setShowTable(!showTable);

  const handleShowAddEmployee = () => setShowAddEmployeeModal(true);
  const handleCloseAddEmployee = () => setShowAddEmployeeModal(false);

  const handleShowRemoveEmployee = () => setShowRemoveEmployeeModal(true);
  const handleCloseRemoveEmployee = () => setShowRemoveEmployeeModal(false);

  return (
    <div className="SetNav">
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">Portofino</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Current Pay Period</Nav.Link>
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
                <NavDropdown.Item href="#action/3.4">Set Tip Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Modals */}
      <AddEmployee show={showAddEmployeeModal} handleClose={handleCloseAddEmployee} />
      <RemoveEmployee show={showRemoveEmployeeModal} handleClose={handleCloseRemoveEmployee} />
      {/* ViewEmployees Table */}
      {showTable && <ViewEmployees />}
    </div>
  );
}

export default SetNav;
