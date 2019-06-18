import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import AppHeader from "../Components/header";
import AppFooter from "../Components/footer";
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
    }
    goToPost(){
        this.props.history.push('/post/' + this.props.data.id)
    }
    render() {
        const {classes} = this.props;
        const {data} = this.props;
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
            <CardActions>
                <Button onClick={this.goToPost} size="small" color="primary">
                    View
                </Button>
                <Button size="small" color="primary">
                    Edit
                </Button>
            </CardActions>
        </Card>
        )
    }
}

export default withStyles(useStyles)(PostCard);