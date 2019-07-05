import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import  { withRouter } from 'react-router-dom'

//custom components
import AppHeader from "../Components/header";
import AppFooter from "../Components/footer";
import PostCard from "../Store/containers/Post-card";

import dateHelper from '../helpers/date';

const CustomCard = withRouter(({post, currentUserID, history}) => (
    <PostCard data={post} currentUserID={currentUserID} history={history}>

    </PostCard>
));

const useStyles = theme => ({
    icon: {
        marginRight: theme.spacing(2)
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    heroButtons: {
        marginTop: theme.spacing(4)
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8)
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    cardMedia: {
        paddingTop: "56.25%" // 16:9
    },
    cardContent: {
        flexGrow: 1
    }
});

export default withStyles(useStyles)(
    class PostsList extends Component {
        constructor(props) {
            super(props);  
            
            this.state = {
                post: {
                    author_id: 1,
                    author_name: "Admin 2",
                    description: "Description 3",
                    title: "Title 4",
                    date: dateHelper.getDate()
                }
            };
            this.addPost = this.addPost.bind(this);
            this.routePush = this.routePush.bind(this);
        }
        addPost(){
            this.props.createPost(this.state.post);
        }
        routePush(path){
            this.props.history.push(path)
        }
        render() {
            const { classes } = this.props;
            const { Posts } = this.props.home;
            const { currentUser } = this.props.home.Users;
            const { history } = this.props.history;
            return (
                <React.Fragment>
                    <CssBaseline/>
                    <AppHeader/>
                    <main>
                        {/* Hero unit */}

                        <div className={classes.heroContent}>
                            <Container maxWidth="sm">
                                <Typography
                                    component="h1"
                                    variant="h2"
                                    align="center"
                                    color="textPrimary"
                                    gutterBottom
                                >
                                    Album layout
                                </Typography>
                                <Typography
                                    variant="h5"
                                    align="center"
                                    color="textSecondary"
                                    paragraph
                                >
                                    Something short and leading about the collection below—its
                                    contents, the creator, etc. Make it short and sweet, but not too
                                    short so folks don&apos;t simply skip over it entirely.
                                </Typography>
                                <Button fullWidth onClick={() => this.routePush('/create')} variant="contained" className={classes.button}>
                                    Create post
                                </Button>
                            </Container>
                        </div>
                        <Container className={classes.cardGrid} maxWidth="md">
                            {/* End hero unit */}
                            <Grid container spacing={4}>
                                {Posts.map((card,index) => (
                                    <Grid item key={card.id} xs={12} sm={6} md={4}>
                                        <CustomCard post={card} currentUserID={currentUser.id} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </main>
                    <AppFooter/>
                </React.Fragment>
            );
        }


    }
)

