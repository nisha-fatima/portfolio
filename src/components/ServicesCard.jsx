import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { RiPencilRulerLine } from 'react-icons/ri';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { FaMobileAlt } from 'react-icons/fa';

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    minHeight: 230,
    marginTop: "6%",
    backgroundColor: "#000200",
    border: "2px groove #9989ff",
    transition: "transform 1s",
    "- webkit - transition": "transform 1s",
    "-moz-transition": "transform 1s",
    "-ms-transition": "transform 1s",
    cursor: "pointer",
    '&:hover': {
      border: "2px groove #998900",
      transform: "scale(1.1)"
    },
  },
  title: {
    color: "#ffffff",
    fontFamily: "LeagueSpartan",
  },
  data: {
    color: "#b8b8c7",
    maxWidth: 250,
    fontFamily: "LeagueSpartan",
    fontSize: "16px",
  },
  hr: {
    width: "20%",
    borderRadius: "10%"
  },
});

const logo1 = <RiPencilRulerLine size="40" color = "yellow" /> 
const logo2 = <RiCodeSSlashLine size="40" color = "red" />
const logo3 = <FaMobileAlt size="40" color = "lightgreen" /> 

const data = [
  {
    title: "PSD To HTML",
    data: "I Will Convert Your PS, AI, XD, PDF, Sketch, Figma, Zeplin & Invision Design Into Responsive Website.",
    logo: logo1,
  },
  {
    title: "Web Development",
    data: "I Will Do Complete Front-End Web Development Using ReactJs & ReduxJs.",
    logo: logo2,
  },
  {
    title: "Mobile Application",
    data: "I Will Do Mobile Application Development Using ReactNative.",
    logo: logo3,
  }
]

export default function ServicesCard() {
  const classes = useStyles();

  return (
<>
    {
      data.map ((data, index)=> {
        return(
            <Card className={classes.root} variant="outlined">
      <CardContent>
          {data.logo}
          <br />
        <Typography className={classes.title} gutterBottom variant="h6" component="h2">
          {data.title}
        </Typography>
        <hr className={classes.hr} />
        <br />
        <Typography className={classes.data} variant="body2" component="p">
          {data.data}
        </Typography>
      </CardContent>
    </Card>
        )
      })
    }
</>
    
  );
}
