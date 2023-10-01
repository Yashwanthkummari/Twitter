import React, { useState } from "react";
import './mainPage.css';
import twitterimage from '../../images/twitter.jpeg'
import googleImage from '../../images/google.jpeg'
import appleImage from '../../images/apple.jpeg'
import SignIn from "../signIn/signIn";
import SignUp from "../signUp/signUp";

function MainPage(){

    const [account, setAccount] = useState(false)

    const createAccount = () => {
        setAccount(!account) 
    }

    const [crsignin , setSignin] = useState(false)

    const createSignin = () => {
        setSignin(!crsignin)
    }
    return(
        <div className="MPContainer">
            <div className="MPContainer1">
                <img id="image" src={twitterimage} alt="twitterimage" />
            </div>
            <div className="MPContainer2">
                <div className="MPText">
                    <div className="happening">HappeningNow</div>
                    <div className="join">Join today.</div>
                </div>
                <div className="MPData">

                    <div className="MPData1"><button id="MPgoogle" ><img src={googleImage} alt="googleImage" /> Sign up with google</button></div>
                    <div className="MPData1"><button id="MPApple"> <img src={appleImage} alt="appleImage" />Sign up with Apple</button></div>
                    <div className="MPOR"><hr />or <hr /></div>
                    <div className="MPData1"><button id="MPCrtAcc" onClick={createAccount}>Create Account</button></div>
                    <div className="MPData2">By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</div>
                </div>
                <div className="MPsignin">
                    <div className="MPal">Already have an Accont?</div>
                    <div className="MPData3"><button id="MPSignin" onClick={createSignin} >Sign in</button></div>
                </div>


            </div>
            <div className="MPAccount">{account ? <SignUp creSignup={createAccount} /> : ""}</div>
            <div className="MPAccount">{crsignin ? <SignIn creSignin={createSignin} /> : ""}</div>
        </div>
    )
}
export default MainPage