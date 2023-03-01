import React, {useState} from "react"
import "./login.css"
import "../assets/css/style.default.css"

import axios from "axios"
import { useHistory } from "react-router-dom"

const Login = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
        })
    }

    return (
        // <div className="login">
        //     <h1>Login</h1>
        //     <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
        //     <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
        //     <div className="button" onClick={login}>Login</div>
        //     <div>or</div>
        //     <div className="button" onClick={() => history.push("/register")}>Register</div>
        // </div>

    <div className="login-page">
      <div className="container d-flex align-items-center position-relative py-5">
        <div className="card shadow-sm w-100 rounded overflow-hidden bg-none">
          <div className="card-body p-0">
            <div className="row gx-0 align-items-stretch">
              {/* Logo & Information Panel */}
              <div className="col-lg-6">
                <div className="info d-flex justify-content-center flex-column p-4 h-100">
                  <div className="py-5">
                    <h1 className="display-6 fw-bold">Dashboard</h1>
                    <p className="fw-light mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              {/* Form Panel */}
              <div className="col-lg-6 bg-white">
                <div className="d-flex align-items-center px-4 px-lg-5 h-100">
                  <form
                    className="login-form py-5 w-100"
                    method="get"
                    action="index.html"
                  >
                    <div className="input-material-group mb-3">
                      <input
                        className="input-material"
                        id="login-username"
                        type="text"
                        name="loginUsername"
                        autoComplete="off"
                        required
                        data-validate-field="loginUsername"
                      />
                      <label className="label-material" htmlFor="login-username">
                        User Name
                      </label>
                    </div>
                    <div className="input-material-group mb-4">
                      <input
                        className="input-material"
                        id="login-password"
                        type="password"
                        name="loginPassword"
                        required
                        data-validate-field="loginPassword"
                      />
                      <label className="label-material" htmlFor="login-password">
                        Password
                      </label>
                    </div>
                    <button className="btn btn-primary mb-3" id="login" type="submit">
                      Login
                    </button>
                    <br />
                    <a className="text-sm text-paleBlue" href="#">
                      Forgot Password?
                    </a>
                    <br />
                    <small className="text-gray-500">Do not have an account? </small>
                    <a className="text-sm text-paleBlue" href="register.html">
                      Signup
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center position-absolute bottom-0 start-0 w-100 z-index-20">
        <p className="text-white">
          Design by{' '}
          <a className="external" href="https://bootstrapious.com/p/admin-template">
            Bootstrapious
          </a>
          {/* Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)*/}
        </p>
      </div>
    </div>
  );
}
    

export default Login