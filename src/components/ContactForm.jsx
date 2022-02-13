import React, {useState} from 'react';
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { database } from '../config/firebase';
import CircularProgress from '@material-ui/core/CircularProgress';
import { MdSend } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsCheckAll } from 'react-icons/bs';
import { BiError } from 'react-icons/bi';

const useStyles = makeStyles((theme) => ({
  root: {
        '& label': {
              color: 'lightgrey',
            },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
                borderWidth: '2px',
            },
            '&:hover fieldset': {
            borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#6b9cd5'
            }
        },
        // marginBottom: "8vh",
    },
     margin: {
        marginTop: 30,
        display: 'block'
    },
    input: {
        color: 'white',
        width: '32ch',
    },
}));


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6b9cd5'
    },
    secondary: {
      main: '#b8b8c7'
    },
  },
});

export default function ContactForm() {
  
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [sending, setSending] = useState(false)
  
  const emailValidation = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;

  const nameValidation = /^(?!(.*(([^a-zA-Z\s])|(\.{2,})|('{2,}|\{2,}))))/;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (name === '' || name === " " || email === '' || email === " " || message === '' || message === " ") {
      errornotify()
    }

    else{

      if (nameValidation.test(name) === false) {
        errorname()
      }

      else {
        if (emailValidation.test(email) === false) {
          erroremail()
        }
        
        else{
        setSending(true)

        database.collection('Portfolio Messages').add({
          name:name,
          email:email,
          message: message,
        })
        .then(()=>{
          notify()

          setName("")
          setEmail("")
          setMessage("")

          setSending(false)
        })
        .catch((error) => {
          alert(error.message)

          setSending(false)
        })}
      }
    }
    
  }

  const notify = () =>
        toast.success((<span style={{display: "flex", alignItems: "center"}}><BsCheckAll size="22" />&nbsp;Message Received!</span>), {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
  });

  const errornotify = () =>
        toast.error((<span style={{display: "flex", alignItems: "center"}}><BiError size="22" />&nbsp;All Fields Required!</span>), {
        position: "bottom-left", 
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
  });  

  const erroremail = () =>
        toast.error((<span style={{display: "flex", alignItems: "center"}}><BiError size="22" />&nbsp;Please Enter Valid Email!</span>), {
        position: "bottom-left", 
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
  }); 
  
  const errorname = () =>
        toast.error((<span style={{display: "flex", alignItems: "center"}}><BiError size="22" />&nbsp;Please Enter Valid Name!</span>), {
        position: "bottom-left", 
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
  }); 

  return (
    <form className={classes.root} noValidate onSubmit={handleSubmit}>
      <ThemeProvider theme={theme}>
        <TextField
          className={classes.margin}
          label="Name"
          type="text"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
          InputProps={{ className: classes.input }}
          onChange={(e) => setName(e.target.value)}
          value = {name}
        />
        <TextField
          className={classes.margin}
          type="email"
          label="Email"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
          InputProps={{ className: classes.input }}
          onChange={(e) => setEmail(e.target.value)}
          value = {email}
        />
        <TextField
          className={classes.margin}
          id="outlined-textarea"
          label="Message"
          multiline
          rows={5}
          variant="outlined"
          InputProps={{ className: classes.input }}
          onChange={(e) => setMessage(e.target.value)}
          value = {message}
        />
      
      <Button
        type = "submit"
        variant="contained"
        color={sending ? "secondary" : "primary"}
        className={classes.margin}
        style={{width: "90px", height: "40px", color: "#ffffff", fontWeight: "bold",}}  
      >
          {sending ? <CircularProgress size="30px" /> :
            <span style = {{display:"flex" ,alignItems:"center",}}>
              send 
              <MdSend />
            </span>}  
        </Button>
      </ThemeProvider>

      <div style={{marginTop: "110px", fontWeight: "bold",}}>
        <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            style={{width: "260px",}}
        />
      </div>
        
     
    </form>
  );
}
