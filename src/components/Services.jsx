import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Services.css';
import ServicesCard from './ServicesCard';
import Line from './Line';

export default function Services() {

    useEffect(() => {
        AOS.init({
          duration : 2000
        });
        AOS.refresh()
    }, []);
    
    return (
        <div className = "services" id = "services" data-aos-duration="3000">
            <h1 className="servicesHeading">Services</h1>
            <Line />
            <div className="allservices" data-aos="zoom-in">
                <ServicesCard />
            </div>
        </div>
    )
}
