import React from 'react'
import './CSS/Signup.css'
import { useState } from 'react'

const Signup = () => {
    const [state, setState] = useState("Login")

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    })

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    const login = async () => {
        console.log("login fucntion", formData);
        let responseData;
        await fetch('https://aura-ecommerce-server.vercel.app/login', {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response) => response.json()).then((data) => responseData = data)

        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace("/");
        }
        else {
            alert(responseData.errors)
        }
    }

    const signup = async () => {
        console.log("sign up function", formData);
        let responseData;
        await fetch('https://aura-ecommerce-server.vercel.app/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response) => response.json()).then((data) => responseData = data)

        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace("/");
        }
        else {
            alert(responseData.errors)
        }
    }

    return (
        <div className="signup">
            <div className="signup-container">
                <h1>{state}</h1>
                <div className="signup-field">
                    {state === "Login" ? <></> : <input name='name' value={formData.name}
                        onChange={changeHandler} type="text" placeholder="First Name" />}

                    <input name='email' value={formData.email}
                        onChange={changeHandler} type="email" placeholder="Email" />

                    <input name='password' value={formData.password}
                        onChange={changeHandler} type="password" placeholder="Password" />
                </div>
                <button onClick={() => { state === "Login" ? login() : signup() }}>{state}</button>

                {state === "Login" ? <p>Are you a new user?
                    <span className="signup-span" onClick={() => { setState("Sign Up") }}> Sign Up</span></p>
                    : <div>Already have an account?
                        <span className="signup-span" onClick={() => { setState("Login") }}> Login</span>
                        <p>By signing up, I recognize that this website is for demonstration purposes only</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Signup