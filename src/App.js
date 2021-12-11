import {Grid, makeStyles} from "@material-ui/core";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar"
import Navbar from "./components/Navbar";
import Add from "./components/Add"


const useStyle = makeStyles((theme)=>({
  
  right: {
    [theme.breakpoints.down]: {
        display:"none"
      }
    }
    
  }))


const App = () => {
  const classes = useStyle();
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2} >
          <Leftbar/>
        </Grid>
        <Grid item sm={7} xs={10} >
          <Feed/>
        </Grid>
         <Grid item sm={3} className={classes.right}> 
          <Rightbar/>
        </Grid> 
      </Grid>
      <Add/>
    </div>
  );
}

export default App;
