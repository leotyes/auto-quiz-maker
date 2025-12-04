import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import QuizzesPage from "./components/QuizzesPage/QuizzesPage";
import HomePage from "./components/HomePage/HomePage";
import InspectQuizPage, { inspectQuizLoader } from "./components/InspectQuizPage/InspectQuizPage";
import UsernameTopBar from "./components/UsernameTopBar/UsernameTopBar";
import EnterAccountPage from "./components/EnterAccountPage/EnterAccountPage";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import { fetchQuizData } from "./components/QuizzesPage/QuizzesPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function MainContent() {
	const [showSidebar, setShowSidebar] = useState(true);
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route index element={<HomePage showSidebar={showSidebar} setShowSidebar={setShowSidebar} />} />
                <Route path="login" element={<EnterAccountPage />} />
                <Route path="signup" element={<EnterAccountPage />} />
                <Route path="quizzes" element={<QuizzesPage showSidebar={showSidebar} setShowSidebar={setShowSidebar} />} loader={fetchQuizData} />
                <Route path="quizzes/:quizId" element={<InspectQuizPage />} loader={inspectQuizLoader} errorElement={<ErrorPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        )
    )

	return (
		<>
			{/* {page === 0 && <HomePage setPage={setPage} showSidebar={showSidebar} setShowSidebar={setShowSidebar} />}
			{page === 1 && <QuizzesPage setPage={setPage} showSidebar={showSidebar} setShowSidebar={setShowSidebar} />} */}
			{/* <InspectQuizPage /> */}
			{/* <EnterAccountPage /> */}
            <RouterProvider router={router} />
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

