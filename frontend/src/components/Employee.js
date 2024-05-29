import React from 'react';

function Employee({ employee = {} }) {
  
  const { firstName = '', lastName = '', employeeID = '', position ='', wage ='' } = user;

  return (
    <div>
      firstName: {firstName},
      lastName: {lastName},
      employeeID: {employeeID},
      position: {position},
      wage: {wage},
    </div>
  );
}

export default Employee;