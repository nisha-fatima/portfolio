import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import Line from './Line';

export default function About() {

    useEffect(() => {
        AOS.init({
          duration : 2000
        });
        AOS.refresh()
    }, []);

    var dob = new Date("05/25/2001");
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff); 
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);

    return (
        <div className = "about" id = "about">
            <h1 className="aboutme">About Me</h1>
            <Line />
            <div className="allinfo1">
            <div className="allinfo" data-aos="fade-up-right">
                <h1 className="name">
                <span className="nameiam">I am </span> Nisha Fatima</h1><br />
                <p>I am a frontend web developer. I hava more than 6 month of experience in the field of Website Designing. If you are looking for awesome Front End website at affordable price, then look no further.</p><br />
                <p><b>Full Name</b> : Nisha Fatima</p>
                <p><b>Age</b> : {age} Years</p>
                <p><b>Nationality</b> : Pakistani</p>
                <p><b>City</b> : Karachi</p>
                <p><b>Freelance</b> : Available</p>
            </div>
            </div>
        </div>
    )
}
