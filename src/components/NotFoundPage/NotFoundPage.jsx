import "./NotFoundPage.css";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function NotFoundPage() {
	return (
		<div className="notfound-page">
			<div className="notfound-card">
				<h1 className="notfound-title">Page not found</h1>
				<p className="notfound-sub">
					The page you're looking for doesn't exist or has been moved.
				</p>

				<Link to="/" className="btn btn--primary notfound-home">
					<Home className="btn__icon" />
					<span>Go home</span>
				</Link>
			</div>
		</div>
	);
}
