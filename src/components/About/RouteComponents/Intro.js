import React from 'react'

import '../../../styles/About/Route/Intro.scss'
const Intro = () => {
    return (
        <>
            <div className="about-intro">
                <div className="about-intro__container">
                    <div className="about-intro__header">
                        <h2 className="about-intro__number">0<span>1</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">H<span>ello</span>.</h1>
                    </div>
                    <div className="about-intro__description">
                        <p data-aos='fade-right' >I am <span>Swagato</span></p>
                        <p data-aos='fade-right' data-aos-delay='200'>Student of Computer Science, striving forward to become
                                                                        innovative cybersecurity professional and develop strong
                                                                        background in technology with drive to create positive
                                                                        change.</p>       
                        <p data-aos='fade-right' data-aos-delay='400'>
                                                                        Committed to continuous learning and staying updated with
                                                                        the latest trends in cybersecurity and web development.
                                                                        Gaining experience in automating cyber-security processes
                                                                        with Python and proficient in Linux and SQL. Developing
                                                                        exceptional problem-solving skills and be a collaborative
                                                                        team player. Meticulous attention to detail and dedicated to
                                                                        delivering high-quality results. Seeking opportunities to
                                                                        apply expertise and contribute to the success of a
                                                                        dynamic organization.</p>
                        {/* <p data-aos='fade-right' data-aos-delay='600'>I also have basic understanding of server side development using Node.js, Express.js and MongoDB</p>
                        <p data-aos='fade-right' data-aos-delay='800'>Add few more lines if required...</p> */}

                        <div className="about-intro__emoji">:&nbsp;)</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro