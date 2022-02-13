import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Particles from 'react-particles-js';
import { RiArrowDownSLine } from 'react-icons/ri';
import { Link } from "react-scroll";
import './Tittle.css';

export default function Tittle() {

	useEffect(() => {
        AOS.init({
          duration : 200
        });
        AOS.refresh()
    }, []);

    return (
		<div className="tittleContainer" id="home" data-aos="fade">
			<h1 className="tittle">
				<span className = "hi">
					Hi, I am&nbsp;
				</span>
				Nisha Fatima
			</h1>
			<p className="tittleDes">I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more &amp; more interactive with web animations.</p>
			<Link to = "contact" smooth={true} duration={1000}  >
				<span className="tittleButton">GET STARTED</span>
			</Link>
			<Link to = "about" smooth={true} duration={1000}>
				<RiArrowDownSLine className="scrollDown" size="60px" />
			</Link>
			<Particles
				style={{ backgroundColor: "#000012" }}
				height = '100vh'

			    params={{
				    "particles": {
				        "number": {
				            "value": 160,
				            "density": {
				                "enable": false
				            }
				        },
				        "size": {
				            "value": 9,
				            "random": true
				        },
				        "move": {
				            "direction": "no",
							"out_mode": "bounce",
							"speed": "2"
							
				        },
				        "line_linked": {
				            "enable": false
						},
					},
					"interactivity":{
					"events": {
						"onClick": {
							"enable": true,
							"mode" : "push"
						}
						}
					}
				}}
			/>			
		</div>
    )
}
