import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import './sign-up.css'
import validator from 'validator'

const Signup = () => {
    let navigate = useNavigate()
    const [signupData, setSignupData] = useState({ email: "", password: "", confirmpassword: "" })
    const handleSignup = () => {
        if (signupData.password === signupData.confirmpassword && signupData.password.length > 0 && signupData.email.length > 0 && (validator.isEmail(signupData.email))) {
            axios({
                url: "https://server-nvci.onrender.com/register",
                method: "POST",
                data: signupData,
            }).then((res) => {
                alert(res.data)
                navigate("/")
            }).catch((err) => {
                alert(err.response.data)
            })
        } else {
            if (signupData.email.length === 0) {
                alert("email cannot be empty");
            } else if (!validator.isEmail(signupData.email)) {
                alert("email is not valid")
            }
            else if (signupData.password.length === 0) {
                alert("password cannot be empty")
            }
            else {
                alert("password and confirm password should be same")
            }
        }
    }
    const navisignin = () => {
        navigate("/")
    }
    return (
        <div className="signupcontainer">
            <div className="box">
                <h1 className="logo">Logo</h1>
                <p className="para">Create New Account</p>
                <div id="email">
                    <input className="signup-input" type="email" required placeholder="Email ID" onChange={(e) => { setSignupData({ ...signupData, email: e.target.value }) }} />
                </div>
                <div id="password">
                    <input className="signup-input" type="password" required placeholder="Password" id="password" onChange={(e) => { setSignupData({ ...signupData, password: e.target.value }) }} />
                </div>
                <div id="confirmpassword">
                    <input className="signup-input" type="password" required placeholder=" Confirm password" id=" confirm password" onChange={(e) => { setSignupData({ ...signupData, confirmpassword: e.target.value }) }} />
                </div>
                <button className="sign" onClick={() => { handleSignup() }}>Sign Up</button>
            </div>
            <p className="foot" onClick={navisignin}>Sign-in</p>
        </div>
    )
}

export default Signup