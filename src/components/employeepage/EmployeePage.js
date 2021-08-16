import React, { useState, useEffect } from 'react';
import './employeepage.css';
import { employee } from '../employeepage/employeeData';
import paginate from './utils';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import Fade from 'react-reveal/Fade';

const EmployeePage = () => {
  /* paginate the employee data */
  const data = paginate(employee);

  // declare states
  const [page, setPage] = useState(0);
  const [edit, setEdit] = useState('');
  const [person, setPerson] = useState(data);
  const [message, setMessage] = useState('');

  // const [removePerson, setRemovePerson] = useState(employee);

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

  // useEffect(() => {
  //   if (loading) return;
  // }, [loading, page]);

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
  const deleteButton = (id) => {
    console.log(id);
    const newList = data.filter((item) => item.id !== id);
    console.log(newList);
  };
  // employee.map((new)=>{})
  // if(new.id === id){
  //   setMessage('The feature is not available at the moment.');

  //         setTimeout(() => {
  //           setMessage('');
  //         }, 4000);
  //       }
  // })

  // const showButtons = () => {
  //   setShowCards(!showCards);
  //   console.log(showCards);
  //   console.log(1111);
  // };
  // const handleRemove = (itemId) => {
  //   const newPerson = data
  //     .map((list) => (list.id !== itemId ? list : null)
  //     .filter((item) => item.id !== itemId);
  //   console.log(itemId, newPerson, 'itemID');
  //   console.log(data);
  //   console.log(newPerson);
  //   setRemovePerson(newPerson);
  // };
  return (
    <section className="section-page">
      <div>{message}</div>
      <h1>Employees</h1>
      <Fade bottom>
        {/* iterte over the employee data and destrucure the data */}
        {person[page].map((people) => {
          const { id, img, name, job, phonenumber, email } = people;

          return (
            <>
              <div className="container">
                <div style={{ display: 'flex' }}>
                  <div key={people.id} className="employee-image">
                    <img src={img} alt="" />
                  </div>
                  <div className="employee-name">
                    <Link to={`/employeeprofile/${id}`}>
                      <h2>{name}</h2>
                    </Link>
                    <div className="employee-details">
                      <p className="job">{job}</p>
                      <p>{phonenumber}</p>
                      <p>{email}</p>
                    </div>
                  </div>
                </div>

                <div className="btnn-container">
                  <button
                    style={{ marginRight: '10px' }}
                    onClick={(e) => {
                      e.preventDefault();
                      editButton(id);
                    }}
                    className="edit-btn"
                    type="button">
                    <FaEdit />
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      deleteButton(id);
                    }}
                    className="delete-btn"
                    type="button">
                    <FaTrash />
                  </button>
                </div>
              </div>
            </>
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
