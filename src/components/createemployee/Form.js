import React, { useState, useCallback } from 'react';
import EmployeePage from '../employeepage/EmployeePage';
import CreateEmployeeProfile from './CreateEmployeeProfile';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitForm = useCallback(() => {
    setIsSubmitted(true);
  }, [setIsSubmitted]);

  //   const submitForm = () => {
  //     setIsSubmited(true);
  //   };
  return (
    <div>
      {!isSubmitted ? (
        <CreateEmployeeProfile submitForm={submitForm} />
      ) : (
        <EmployeePage />
      )}
    </div>
  );
};

export default Form;
