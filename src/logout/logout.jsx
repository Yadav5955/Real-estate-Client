import { useNavigate } from "react-router-dom"
import "./logout.css"

const Logout = () => {
    const nav = useNavigate()
    const logoutHandle = () => {
        localStorage.clear();
        nav("/")
    }

    return (
        <button className="logout" onClick={logoutHandle}>Logout</button>
    )
}
export default Logout