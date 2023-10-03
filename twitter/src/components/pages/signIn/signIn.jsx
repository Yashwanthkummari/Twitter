import React from "react";
import './signIn.css';
import imageTwitter from '../../images/twitter.jpeg'
import imageGoogle from '../../images/google.jpeg'
import imageApple from '../../images/apple.jpeg'
import TextField from '@mui/material/TextField';
import { Link } from "@mui/material";
import { useState } from "react";
import { signin } from "../../services/userServices";
import { useNavigate } from "react-router-dom";


function SignIn({ creSignin }) {
    const navigate = useNavigate()

    const [inputData, setInputdata] = useState({
        email: "",
        password: ""
    })
    
    const handleEmail = (eml) => {
        setInputdata({ ...inputData,email: eml.target.value })
    }
    const handlePassword = (pass) => {
        setInputdata({ ...inputData, password: pass.target.value })
    }
    
    const [errors, setErrors] = useState({
        emailError: false,
        emailHelper: "",
        passwordError: false,
        passworHelper: ""
    })
    const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
    const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;

    const handleSignin = async () => {
        let emailCheck= emailRegex.test(inputData.email)
        let passwordCheck=passwordRegex.test(inputData.password)

        if (emailCheck==false){
            setErrors((prev)=>({
                ...prev,
                emailError:true,
                emailHelper:"enter correct email"

            }))
        }
        else{
            setErrors((prev)=>({
                ...prev,
                emailError:false,
                emailHelper:""
            }))
        }
        if(passwordCheck==false){
            setErrors((prev)=>({
                ...prev,
                passwordError:true,
                passworHelper:"enter correct password"
            }))
        }else{
            setErrors((prev)=>({
                ...prev,
                passwordError:false,
                passworHelper:""
            }))
        }
        console.log(inputData)
        if(emailCheck === true && passwordCheck === true)
        {
           let response  = await  signin(inputData);
           console.log(response);
           localStorage.setItem("token", response.data.data);
           navigate("/drawer")

        }
    }

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
                        <div className="SIPEmail">
                            <TextField id="filled-basic" label="Email" variant="filled" fullWidth  onChange={handleEmail} error={errors.emailError} helperText={errors.emailHelper} />
                            <TextField id="filled-basic" label="Password" variant="filled" fullWidth  onChange={handlePassword} error={errors.passwordError} helperText={errors.passworHelper}/>

                        </div>
                        <div className="SIPnext"  onClick={handleSignin}>
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