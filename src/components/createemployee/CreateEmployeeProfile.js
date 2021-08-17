import React, { useEffect, useState } from 'react';
import './createemployeeprofile.css';
import validate from './validateInfo';
import Loading from '../Loading';
import useForm from './useForm';

const CreateEmployeeProfile = ({ submitForm }) => {
  const { handleChange, person, handleSubmit, errors } = useForm(
    submitForm,
    validate
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
    <section className="section-center">
      <form className="form" onSubmit={handleSubmit}>
        <h3>create employee profile </h3>
        <label htmlFor="fullName" className="form-label">
          Full Name*
        </label>
        <div className="form-control">
          <input
            type="text"
            id="fullName"
            className="form-inputs"
            placeholder="full name"
            name="fullName"
            value={person.fullName || ''}
            onChange={handleChange}
          />
        </div>
        {errors.fullName && <p>{errors.fullName}</p>}
        <label htmlFor="phoneNumber" className="form-label">
          Phone Number*
        </label>
        <div className="form-control">
          <input
            id="phoneNumber"
            type="tel"
            className="form-inputs"
            placeholder="phone number"
            name="phoneNumber"
            value={person.phoneNumber || ''}
            onChange={handleChange}
          />
        </div>
        {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
        <label htmlFor="email" className="form-label">
          Email*
        </label>
        <div className="form-control">
          <input
            id="email"
            type="email"
            className="form-inputs"
            placeholder="email"
            name="email"
            value={person.email || ''}
            onChange={handleChange}
          />
        </div>
        <label htmlFor="position" className="form-label">
          {errors.email && <p>{errors.email}</p>}
          Position*
        </label>
        <div className="form-control">
          <input
            id="position"
            type="text"
            className="form-inputs"
            placeholder="position"
            name="position"
            value={person.position || ''}
            onChange={handleChange}
            required={true}
          />
        </div>
        {errors.position && <p>{errors.position}</p>}
        <label htmlFor="salary" className="form-label">
          Salary*
        </label>
        <div className="form-control">
          <input
            id="salary"
            type="number"
            className="form-inputs"
            placeholder="salary"
            name="salary"
            value={person.salary || ''}
            onChange={handleChange}
          />
        </div>
        {errors.salary && <p>{errors.salary}</p>}
      </form>
      <button onClick={handleSubmit} type="submit" className="submit-btn">
        save
      </button>
    </section>
  );
};

export default CreateEmployeeProfile;
