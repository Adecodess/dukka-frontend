import React from 'react';
import CreateEmployeeProfile from '../components/createemployee/CreateEmployeeProfile';

const Home = ({ submitForm }) => {
  return (
    <div>
      <CreateEmployeeProfile submitForm={submitForm} />
    </div>
  );
};

export default Home;
