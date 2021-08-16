import { useState, useEffect, useCallback } from 'react';

const useForm = (callback, validate) => {
  const [person, setPerson] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    position: '',
    salary: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(person));

    setIsSubmitting(true);
    // setPerson({
    //   fullName: '',
    //   phoneNumber: '',
    //   email: '',
    //   position: '',
    //   salary: '',
    // });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, person, handleSubmit, errors, validate };
};

export default useForm;
