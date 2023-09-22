import {useState} from 'react';
import { Link } from 'react-router-dom';
import SignUp from './SignUp';

export default function Login() {

    const initialValue = {uname :"", pwd: ""};
    const [logValues,setLogValues] = useState(initialValue);

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(logValues);
    }

    const handleEdit = (e) => {

    }

    return(
        <>
        <form>
            <label>UserName:</label>
            <input type='text' className='userName' id='uname' value={logValues.uname}/>
            <label>Password: </label>
            <input type='text' className='passWord' id="pwd" value={logValues.pwd} />
            <input type="submit" value="Login" onChange={(e) => handleLogin(e)} />
            <button onClick={() => handleClear()}>Cancel</button>

            <p>Don't have an account @<Link to="/signup">SignUp</Link></p>
        </form>
        </>
    )
}
