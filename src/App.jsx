import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import QuizCard from "./components/QuizCard/QuizCard";
import QuizGrid from "./components/QuizGrid/QuizGrid";
import Sidebar from "./components/Sidebar/Sidebar";
import QuizSearchBar from "./components/QuizSearchBar/QuizSearchBar";

function MainContent() {
	return <QuizzesPage />;
}

function QuizzesPage() {
	const formatted = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: "long",
		day: "2-digit"
	}).format(new Date());
	return (
		<>
			<div className="layout">
				<Sidebar />
				<main className="layout__main">
					<QuizSearchBar />
					<QuizGrid items={[
							{name: "Quiz 1", questions: 7, lastEdited: "January 1, 2025", subject: "Math"},
							{ name: "Quiz 2", questions: 6, lastEdited: "January 11, 2025", subject: "Physics" },
							{ name: "Quiz 3", questions: 5, lastEdited: "January 12, 2025", subject: "English" },
							{ name: "Quiz 4", questions: 4, lastEdited: "January 13, 2025", subject: "French" },
							{ name: "Quiz 5", questions: 3, lastEdited: "January 14, 2025", subject: "Chemistry" },
							{ name: "Quiz 6", questions: 2, lastEdited: "January 15, 2025", subject: "Economics" },
							{ name: "Quiz 7", questions: 1, lastEdited: formatted, subject: "Theory of Knowledge" }
						]} />
				</main>
			</div>
		</>
	);
}

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<MainContent />
		</>
	);
}

export default App;

