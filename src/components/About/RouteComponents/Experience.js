//Certifications


import React from 'react'

import '../../../styles/About/Route/Experience.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const Experience = () => {
    return (
        <>
            <div className="experience">
                <div className="experience__container">
                    <div className="experience__header">
                        <h2 className="experience__number">0<span>4</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">C<span>ertifications</span>.</h1>
                    </div>
                    <div className="experience__description">
                        <div className="experience__main-box">
                        <div className="experience__box">
                                <h2>Certified Ethical Hacker(CEH v12)</h2>
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;12/2023</h3>
                                <ul>
                                    <p>Learnt -</p>
                                    <li data-aos='fade-right' data-aos-delay='200'>
                                        <span>Conducted ethical hacking assessments, 
                                            identifying vulnerabilities in target 
                                            systems. </span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='400'>
                                        <span>Executed penetration tests using 
                                            industry-standard methodologies to 
                                            assess network and application security, 
                                            simulating real-world cyberattacks.</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='600'>
                                        <span>Contributed to risk assessments, 
                                            developing and implementing strategies 
                                            to mitigate potential cybersecurity threats.</span>
                                    </li>
                                    {/* <li data-aos='fade-right' data-aos-delay='800'>
                                        <span>Add few more lines...</span>
                                    </li> */}
                                </ul>
                            </div>

                            <div className="experience__box">
                                <h2>Google Cybersecurity Professional Certificate - Google</h2>
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;06/2023 - 09/2023</h3>
                                <ul>
                                    <p>Learnt -</p>
                                    <li data-aos='fade-right' data-aos-delay='200'>
                                        <span>Understand the roles and responsibilities
                                        of cyber security to develop frameworks
                                        for controls and protection of business
                                        operations</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='400'>
                                        <span>Gained an understanding of Network
                                            Level vulnerabilities</span>
                                    </li>
                                    {/* <li data-aos='fade-right' data-aos-delay='600'>
                                        <span>Building reusable code</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='800'>
                                        <span>Add few more lines...</span>
                                    </li> */}
                                </ul>
                            </div>

                            {/* You can put this repeated code as a child component similar to internship.js  */}
                            <div className="experience__box">
                                <h2>Career Essentials In Generative AI</h2>
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;09/2023</h3>
                                <ul>
                                    <p>Learnt -</p>
                                    <li data-aos='fade-right' data-aos-delay='200' data-aos-offset="-5000">
                                        <span>Developing and understanding of generative AI models along with its ethical and impact on people.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="experience__box">
                                <h2>Crash Course on Python - Google</h2>
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;01/2023</h3>
                                <ul>
                                    <p>Learnt -</p>
                                    <li data-aos='fade-right' data-aos-delay='200' data-aos-offset="-5000">
                                        <span>Mastering the basic foundation of Python Programming.</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='400' data-aos-offset="-5000">
                                        <span>Acquire concepts through hands on experiences, to provide complex problem solutions.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="experience__box">
                                <h2>The Fundamentals of Digital Marketing - Google</h2>
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;03/2023</h3>
                                <ul>
                                    <p>Learnt -</p>
                                    <li data-aos='fade-right' data-aos-delay='200' data-aos-offset="-5000">
                                        <span>Developing and understanding of generative AI models along with its ethical and impact on people. </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="experience__box">
                                <h2>Mastercard Virtual Experience Program on Forage</h2>
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;10/2023</h3>
                                <ul>
                                    <p>Learnt -</p>
                                    <li data-aos='fade-right' data-aos-delay='200' data-aos-offset="-5000">
                                        <span>Completed practical tasks in design and proper interpretation of phishing email simulation. </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="experience__box">
                                <h2>AIG Virtual Experience Program on Forage</h2>
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;10/2023</h3>
                                <ul>
                                    <p>Learnt -</p>
                                    <li data-aos='fade-right' data-aos-delay='200' data-aos-offset="-5000">
                                        <span>Completed practical tasks in responding to a zero day vulnerability and also to bypass a ransomware</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="experience__box">
                                <h2>Explore ML with Crowdsource</h2>
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;10/2022</h3>
                                <ul>
                                    <p>Learnt -</p>
                                    <li data-aos='fade-right' data-aos-delay='200' data-aos-offset="-5000">
                                        <span>Discovered the foundation of crowdsource by Google</span>
                                    </li>
                                </ul>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience