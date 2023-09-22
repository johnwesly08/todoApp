import {useState} from 'react';
import { Link } from 'react-router-dom';
import SignUp from './SignUp';

export default function Login() {

    const initialValue = {uname :"", pwd: ""};
    const [logValues,setLogValues] = useState(initialValue);
    const login = false;

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(logValues);
        lo
    }



    const handleEdit = (e) => {
            e.preventDefault();
            setLogValues({...logValues, [e.target.id]: e.target.value})
    }

    const handleClear = () => {
        setUserDetails(initialState);
    }

    return(
        <>
        <form>
            <label>UserName:</label>
            <input type='text' className='userName' id='uname' value={logValues.uname} onChange={(e)=> handleEdit(e)}/>
            <label>Password: </label>
            <input type='text' className='passWord' id="pwd" value={logValues.pwd} onChange={(e)=> handleEdit(e)}/>
            <input type="submit" value="Login" onClick={(e) => handleLogin(e)} />
            <button onClick={() => handleClear()}>Cancel</button>
            <p>Don't have an account @<Link to="/signup">SignUp</Link></p>
        </form>
        </>
    )
}
