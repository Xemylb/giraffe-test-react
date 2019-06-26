import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";


const useStyles = theme => ({
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
        this.goToPost = this.goToPost.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.isAuthor = this.isAuthor.bind(this);
    }
    goToPost() {
        this.props.history.push('/post/' + this.props.data.id)
    }
    deletePost(id) {
        this.props.deletePost(id)
    }
    isAuthor() {
        if (this.props.data.id === this.props.currentUserID) {
            return <CardActions>
                <Button onClick={this.goToPost} size="small" color="primary">
                    View
        </Button>
                <Button size="small" color="primary">
                    Edit
        </Button>
                <Button size="small" onClick={() => this.deletePost(this.props.data.id)} color="secondary" >
                    Delete
        </Button>
            </CardActions>
        }
    }
    render() {
        const { classes } = this.props;
        const { data } = this.props;
        const Actions = this.isAuthor();
        return (
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title={data.title}
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {data.title}
                    </Typography>
                    <Typography>
                        {data.description}
                    </Typography>
                </CardContent>
                {Actions}
            </Card>
        )
    }
}

export default withStyles(useStyles)(PostCard);