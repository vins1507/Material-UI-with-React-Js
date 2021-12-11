import {Card, Button, CardActionArea, CardActions, CardContent, CardMedia, Container, makeStyles, Typography} from "@material-ui/core";


const useStyle = makeStyles((theme)=>({
  
  container: {
      paddingTop:theme.spacing(10)
    },
    media: {
        height: 250,
        [theme.breakpoints.down("sm")]: {
            height:150
        }
    },
    card: {
        marginBottom:theme.spacing(5)
    }
    
  }))


const Post = () => {
  const classes = useStyle();
  return (
      <Card className={classes.card}>
          <CardActionArea>
              <CardMedia className={classes.media}
                  image="https://media.istockphoto.com/photos/lemon-picture-id182389839?b=1&k=20&m=182389839&s=170667a&w=0&h=OlBZF0s_NH8aTmsHf4wg4Abmuh-XkhZbp9XB9Jvd4qs="
                  title="My Post"
              />
              <CardContent>
                  <Typography glutterBottom variant="h5">My First Post</Typography>
                  <Typography variant="body">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Culpa, necessitatibus. Velit quasi vero, similique voluptate
                      tenetur repellendus sapiente officia aliquid, inventore
                      reprehenderit voluptates. Reprehenderit obcaecati nobis
                      commodi rem! Placeat, sed?
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Culpa, necessitatibus. Velit quasi vero, similique voluptate
                      tenetur repellendus sapiente officia aliquid, inventore
                      reprehenderit voluptates. Reprehenderit obcaecati nobis
                      commodi rem! Placeat, sed?
                  </Typography>
              </CardContent>
          </CardActionArea>
          <CardActions>
              <Button size="small" color="primary">Share</Button>
              <Button size="small" color="primary">Learn More</Button>
          </CardActions>
    </Card>
  );
}

export default Post;
