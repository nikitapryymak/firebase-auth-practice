import { useContext } from "react"
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext"

export default function LogOut() {
    const {logout} = useContext(AuthContext);
    const history = useHistory();

    async function handleLogout() {
        try {
            await logout();
            history.push('/login')
        } catch (err) {
            console.log(err.message);
        }
    }

    return <h3 onClick={handleLogout}>LogOut</h3>
}