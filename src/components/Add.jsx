import {
  Fab, makeStyles, Tooltip, Modal, TextField,
  MenuItem, FormControlLabel, Radio, RadioGroup,
  FormLabel,
  Button,Snackbar
} from "@material-ui/core";
import { useState } from "react";

import { Add as AddIcon } from "@material-ui/icons"
import MuiAlert from '@material-ui/lab/Alert';




const useStyle = makeStyles((theme)=>({
  
  fab: {
    position: "fixed",
    bottom: 20,
    right:20
  },
  container: {
    width: 500,
    height: 550,
    position: "absolute",
    top: 0,
    bottom: 0,
    margin: "auto",
    right: 0,
    left: 0,
    backgroundColor: "white",
    
    [theme.breakpoints.down("sm")]: {
      height:"100vh",
      width: "100vh"
    }
    
  },
  form: {
     padding:theme.spacing(2)
  },
  item: {
    
    marginBottom:theme.spacing(3)
  }
    
  }))

  function Alert(props) {
    return <MuiAlert elevation={6}  variant="filled" {...props} />;
  };
const Add = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const [openAlert,setOpenAlert]=useState(false)
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };
  return (
      <>
          <Tooltip title="Add" aria-label="add" onClick={()=>setOpen(true)}>
              <Fab color="primary" className={classes.fab}>
                  <AddIcon/>
              </Fab>
      </Tooltip>
      
      <Modal open={open}>
        <container className={classes.container}>
          <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <TextField id="standard-basic" label="Title" size="small" variant="standard"
                style={{ width: "100%" }} />
            </div>
            <div className={classes.item}>
              <TextField  label="Description" size="small" 
                style={{ width: "100%" }}
                id="outlined-multiline-static"
                variant="outlined"
                multiline
                rows={4}
                defaultValue="Tell your story..."/>
            </div>

            <div className={classes.item}>
              <TextField select label="Visibility" value="Public">
                <MenuItem value="public">Public</MenuItem>
                <MenuItem value="private">Private</MenuItem>
                <MenuItem value="unlisted">Unlisted</MenuItem>
              </TextField>
            </div>
            <div className={classes.item}>
            <FormLabel component="legend">Who can comment?</FormLabel>
    <RadioGroup>
                <FormControlLabel
                  value="everybody"
                  control={<Radio size="small"/>}
                  label="everybody"
                />
                
                <FormControlLabel
                  value="My Friends"
                  control={<Radio size="small"/>}
                  label="My Friends"
                  />
                
    <FormControlLabel
      value="Nobody"
      control={<Radio size="small" />}
                  label="Nobody"
                  
                />
      <FormControlLabel
      value="Custome"
      disabled
      control={<Radio size="small" />}
                  label="Custom(premium)"
                  
    />
  </RadioGroup>
            </div>
            <div className={classes.item}>
              <Button variant="outlined" color="primary" style={{marginRight:20, marginLeft:5}} onClick={()=>setOpenAlert(true)}>Create</Button>
              <Button variant="outlined" color="secondary" onClick={()=>setOpen(false)}>Cancel</Button>

            </div>
</form>
        </container>
        
      </Modal>
      <Snackbar open={openAlert} autoHideDuration={4000} onClose={handleClose}
        anchorOrigin={{ vertical: "bottom",horizontal:"left" }}>
  <Alert onClose={handleClose} severity="success">
    This is a success message!
  </Alert>
</Snackbar>
    </>
      
      
  );
}

export default Add;
