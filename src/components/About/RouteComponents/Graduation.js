//College Graduation    

import React from 'react'


import '../../../styles/About/Route/Graduation.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const Graduation = () => {
    return (
        <>
            <div className="graduation">
                <div className="graduation__container">
                    <div className="graduation__header">
                        <h2 className="graduation__number">0<span>3</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">E<span>ngineering</span>.</h1>
                    </div>

                    <div className="graduation__description">
                        <h1>Vellore Institute of Technology</h1>
                        <h2><FontAwesomeIcon icon={faCalendarDays} className="internships__calendar" />&nbsp;&nbsp;13/09/2021 - Present</h2>
                        <p><li data-aos='fade-right' data-aos-delay='200'>
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

export default Graduation