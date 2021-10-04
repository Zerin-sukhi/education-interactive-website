import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/item.JSON')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    return (
        <div className="card">
            <h2 className="join">We are providing some departments.You Can Join Us</h2>
            <div className="item">

                {
                    items.map(item => (
                        <div className="homeItem">
                            <img className="img" src={item.img} alt="" />
                            <p>{item.category} university</p>
                            <h2>
                                {item.department}
                            </h2>
                            <h3>{item.subject}</h3>
                            <p>Total Cost:{item.cost}</p>
                            <p>Total Seat:{item.seat}</p>
                            <p>Available seat:{item.available}</p>
                        </div>


                    ))
                }
            </div>


        </div>
    );
};

export default Home;