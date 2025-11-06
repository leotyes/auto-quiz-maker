import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import QuizzesPage from "./components/QuizzesPage/QuizzesPage";
import HomePage from "./components/HomePage/HomePage";
import InspectQuizPage from "./components/InspectQuizPage/InspectQuizPage";
import UsernameTopBar from "./components/UsernameTopBar/UsernameTopBar";
import EnterAccountPage from "./components/EnterAccountPage/EnterAccountPage";

function MainContent() {
	const [page, setPage] = useState(0);
	const [showSidebar, setShowSidebar] = useState(true);
	return (
		<>
			{/* {page === 0 && <HomePage setPage={setPage} showSidebar={showSidebar} setShowSidebar={setShowSidebar} />}
			{page === 1 && <QuizzesPage setPage={setPage} showSidebar={showSidebar} setShowSidebar={setShowSidebar} />} */}
			{/* <InspectQuizPage /> */}
			<EnterAccountPage />
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

