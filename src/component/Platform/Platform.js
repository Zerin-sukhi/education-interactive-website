import React from 'react';
import './Platform.css';

const Platform = () => {
    return (
        <div>
            <div className="platform">
                <div>
                    <h2>Online Course</h2>
                    <p>
                        This is Online platform.Here you can complete your course virtually.
                    </p>
                    <p>
                        Opportunities For Online Course:
                        <ul>
                            <li>
                                For job holder person
                            </li>
                            <li>
                                For those student who are not interested to stay in dhaka.
                            </li>
                            <li>
                                For those people who are not available money but wants to complete their graduation.
                            </li>
                            <li>
                                For those people who are not dependable.
                            </li>
                        </ul>
                    </p>
                </div>
                <div>
                    <h2>Offline Course</h2>
                    <p>
                        This is Offline platform.Here you can complete your course phisically.
                    </p>
                    <p>
                        Opportunities For Offline Course:
                        <ul>
                            <li>
                                For Regular students.
                            </li>
                            <li>
                                For those student who are interested to stay in dhaka with reasonable cost.
                            </li>
                            <li>
                                For those people who are dependable.
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
            <div>
                <div className="reg">
                    <div className="text-center mt-5">
                        <h1>You can join for online courses to fillup this form</h1>
                        <p>Please fill this form to register</p>
                    </div>
                    <div className="form">
                        <input text="" placeholder="email"></input><br/>
                        <input text="" placeholder="name"></input><br/>
                        <input text="" placeholder="phone"></input><br/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Platform;