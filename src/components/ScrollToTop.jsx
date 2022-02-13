import React, {useState} from 'react';
import { RiArrowUpSLine } from 'react-icons/ri';
import { Link } from "react-scroll";
import './ScrollToTop.css';


const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
        <Link to = "home" smooth={true} duration={1000}>
          <RiArrowUpSLine className="scrollTop" size="60px"
            style={{display: showScroll ? 'unset' : 'none' }}
          />
	    </Link>
  );
}

export default ScrollArrow;