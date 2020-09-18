import React, { useState } from "react";

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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axiosWithAuth()
  //     .post("http://localhost:5000/api/login", credentials)
  //     .then((res) => {
  //       console.log(res);
  //       localStorage.setItem('token', res.data.payload);
        
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       setError(err.response.data.error);
  //     });
  // };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form>
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
      </form>
    </>
  );
};

export default Login;
