import React from "react";
import './signIn.css';
import imageTwitter from '../../images/twitter.jpeg'
import imageGoogle from '../../images/google.jpeg'
import imageApple from '../../images/apple.jpeg'
import TextField from '@mui/material/TextField';
import { Link } from "@mui/material";


function SignIn({ creSignin }) {
    return (
        <div className="SIPContainer">
            <div className="SIPContainer1">
                <div className="SIPContainer2">
                    <div className="sX" onClick={creSignin}>X</div>
                    <img id="twitter" src={imageTwitter} alt="twitterImage" />
                </div>
                <div className="SIPContainer3">
                    <div className="SIPX">Sign in to X</div>
                    <div className="SIPData">
                        <div className="SIPGoggle">
                            <div className="SIPimgg"><img src={imageGoogle} alt="googleImage" /></div>
                            <div className="SIPT">Sign in with Google</div>
                        </div>
                        <div className="SIPGoggle">
                            <div className="SIPimgg"><img src={imageApple} alt="appleImage" /></div>
                            <div className="SIPT">Sign in with Apple</div>
                        </div>
                        <div className="SIPOR">
                            <span className="SIPhr"><hr /></span><span className="SIPor1">or</span><span className="SIPhr"> <hr /></span>
                        </div>
                        <div className="SIPphemun">
                            <TextField id="filled-basic" label="Email" variant="filled" fullWidth />
                            <TextField id="filled-basic" label="Password" variant="filled" fullWidth />

                        </div>
                        <div className="SIPnext" >
                            <div className="SIPn" >Next/SignIn</div>
                        </div>
                        <div className="SIPfpass">
                            <div className="SIPn"> <Link id="SIPfpass"> forgetpassword?</Link></div>
                        </div>
                    </div>
                    <div className="SIPSinup">
                        Don't have An Account?   <a id="SIPSignup" href="SignUp" >Signup</a>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default SignIn