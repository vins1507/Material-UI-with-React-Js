import { Container, makeStyles, Typography, Avatar,ImageList,ImageListItem,Link, Divider } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";



const useStyle = makeStyles((theme)=>({
  container: {
    paddingTop:theme.spacing(10)
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color:"#555"
  },
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize:16
    }
    
  }))


const Rightbar = () => {
  const classes = useStyle();
  
  return (
    <Container className={classes.container}>
      <Typography variant="h6" className={classes.title} gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup max={4} style={{marginBottom:20}}> 
      <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
      <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
        
      </AvatarGroup>
      <Typography variant="h6" className={classes.title} gutterBottom>Gallery</Typography>
      <ImageList
  sx={{ width: 500, height: 450 }} style={{marginBottom:20}}
  //variant="quilted"
  cols={2}
  rowHeight={100}
>
  
    <ImageListItem>
      <img
        src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=242&h=242&fit=crop&auto=format" alt=""
      />
        </ImageListItem>
        <ImageListItem>
      <img
        src="https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format" alt=""
      />
        </ImageListItem>
        <ImageListItem>
      <img
        src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format" alt=""
      />
    </ImageListItem>
        <ImageListItem>
      <img
        src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=121&h=121&fit=crop&auto=format" alt=""
      />
        </ImageListItem>
        <ImageListItem>
      <img
        src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=121&h=121&fit=crop&auto=format" alt=""
      />
        </ImageListItem>
        <ImageListItem>
      <img
        src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=242&h=242&fit=crop&auto=format" alt=""
      />
        </ImageListItem>
       

      </ImageList>
      <Typography variant="h6" className={classes.title} gutterBottom>Categories</Typography>
      
      <Link href="#" variant="body2" className={classes.link}>Sports</Link>
      <Link href="#" variant="body2" className={classes.link}>Food</Link>
      <Link href="#" variant="body2" className={classes.link}>Science</Link>
      <Divider flexItem style={{marginBottom:5}}/>
      <Link href="#" variant="body2" className={classes.link}>Movies</Link>
      <Link href="#" variant="body2" className={classes.link}>Music</Link>
      <Link href="#" variant="body2" className={classes.link}>Life</Link>
    </Container>
          
  );
}

export default Rightbar;
