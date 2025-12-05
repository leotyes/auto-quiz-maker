import "./EnterAccountPage.css";
import { Mail, Lock, Eye, EyeOff, Check, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../../stores/userStore";

export default function EnterAccountPage() {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [enterMode, setEnterMode] = useState(false);
    const passwordsMatch = password !== "" && confirmPassword === password;
    const setUser = useUserStore((state) => state.setUser);
    const navigate = useNavigate();
	
    function handleLogIn(formData) {
        const dataObject = Object.fromEntries(formData);
        const userObject = {
            userId: 1,
            username: dataObject.email
        }
        setUser(userObject);
        navigate("/");
	}

	return (
		<div className="enter-account-page">
			<div className="enter-account-card">
				<header className="enter-account-card__head">
					<div className="enter-account-card__logo">{enterMode === false ? "Log In" : "Sign Up"}</div>
				</header>

				<main className="enter-account-card__body">
					<form className="enter-account-form" action={handleLogIn}>
						<label className="form-field">
							<div className="form-field__label">Email</div>
							<div className="form-field__row">
								<Mail className="form-field__icon" />
								<input
									className="form-field__input"
									type="email"
									placeholder="you@domain.com"
                                    name="email"
									required
									autoComplete="email"
								/>
							</div>
						</label>

						<label className="form-field">
							<div className="form-field__label">Password</div>
							<div className="form-field__row">
								<Lock className="form-field__icon" />
								<input
									className="form-field__input"
									type={showPassword ? "text" : "password"}
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									placeholder="Password"
                                    name="password"
									required
									autoComplete="current-password"
								/>
                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                >
                                    {password !== "" ? (showPassword ? <EyeOff /> : <Eye />) : ""}
                                </button>
							</div>

							{enterMode === false ? (<div className="form-field__forgot">
								<a
									href="#"
									className="link--muted link--small"
									onClick={(e) => {
										e.preventDefault();
									}}
								>
									Forgot password?
								</a>
							</div>) : ""}
						</label>

                        {enterMode === true ? (
                            <label className="form-field">
                                <div className="form-field__label">Confirm Password</div>
                                <div className="form-field__row">
                                    {passwordsMatch ? <Check className="form-field__icon" /> : <X className="form-field__icon" />}
                                    <input
                                        className="form-field__input"
                                        type={showConfirmPassword ? "text" : "password"}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeholder="Confirm password"
                                        name="confirmPassword"
                                        required
                                        autoComplete="current-password"
                                    />
                                    <button
                                        type="button"
                                        className="password-toggle"
                                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                                    >
                                        {confirmPassword !== "" ? (showConfirmPassword ? <EyeOff /> : <Eye />) : ""}
                                    </button>
                                </div>
                            </label>) : ""}

						<button type="submit" className="btn btn--primary">
							{enterMode === false ? "Log in" : "Sign up"}
						</button>
						<button
							type="button"
							className="btn btn--google"
							onClick={() => {
							}}
						>
							<span className="btn__label">{enterMode === false ? "Log in with Google" : "Sign up with Google"}</span>
						</button>

						
                            <div className="create-account-link">
                                <Link to={enterMode === false ? "/signup" : "/login"}>
                                    <p className="link--muted" onClick={() => setEnterMode((prev) => !prev)}>
                                        {enterMode === false ? "Don't have an account yet? Create one" : "Already have an account? Log in"}
                                    </p>
                                </Link>
                            </div>
					</form>
				</main>
			</div>
		</div>
	);
}
