import "./EnterAccountPage.css";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function EnterAccountPage() {
	const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

	function handleLogIn(formData) {
		console.log("sign in", { email, password });
	}

	return (
		<div className="enter-account-page">
			<div className="enter-account-card">
				<header className="enter-account-card__head">
					<div className="enter-account-card__logo">Log In</div>
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

							<div className="form-field__forgot">
								<a
									href="#"
									className="link--muted link--small"
									onClick={(e) => {
										e.preventDefault();
									}}
								>
									Forgot password?
								</a>
							</div>
						</label>

						<button type="submit" className="btn btn--primary">
							Log in
						</button>
						<button
							type="button"
							className="btn btn--google"
							onClick={() => {
							}}
						>
							<span className="btn__label">Log in with Google</span>
						</button>

						<div className="create-account-link">
							<a
								className="link--muted"
								href="#"
								onClick={(e) => {
									e.preventDefault();
								}}
							>
								Don't have an account yet? Create one
							</a>
						</div>
					</form>
				</main>
			</div>
		</div>
	);
}
