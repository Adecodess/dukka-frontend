const paginate = (employees) => {
  // set the number of items per page
  const itemsPerPage = 3;

  //round the number up to a whole number
  const pages = Math.ceil(employees.length / itemsPerPage);

  // return new array with the paginated results
  const newEmployees = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return employees.slice(start, start + itemsPerPage);
  });

  return newEmployees;
};

export default paginate;
