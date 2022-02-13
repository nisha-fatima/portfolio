import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Portfolio.css';
import Line from './Line';
import PortfolioCard from './PortfolioCard'

export default function Portfolio() {

    useEffect(() => {
        AOS.init({
          duration : 2000
        });
    }, []);

    return (
        <div className="portfolio" id="portfolio">
            <h1 className="portfolioHeading">Portfolio</h1>
            <Line />
            <div className="allporfolio" data-aos="zoom-in" >
                <PortfolioCard />
            </div>
        </div>
    )
}
