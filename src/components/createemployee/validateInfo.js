export default function validateInfo(values) {
  let errors = {};

  // check if fullname is empty
  if (!values.fullName) {
    errors.fullName = 'Full Name required';
  }

  // check if phonenumber is empty
  if (!values.phoneNumber) {
    errors.phoneNumber = 'Phone Number required';
  }

  // check if email is empty
  if (!values.email) {
    errors.email = 'Email Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  // check if position is empty
  if (!values.position) {
    errors.position = 'Position is Required';
  }

  // check if salary is empty
  if (!values.salary) {
    errors.salary = 'Salary is required';
  }
  return errors;
}
