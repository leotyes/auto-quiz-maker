import "./ErrorPage.css";
import { Link, useRouteError } from "react-router-dom";
import { Home } from "lucide-react";

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error.message); // Make sure you don't actually log this in production

	return (
		<div className="error-page">
			<div className="error-card">
				<h1 className="error-title">Something went wrong</h1>
				<p className="error-sub">
					Sorry, an unexpected error occured on our end.
				</p>

				<Link to="/" className="btn btn--primary error-home">
					<Home className="btn__icon" />
					<span>Go home</span>
				</Link>
			</div>
		</div>
	);
}
