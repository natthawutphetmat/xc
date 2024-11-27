"use client"

import React, { useState } from 'react';

export default function page() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleSubmit= async (e) => {
        e.preventDefault();

       if(username === 'admin') {
        if(password === '1122'){

            localStorage.setItem('users', 'ok');
            window.location='/admin';

        } else {
            setError('กรุณาใส่ข้อมูลที่ถูกต้อง')
           }




       } else {
        setError('กรุณาใส่ข้อมูลที่ถูกต้อง')
       }
    

    }

  return (
    <>

    <div className="container">
  
    <div>
         <form onSubmit={handleSubmit} className="upload-form">
            {error}
    <h1>login</h1>
    <div className="form-group">
        <label htmlFor="title">username</label>
        <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
        />
    </div>

    <div className="form-group">
        <label htmlFor="content">password</label>
        <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        /> 
    </div>
   
    <button type="submit" className="submit-btn">Submit</button>
</form>

        
        </div>


    </div>
      
    </>
  )
}
