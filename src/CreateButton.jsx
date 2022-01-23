import React from "react";
import Button from '@mui/material/Button';
import ShuffleIcon from '@mui/icons-material/Shuffle';



function CreateButton(props){

    return(
        <div className="buttonDiv">
            <Button onClick={props.click} size="large" color="error" variant="outlined">New Meme</Button>
        </div>
    )
}

export default CreateButton;