import { useContext, useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const cPasswordRef = useRef();
    const { signup } = useContext(AuthContext);
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault();
        if (passwordRef.current.value !== cPasswordRef.current.value) { //basic validation
            return setError("Passwords do not match");
        }

        try {
            setError(null);
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value) // returns a promise
            history.push('/')
        } catch (err) {
            console.log(err.message);
            setError(true)
        }
        setLoading(false)
    }

    return (
        <div className='SignUp'>
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <label>Email</label>
                    <input type="text" ref={emailRef} required />
                <label>Password</label>
                    <input type="text" ref={passwordRef} required />
                <label>Confirm Password</label>
                    <input type="text" ref={cPasswordRef} required />

                { error && <p>Failed to create an account.</p> }
                <button type="submit" disabled={loading}>Sign Up</button>
            </form>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
        </div>
    )
}