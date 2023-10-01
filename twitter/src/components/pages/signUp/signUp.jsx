import React, { useState } from "react";
import './signUp.css';
import TextField from '@mui/material/TextField';
import { Link } from "@mui/material";

function SignUp({ creSignup }) {
    const [userData, setuserdata] = useState({
        Name: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
        DateOfBirth: ""
    })
    console.log(userData)
    const name = (nam) => {
        setuserdata({ ...userData, Name: nam.target.value })
    }
    const email = (emal) => {
        setuserdata({ ...userData, Email: emal.target.value })
    }
    const password = (pass) => {
        setuserdata({ ...userData, Password: pass.target.value })
    }
    const conpass = (cpass) => {
        setuserdata({ ...userData, ConfirmPassword: cpass.target.value })
    }
    const dob = (DOB) => {
        setuserdata({ ...userData, DateOfBirth: DOB.target.Value })
    }
    const [error, setError] = useState({
        nameError: false,
        nameHelper: "",
        emailError: false,
        emailHelper: "",
        passwordError: false,
        passwordHelper: "",
        conPasshelper: false,
        conpasshelper: "",
        dobError: false,
        dobHelper: ""
    })
    const nameRegex = /^[a-zA-Z ]{2,30}$/;
    const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
    const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;
    const dateOfbirthregex = /^ [0-9]{2}-[0-9]{2}-[0-9]{4}$/;



    const signup = () => {
        let nameCheck = nameRegex.test(userData.Name)
        let emailcheck = emailRegex.test(userData.Email)
        let passwordCheck = passwordRegex.test(userData.Password)
        let dateOfbirthcheck = dateOfbirthregex.test(userData.DateOfBirth)

        if (nameCheck == false) {
            setError((prev) => ({
                ...prev,
                nameError: true,
                nameHelper: "enter correct name"
            }))
        } else {
            setError((prev) => ({
                ...prev,
                nameError: false,
                nameHelper: ""
            }))
        }

        if (emailcheck == false) {
            setError((prev) => ({
                ...prev,
                emailError: true,
                emailHelper: "enter correct email"
            }))

        } else {
            setError((prev) => ({
                ...prev,
                emailError: false,
                emailHelper: ""
            }))
        }

        if (passwordCheck == false) {
            setError((prev) => ({
                ...prev,
                passwordError: true,
                passwordHelper: "enter correct password"

            }))

        } else {
            setError((prev) => ({
                ...prev,
                passwordError: false,
                passwordHelper: ""

            }))
        }

        if (dateOfbirthcheck == false) {
            setError((prev) => ({
                ...prev,
                dobError: true,
                dobHelper: "enter correct date of birth"
            }))
        } else {
            setError((prev) => ({
                ...prev,
                dobError: "false",
                dobHelper: ""
            }))
        }
        

    }


    return (
        <div className="SUPContainer">
            <div className="SUPContainer1">
                <div className="X" onClick={creSignup}>X</div>
                <div className="SUPContainer2">

                    <div className="SUPC">
                        create you account
                    </div>
                    <div className="SUPData">
                        <TextField id="outlined-basic" label="Name" variant="outlined" onChange={name} error={error.nameError} helperText={error.nameHelper} />
                        <TextField id="outlined-basic" label="Email" variant="outlined" onChange={email} error={error.emailError} helperText={error.emailHelper} />
                        <TextField id="outlined-basic" label="password" variant="outlined" onChange={password} error={error.passwordError} helperText={error.passwordHelper} />
                        <TextField id="outlined-basic" label="Confirm Password" variant="outlined" onChange={conpass} />

                        <div className="SUPdob">Date Of birth</div>
                        <div className="SUPText" id="SUPText">This will not shown publicly.Confirm your age,even if this accounts is for busines,a pet ,or something else</div>
                        <div className="SUPSelect">
                            <TextField id="outlined-basic" label="dd-mm-yyyy" variant="outlined" fullWidth onChange={dob} error={error.dobError} helperText={error.dobHelper} />

                        </div>

                    </div>
                    <div className="SUPN" onClick={signup}>
                        Next
                    </div>
                </div>
            </div>


        </div>
    )
}
export default SignUp