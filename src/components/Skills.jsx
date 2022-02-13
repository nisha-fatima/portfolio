import React,{ useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Skills.css';
import SkillsRound from './SkillsRound';
import Line from './Line';

export default function Skills() {

    useEffect(() => {
        AOS.init({
          duration : 2000
        });
        AOS.refresh()
    }, []);

    return (
        <div className = "skills" id = "skills">
            <h1 className="skillsHeading">Skills</h1>
            <Line />
            <br />
            <div className="allskills" data-aos="fade-left">
                <SkillsRound />
            </div>
        </div>
    )
}
