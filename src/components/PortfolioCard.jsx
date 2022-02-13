import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import eCommerce from '../assets/images/eCommerce.PNG';
import trvl from '../assets/images/trvl.PNG';
import dorsin from '../assets/images/dorsin.PNG';
import covid from '../assets/images/covid.PNG';

const data = [
  {
    title: "E-Commerce",
    image: eCommerce,
    details: "Using: React, Redux, Stripe",
    visit: "https://commerce-js.netlify.app/"
  },
  {
    title: "TRVL",
    image: trvl,
    details: "Using: React",
    visit: "https://trvlnish.surge.sh/"
  },
  {
    title: "DORSIN",
    image: dorsin,
    details: "Using: React, HTML5, CSS",
    visit: "https://dorsin1250.surge.sh/"
  },
  {
    title: "COVID",
    image: covid,
    details: "Using: React",
    visit: "https://covid-19-tracker-fbhm45hn9.vercel.app/"
  },
]


const useStyles = makeStyles({
  
  root: {
    marginTop: "6%",
    transition: "transform 1s",
    "- webkit - transition": "transform 1s",
    "-moz-transition": "transform 1s",
    "-ms-transition": "transform 1s",
    width: 280,
    height: 320,
    border: "4px solid #9989ff",
    backgroundColor: "#f0f0f0",
    '&:hover': {
      border: "4px solid #998900",
      transform: "scale(1.1)"
    },
  },
  media: {
    height: 180,
    width: "100%",
    transition: "all 1s ease",
    "- webkit - transition": "all 1s ease",
    "-moz-transition": "all 1s ease",
    "-ms-transition": "all 1s ease",
    objectFit: "contain",
  },
  link: {
    '&:hover': {
      color: "#EF7C8E"
    },
  },
  links: {
    textDecoration: "none",
  },
});

export default function PortfolioCard() {
  const classes = useStyles();
  return (
  <>

  {data.map ((data, index)=> {
    return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.image}
          title={data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6" color="#ffffff">
            <b>{data.title}</b>
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            <b>{data.details}</b>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={data.visit} target="_blank" rel="noreferrer" className={classes.links} >
        <Button color="primary">
            <b className={classes.link}>Visit {data.title}</b>
        </Button>
        </a>
      </CardActions>
        </Card>
  )
  })
      }
  </>
  )
 
}

