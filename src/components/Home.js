import { useContext } from "react"
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext"
import LogOut from "./LogOut";

export default function Home() {

    const { currentUser } = useContext(AuthContext);

    return (
        <div className='Home'>
            <div className="content">

                <h1>Profile</h1>
                <p><strong>email:</strong>{currentUser?.email}</p>
                <Link to='/forgot-password'><button>Change Password</button></Link>
                <LogOut />

            </div>
        </div>
    )
}