import React, { useState } from "react";

import styled from "styled-components";


export const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleLogin = () =>
  {
    if(email === "" || password === "")
      {
        alert("Please fill in all fields");

        }
        else
        {
          alert("Login Successful");
          }
          }
            
  return (
    <DIV>
      <h2>Log In</h2>
      <input data-testid="user-email" type="email" placeholder="Email" value={email}  />
      <input
        data-testid="user-password"
        type="password"
        placeholder="Password"
        value={password}
      />
      <button data-testid="user-login" onClick={()=>handleLogin} >Log In</button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;

  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }

  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;
