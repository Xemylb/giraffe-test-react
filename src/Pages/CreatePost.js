import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";
import { Link as RouterLink } from 'react-router-dom';

//custom
import AppHeader from "../Store/containers/Header";

//Helpers
import dateHelper from '../helpers/date'

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
    margin: theme.spacing(3, 0, 2),
    padding: '12px'
  }
});


export default withStyles(useStyles)(
  class postEdit extends Component {
    constructor(props) {
      super(props);
      this.state = {
        author_id: props.user.id,
        author_name: props.user.name,
        title: "",
        description: "",
        date: dateHelper.getDate()
      };
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
      if(!this.state.title || !this.state.description){
          return
      }
      this.props.createPost(this.state)
      this.props.history.push('/')
    }
  render () {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <AppHeader/>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography variant="h4">
            Edit post
          </Typography>
          <form onSubmit={this.handleOnSubmit} className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              onChange={this.handleOnChange}
              value={this.state.title}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              multiline
              name="description"
              label="Description"
              type="text"
              id="description"
              onChange={this.handleOnChange}
              value={this.state.description}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Create
            </Button>
          </form>
        </div>
      </Container>
      </React.Fragment>
      
    );
  }
}
)
