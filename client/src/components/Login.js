import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialValue = {
  username: "",
  password: "",
};

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [ credentials, setCredentials ] = useState(initialValue);
  const [ error, setError ] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/login", credentials)
      .then((res) => {
        console.log(res);
        console.log(res.data.payload);
        localStorage.setItem('token', res.data.payload);
        
      })
      .catch((err) => {
        console.error(err);
        setError(err.response.data.error);
      });
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={handleSubmit}>
        <label>Username 
          <input
            type='text'
            name='username'
            value={credentials.username}
            onChange={handleChange}
          />
        </label>
        <label>Password
          <input
            type='password'
            name='password'
            value={credentials.password}
            onChange={handleChange}
          />
        </label>
        <button>submit</button>
      </form>
    </>
  );
};

export default Login;
