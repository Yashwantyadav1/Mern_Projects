import React from "react";
import { TextField ,Button,Typography,Paper} from "@material-ui/core";

import useStyles from './styles';
//const classes=useStyles();

const Form =()=>{
    const classes=useStyles();

const handleSubmit =()=>{

}


    return(
       <Paper className={classes.Paper}>
        <form autoComplete="off" noValidate className={classes.form}  onSubmit={handleSubmit}>
           <Typography variant="h6"> creating a memory</Typography>
           <TextField  name="creator" variant="outlined" />
        </form>

       </Paper>
    );
}

export default Form;
