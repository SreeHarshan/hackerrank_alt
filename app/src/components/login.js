import React, { useState, } from 'react';
import { useNavigate } from "react-router-dom";

import './login.css';


const LoginPage = ({setusername}) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const login = async () => {
    setIsLoading(true);

    try {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      var link = `http://localhost:3001/login?name=${username}&password=${password}`
      console.log(link);
      const response = await fetch(link, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      if (result["login"]) {
        setusername(username);
        console.log("setting username");
        const data = { username: username };
//        window.location.href = '/';
        navigate("/", { state: data });
      }
      else{
        alert("password is false");
      }

      console.log('result is: ', JSON.stringify(result, null, 4));

    } catch (err) {
      setErr(err.message);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };




  return (
    <div class="container2">
      {err && <h2>{err}</h2>}
      {isLoading && <h2>Loading...</h2>}
      <h1>Login</h1>
      <div class="form">
        <input type="text" placeholder="Username" id="username" />
        <input type="password" placeholder="Password" id="password" />
        <input type="submit" value="Submit" id="submit-btn" onClick={login} />
        <a href="/" class="back">Back</a>
        <a href="/signup" class="signup">New user? Sign up now</a>
      </div>
    </div>
  );
};


export default LoginPage;

