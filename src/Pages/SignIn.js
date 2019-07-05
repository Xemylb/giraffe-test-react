import React, {Component} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});


export default withStyles(useStyles)(
  class SignIn extends Component {
    constructor(props) {
      super(props);
      this.state  ={
        email: '',
        password: '',
      }
      this.handleOnChange = this.handleOnChange.bind(this);
      this.handleOnSubmit = this.handleOnSubmit.bind(this); 
    }
    handleOnChange(event){
      this.setState({
        [event.target.id]: event.target.value
      })
    }
    handleOnSubmit(event){
      event.preventDefault()
      const formEmail = this.state.email;
      const formPassword = this.state.password;

      if(!this.state.email.trim() || !this.state.password.trim()){
          alert('Email or Password are empty;')
          return
      }

      this.props.users.find((user)=>{
          if(user.email === formEmail  && user.password === formPassword){
              this.props.setUser(user);
              this.props.history.push('/')
          } else if(user.email === formEmail && user.password !== formPassword){
            alert('Password is not valid');
          }else{
            alert('This email does not exist');
          }
      })

    }
    render() {
      const { classes } = this.props;
      return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form onSubmit={this.handleOnSubmit} className={classes.form} noValidate>
              <TextField
                value={this.state.email}
                onChange= {this.handleOnChange}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                value={this.state.password}
                onChange= {this.handleOnChange}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <RouterLink to="/sign-up">{"Don't have an account? Sign Up"}</RouterLink>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      );
    }})

