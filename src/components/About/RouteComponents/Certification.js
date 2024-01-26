//College Graduation
//Not Working

// src/components/About/RouteComponents/Certifications.js
import React from 'react';
import Certification from './Certification'; // Import the Certification component
import '../../../styles/About/Route/Certifications.scss'; // Import the corresponding SCSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

const Certification = () => {
    return (
        <>
            <div className="certification">
                <div className="certification__container">
                    <div className="certification__header">
                        <h2 className="certification__number">0<span>3</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">E<span>ngineering</span>.</h1>
                    </div>

                    <div className="certification__description">
                        <h1>Vellore Institute of Technology</h1>
                        <h2><FontAwesomeIcon icon={faCalendarDays} className="internships__calendar" />&nbsp;&nbsp;13/09/2021 - Present</h2>
                        <p>
                        <li data-aos='fade-right' data-aos-delay='200'>
                                        <span>Pursuing B.Tech in Computer Science Engineering </span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='400'>
                                        <span>CGPA - 8.42</span>
                                    </li>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Certifications;
