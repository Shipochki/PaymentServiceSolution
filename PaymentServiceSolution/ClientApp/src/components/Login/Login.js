import { Link } from "react-router-dom"

export const Login = () => {
    <div className="login">
        <Link className="login-btn" to={'/loginUser'}>Login as Client</Link>
        <Link className="login-btn" to={'/loginCompany'}>Login as Company</Link>
    </div>
}