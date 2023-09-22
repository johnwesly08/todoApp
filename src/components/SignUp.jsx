import React, { useState } from "react";

export default function SignUp() {
    const initialState = {uname: "",gmail: "",pwd: "",cpwd: ""};
    const [userDetails, setUserDetails] = useState(initialState);


    
    const handleSignUp = (e) => {
        e.preventDefault();
        console.log(userDetails);
    }
    const handleEdit = (e) => {
        e.preventDefault();
        setUserDetails({...userDetails, [e.target.id]: e.target.value})
    }

    const handleClear = () => {
        setUserDetails(initialState);
    }
    return (
        <>
            <form>
                <label htmlFor="uname"> UserName:</label>
                <input type='text' className='unameS' id="uname" value={userDetails.uname} onChange={(e)=> handleEdit(e)} />
                <label>Email id:</label>
                <input type="email" name="Gmail" id="gmail" value={userDetails.gmail} onChange={(e)=> handleEdit(e)}/>
                <label htmlFor="pwd">Password:</label>
                <input type='text' className='pwdS' id="pwd" value={userDetails.pwd} onChange={(e)=> handleEdit(e)} />
                <label htmlFor="cpwd">Confirm Password:</label>
                <input type='text' className='cpwdS' id="cpwd" value={userDetails.cpwd} onChange={(e)=> handleEdit(e)} />
                <input type="submit" value="Signup" onClick={(e) => handleSignUp(e)} />
                <button onClick={() => handleClear()}>Clear</button>
            </form>
        </>
    );
};
