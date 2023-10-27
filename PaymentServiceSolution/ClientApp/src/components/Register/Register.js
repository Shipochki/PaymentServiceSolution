import { Link } from "react-router-dom"

export const Register = () => {
    <div className="register">
        <Link className="register-btn" to={'/registerUser'}>Register as Client</Link>
        <Link className="register-btn" to={'/registerCompnay'}>Register as Company</Link>
    </div>
}