import { useContext, useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useContext(AuthContext);
    const [error, setError] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await login(emailRef.current.value, passwordRef.current.value) // returns a promise
            setError(null);
            history.push('/')
        } catch (err) {
            console.log(err.message);
            setError(true)
        }
    }

    return (
        <div className='SignUp'>

            <form onSubmit={handleSubmit}>
                <h1>Log In</h1>
                <label>Email</label>
                    <input type="text" ref={emailRef} required />
                <label>Password</label>
                    <input type="text" ref={passwordRef} required />

                { error && <p className='error'>Incorrect email and/or password!</p> }
                <button type="submit">Log In</button>
                <Link to='/forgot-password'>Forgot Password?</Link>
            </form>
            <p>Don't have an account? <Link to='/signup'>Sign Up.</Link></p>
            
        </div>
    )
}