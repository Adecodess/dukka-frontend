import React, { useState, useEffect, useMemo } from 'react';
import '../employeepage/employeepage.css';
import { employee } from '../employeepage/employeeData';
import paginate from './utils';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import Fade from 'react-reveal/Fade';

const EmployeePage = () => {
  const [employeeData, setEmployeeData] = useState(employee);
  /* paginate the employee data */

  const data = useMemo(() => paginate(employeeData), [employeeData]);

  // declare states
  const [page, setPage] = useState(0);
  const [edit, setEdit] = useState('');
  // const [person, setPerson] = useState(data);
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => setLoading(false), 2000);
    }
  }, [loading]);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  const handlePage = (index) => {
    setPage(index);
  };

  const editButton = (id) => {
    setEdit(id);

    setMessage('The feature is not available at the moment.');

    setTimeout(() => {
      setMessage('');
    }, 4000);
  };

  const handleRemove = (itemId) => {
    setEmployeeData((info) => {
      const newData = info.filter((item) => item.id !== itemId);
      const paginated = paginate(newData);
      if (paginated.length === page) {
        setPage(paginated.length - 1);
      }

      return newData;
    });
  };

  return (
    <section className=" employeeSection">
      <h1>Employees</h1>
      <div className="edit-message">{message}</div>
      <Fade bottom>
        {/* iterte over the employee data and destrucure the data */}
        {(data[page] || [])?.map((people) => {
          const { id, img, name, job, phonenumber, email } = people;

          return (
            <React.Fragment key={id}>
              <section className=" ">
                <section className="employeeDetails">
                  <div key={people.id} className=" employeeImage">
                    <img src={img} alt="" />
                  </div>
                  <div className=" employeeInfo">
                    <Link to={`/employeeprofile/${id}`}>
                      <h2>{name}</h2>
                    </Link>
                    <div className=" employeeContent">
                      <p className="job">{job}</p>
                      <p>{phonenumber}</p>
                      <p>{email}</p>
                    </div>
                  </div>
                  <div className="btnn-container">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        editButton(id);
                      }}
                      className="edit-btn"
                      type="button">
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => {
                        handleRemove(id);
                      }}
                      className="delete-btn"
                      type="button">
                      <FaTrash />
                    </button>
                  </div>
                </section>
              </section>
            </React.Fragment>
          );
        })}
        {!loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={prevPage}>
              prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : null}`}
                  onClick={() => handlePage(index)}>
                  {index + 1}
                </button>
              );
            })}
            <button className="next-btn" onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </Fade>
    </section>
  );
};

export default EmployeePage;
