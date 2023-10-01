import React from "react";
import './signUp.css';
import TextField from '@mui/material/TextField';

function SignUp({ creSignup }){
    
    return(
        <div className="SUPContainer">
            <div className="SUPContainer1">
                <div className="X" onClick={creSignup}>X</div>
                <div className="SUPContainer2">

                    <div className="SUPC">
                        create you account
                    </div>
                    <div className="SUPData">
                        <TextField id="outlined-basic" label="Name" variant="outlined" />
                        <TextField id="outlined-basic" label="Email" variant="outlined"  />
                        <TextField id="outlined-basic" label="password" variant="outlined"/>
                        <TextField id="outlined-basic" label="Confirm Password" variant="outlined"/>

                        <div className="SUPdob">Date Of birth</div>
                        <div className="SUPText" id="SUPText">This will not shown publicly.Confirm your age,even if this accounts is for busines,a pet ,or something else</div>
                        <div className="SUPSelect">
                        <TextField id="outlined-basic" label="dd-mm-yyyy" variant="outlined"  fullWidth/>
        
                        </div>

                    </div>
                    <div className="SUPN" >
                        Next
                    </div>
                </div>
            </div>


        </div>
    )
}
export default SignUp