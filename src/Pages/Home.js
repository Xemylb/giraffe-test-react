import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import  { withRouter } from 'react-router-dom'
//custom components
import AppHeader from "../Components/header";
import AppFooter from "../Components/footer";
import PostCard from "../Components/post-card";
const CustomCard = withRouter(({post, history}) => (
    <PostCard data={post} history={history}>

    </PostCard>
));
const useStyles = makeStyles(theme => ({
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
}));

const cards = [
    {
        id: '1',
        title: 'Heading 1',
        description: 'This is a media card. You can use this section to describe the content.'
    },
    {
        id: '2',
        title: 'Heading 2',
        description: 'This is a media card. You can use this section to describe the content.'
    },
    {
        id: '3',
        title: 'Heading 3',
        description: 'This is a media card. You can use this section to describe the content.'
    },
    {
        id: '4',
        title: 'Heading 4',
        description: 'This is a media card. You can use this section to describe the content.'
    },
    {
        id: '5',
        title: 'Heading 5',
        description: 'This is a media card. You can use this section to describe the content.'
    },
    {
        id: '6',
        title: 'Heading 6',
        description: 'This is a media card. You can use this section to describe the content.'
    },
];

export default function Album() {
    const classes = useStyles();

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
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map(card => (
                            <Grid item key={card.id} xs={12} sm={6} md={4}>
                                <CustomCard post={card}></CustomCard>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <AppFooter/>
        </React.Fragment>
    );
}
