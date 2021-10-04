import React, { useEffect, useState } from 'react';
import './Course.css';

const Course = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('/items.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div className="card">
            <h2 className="text">Here is our Course Details<br/>Please CheakOut</h2>
            <div className="card-container">

                {
                    courses.map(course => (
                        <div className="finalLook">
                            <img className="img" src={course.img} alt="" />
                            <h2>
                                {course.department}
                            </h2>
                            <h3>{course.subject}</h3>
                            <p>Total Cost:{course.cost}</p>
                            <p>Total Seat:{course.seat}</p>
                            <p>Available seat:{course.available}</p>
                        </div>


                    ))
                }
            </div>


        </div>
    );
};

export default Course;