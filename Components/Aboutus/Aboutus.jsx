import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Aboutus.css'
import Navbar from '../Navbar/Navbar';

const AboutUs = () => {
    const titleProps = useSpring({
        from: { opacity: 0, transform: 'translateY(-50px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { duration: 1000 },
    });

    const paragraphProps = useSpring({
        from: { opacity: 0, transform: 'translateY(50px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        delay: 500,
        config: { duration: 1000 },
    });
    
    return (
        <div className='divofabout_class'>
            <animated.p  style={paragraphProps}>
                <div className="app paragrafofabout_class">
                    <header className="app-header center">
                        <h1 className='name_class'>About Us</h1>
                    </header>
                <div className='name_class textabout'>
                    Soft Skill: Adobe Premiere Pro
                </div>
                    <main className="app-main">
                        <section className="team-section center">
                            <p className='name_class'>ㅤㅤㅤㅤㅤMy Nameㅤㅤㅤㅤㅤ</p><span class="fancy">Goswami Karan</span>
                        </section>

                        <section className="team-section center">
                            <p className='name_class'>ㅤㅤㅤMobile Numberㅤㅤㅤ</p><span class="fancy">9904863345</span>
                        </section>

                        <section className="team-section center">
                            <p className='name_class'>ㅤㅤㅤㅤEmail idㅤㅤㅤㅤ</p><span class="fancy">gosaikaran903@gmail.com</span>
                        </section>
                        
                        <section className="team-section center">
                            <p className='name_class'>ㅤㅤㅤㅤㅤㅤLocationㅤㅤㅤㅤㅤㅤ</p><span class="fancy">Hamapur, Bagasara, Amreli, Gujarat</span>
                        </section>

                    </main>
                </div>
            </animated.p>
        </div>
    );
};

export default AboutUs;