import { Link } from "react-router-dom"

import './header.css'

export const Header = () => {
    <div className="header">
        <div className="log-sign-btns">
                { localStorage.getItem('auth') && (
                    <Link className="logout-btn" to={'/logout'}>Logout</Link>
                )}

                { !localStorage.getItem('auth') && (
                    <div>
                        <Link className="login-btn" to={'/login'}>Login</Link>
                        <Link className="register-btn" to={'/register'}>Register</Link>
                    </div>
                )}
            </div>
    </div>
}