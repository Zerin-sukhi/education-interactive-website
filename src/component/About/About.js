import React from 'react';
import { Button } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div>
            <h2 className="welcome">Welcome to Green University of Bangladesh (GUB)</h2>
            <div className="pera">
                <div className="row">
                    <div className="col-md-7 mt-5">
                        <h3>Here</h3>
                        <p>Green University of Bangladesh (GUB), one of the leading private universities in Bangladesh, was founded in 2003 under the Private University Act 1992 with a vision to create a global higher education center of excellence. GUB offers students from all walks of life the advantages of an affordable, personalized education of global standard. As a modern, dynamic, and innovative institution for undergraduate and graduate students, GUB lays stress on quality education imparted by a galaxy of highly qualified, dynamic, dedicated, and well-experienced faculty members with global exposure.</p>
                        <p>
                            GUB’s greatest resource in fulfilling its mission is its faculty of about 300 distinguished scholars and educators, whose scholarly research experiences and teaching skills enrich the students’ classroom environment. To ensure quality education, GUB is equipped with modern infrastructural facilities, latest academic curricula, Internet with Wi-Fi facility, air-conditioned classrooms, and seminar halls supported with multi-media, rich libraries, most sophisticated laboratories, students’ cafeterias, standby generators, etc. The students of GUB experience a vibrant university community with a diverse range of academic offerings and about 6,500 participating students.
                        </p>
                        <Button variant="outline-secondary">See More</Button>

                    </div>
                    <div className="notice">
                        <div>
                        <h2>
                            Notices
                        </h2>
                        <hr/>
                        <ul>
                            <li>
                                registration form
                            </li>
                            <li>
                                Notice
                            </li>
                            <li>
                                research
                            </li>
                        </ul>
                        </div>
                        <div>
                        <h2>
                            Events
                        </h2>
                        <hr/>
                        <ul>
                            <li>
                                GUCC
                            </li>
                            <li>
                                IEEE
                            </li>
                        </ul>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;