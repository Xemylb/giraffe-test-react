import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AppHeader from "../Store/containers/Header";
import AppFooter from "../Components/footer";
const useStyles = theme => ({
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

class PostCard extends Component {
    constructor(props) {
        super(props);
    }
    getPost(id, postsList){
            let post = {};
            postsList.find((item)=>{
                if(item.id === Number(id)){
                    post = item
                }
            })
            return post;
    }
    render() {
        console.log(this.props)
        const {classes} = this.props;
        const post = this.getPost(this.props.match.params.id,this.props.redux.Posts);
        return (
            <div>
                <AppHeader></AppHeader>
                <Container className={classes.cardGrid} maxWidth="lg">
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image="https://source.unsplash.com/random"
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {post.title}
                            </Typography>
                            <Typography>
                                {post.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                Edit
                            </Button>
                        </CardActions>
                    </Card>
                </Container>
                <AppFooter></AppFooter>
            </div>
        )
    }
}

export default withStyles(useStyles)(PostCard);