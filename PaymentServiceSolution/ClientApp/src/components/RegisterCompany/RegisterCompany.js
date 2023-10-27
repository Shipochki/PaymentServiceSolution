import { useContext } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

const RegisterFormKeys = {
    Name: 'name',
    Email: 'email',
    Password: 'password',
    confirmPassword: 'confirmpassword',
}

export const RegisterCompany = () => {
    const { onRegisterCompanySubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        [RegisterFormKeys.Name]: '',
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.confirmPassword]: '',
    }, onRegisterCompanySubmit);

    return (
        <section id="register-page" className="content auth">
            <form id="register" method="post" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register Company</h1>

                    <label htmlFor="text">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name={RegisterFormKeys.Name}
                        placeholder="encorp.io"
                        value={values[RegisterFormKeys.Name]}
                        onChange={changeHandler}
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="encorp.io@email.com"
                        value={values.email}
                        onChange={changeHandler}
                    />

                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        value={values.password}
                        onChange={changeHandler}
                    />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirm-password"
                        value={values.confirmPassword}
                        onChange={changeHandler}
                    />

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have profile click <Link to="/loginCompany">here</Link></span>
                    </p>
                </div>
            </form>
        </section>

    );
};