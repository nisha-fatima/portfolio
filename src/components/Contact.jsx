import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';
import Line from './Line';
import ContactForm from './ContactForm';
import ContactDetails from './ContactDetails';

export default function Contact() {

    useEffect(() => {
        AOS.init({
          duration : 2000
        });
        AOS.refresh()
    }, []);

    return (
        <div className="contact" id="contact">
            <h1 className="contactHeading">Contact Me</h1>
            <Line />
            <div className="wholeWrap">
                <div data-aos="fade-right">
                    <ContactForm />
                </div> 
                <div data-aos="fade-left">
                    <ContactDetails />
                </div>    
            </div>
        </div>
    )
}
