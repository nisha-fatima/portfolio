import React from 'react';
import './Contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { HiOutlinePhone } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

export default function ContactDetails() {
    return (
        <div className="contactDetails">
            <h2 className="emailphoneHead">
                <HiOutlineMail size="30px" />
                Email
            </h2>
            <a
                className="emailphoneLink"
                href="mailto:miladrazabhatti@gmail.com"
                target="_blank"
                rel="noopener noreferrer">
                nishhfatima@gmail.com
            </a>
            <br />
            <br />
            <h2 className="emailphoneHead">
                <HiOutlinePhone size="30px" />
                Phone
            </h2>
            <a
                className="emailphoneLink"
                href="tel:+923249280500"
                target="_blank"
                rel="noreferrer">
                +923249280500
            </a>
            <br />
            <br />
            <div className="social">
                <a href="https://www.facebook.com/profile.php?id=100025941521934"
                    rel="noreferrer" target="_blank" >
                    <FaFacebook size = "26px" />
                </a>
                <a href="https://www.instagram.com/nishistiic._/"
                    rel="" target="_blank" >
                    <FaInstagram size = "26px"/>
                </a>
                <a href="http://wa.me/923249280500/"
                    rel="noreferrer" target="_blank" >
                    <FaWhatsapp size = "26px" />
                </a>
                <a href="http://github.com/nisha-fatima/"
                    rel="noreferrer" target="_blank" >
                    <FaGithub size="26px" />
                </a>
                <a href="https://www.linkedin.com/in/nisha-fatima-7a122b20b/"
                    rel="noreferrer" target="_blank" >
                    <FaLinkedin size = "26px" />
                </a>
            </div>
        </div>
    )
}
