import React, { useEffect, useState } from "react";

function Employee(user) {
  console.log("User", user);
  const { cellNum, employee, setEmployee } = user;

  return (
    <tr>
      <td>{cellNum}</td>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.employeeID}</td>
      <td>{employee.position}</td>
      <td>{employee.wage}</td>
      <td>{employee.tipOutOverride}</td>
    </tr>
  );
}

export default Employee;
