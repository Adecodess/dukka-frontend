import React, { useState, useEffect } from 'react';
import './employeeprofile.css';
import { Link, useParams } from 'react-router-dom';
import { employee } from '../../components/employeepage/employeeData';
import Loading from '../Loading';
import { FcCalendar } from 'react-icons/fc';

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
      <main className="employee-profilee">
        <section className="employee-profilePage">
          <div className="employee-profileImg">
            <img src={img} alt="" />
          </div>
          <div className="employee-profileInfo">
            <h2 className="employee-profile">{name}</h2>
            <div className=" employee-profileDetails">
              <p className="job">{job}</p>
              <p>{phonenumber}</p>
              <p>{email}</p>
            </div>
          </div>
        </section>
      </main>
      <aside className="employee-records">
        <h4>loan record</h4>
        <article className="employee-record">
          <div className="employee-calendar">
            <FcCalendar className="icon" />
            Feb
          </div>
          <div className="details">
            <p>borrowed : &#8358;50,000</p>
            <p>receivable : &#8358;100,000</p>
          </div>
        </article>
        <article className="employee-record">
          <div className="employee-calendar">
            <FcCalendar className="icon" />
            jan
          </div>
          <div className="details">
            <p>borrowed: &#8358;50,000</p>
            <p>receivable: &#8358;100,000</p>
          </div>
        </article>
        <article className="employee-record">
          <div className="employee-calendar">
            <FcCalendar className="icon" />
            dec
          </div>
          <div className="details">
            <p>borrowed : &#8358;50,000</p>
            <p>receivable : &#8358;100,000</p>
          </div>
        </article>
        2019
        {/* <div className="employee-calendar">
          <FcCalendar />
          jan
        </div>
        <p>borrowed : 50,000</p>
        <p>receivable : 100,000</p>
        <div className="employee-calendar">
          <FcCalendar />
          dec
        </div>
        2019
        <p>borrowed : 50,000</p>
        <p>receivable : 100,000</p> */}
      </aside>

      <div className="back-home">
        <Link to="/" className="home-btn">
          back home
        </Link>
      </div>
    </>
  );
};

export default EmployeeProfile;
