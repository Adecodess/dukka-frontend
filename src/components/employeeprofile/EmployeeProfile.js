import React, { useState, useEffect } from 'react';
import './employeeprofile.css';
import { Link, useParams } from 'react-router-dom';
import { employee } from '../../components/employeepage/employeeData';
import Loading from '../Loading';

const EmployeeProfile = () => {
  const { id } = useParams();

  const { img, name, job, phonenumber, email } = employee.find(
    (person) => person.id === parseInt(id)
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <>
      <section className="section-page">
        <div className="employee-section">
          <div className="employee-image">
            <img src={img} alt="" />
          </div>
          <div className="employee-name">
            <h2>{name}</h2>

            <div className="employee-details">
              <p className="job">{job}</p>
              <p>{phonenumber}</p>
              <p>{email}</p>
            </div>
          </div>
        </div>
      </section>
      <div className="back-home">
        <Link to="/" className="home-btn">
          back home
        </Link>
      </div>
    </>
  );
};

export default EmployeeProfile;
