import React, { useState } from'react';
import './index.css';

const Login = () => {
    const [name, setName] = useState('');
    const [pwd, setPwd] = useState('');
 
    const clickHandler = () => {
        alert('Login Successful'+ name + "," + pwd);
    }

    const onChangeNameHandler = (e) => {
        setName(e.target.value);
    }
    const onChangeNameHandler2 = (e) => {
        setPwd(e.target.value);
    };

  return (
    <div className="login">
        <div>usename: <input onChange={onChangeNameHandler} /></div>
        <div>password: <input type="password" value ={pwd} onChange={onChangeNameHandler2} /></div>
        <div><button onClick={clickHandler}>Login</button></div>
    </div>
  );
};

export default Login;
