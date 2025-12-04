import { useMemo, useState } from "react";
import QuizGrid from "../QuizGrid/QuizGrid";
import Sidebar from "../Sidebar/Sidebar";
import QuizSearchBar from "../QuizSearchBar/QuizSearchBar";
import QuizFilters from "../QuizFilters/QuizFilters";
import UsernameTopBar from "../UsernameTopBar/UsernameTopBar";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

export default function QuizzesPage({ showSidebar, setShowSidebar }) {
	const [quizQuery, setQuizQuery] = useState("");
	const quizData = useLoaderData();
	const [subjects, setSubjects] = useState(["Math", "Physics", "Chemistry", "English", "Economics"]);
	const [subjectFilters, setSubjectFilters] = useState([]);
	const [sortingMode, setSortingMode] = useState(0);

	const sortedQuizGridItems = useMemo(() => {
		return [...quizData].sort((a, b) => {
			switch (sortingMode) {
				case 0: return b.lastEdited - a.lastEdited;
                case 1: return a.lastEdited - b.lastEdited;
                case 2: return b.created - a.created;
                case 3: return a.created - b.created;
            }
		});
	}, [quizData, sortingMode]);

	function addQuizItem(quizItem) {
		setQuizGridItems(prev => [...prev, quizItem]);
	}

	function deleteQuizItem(quizId) {
		setQuizGridItems(prev => prev.filter(quiz => quiz.id !== quizId));
	}

	return (
		<>
            <UsernameTopBar />

			<div className="layout">
				<Sidebar active={1} showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
				<main className={`layout__main${showSidebar ? "" : " layout__main--collapsed"}`}>
					<QuizSearchBar query={quizQuery} setQuery={setQuizQuery} />
					<div className="main-content-row">
						<div className="quiz-grid-wrapper">
							<QuizGrid query={quizQuery} setQuery={setQuizQuery} deleteQuiz={deleteQuizItem} items={sortedQuizGridItems} subjectFilters={subjectFilters} />
						</div>
						<QuizFilters subjectFilters={subjectFilters} setSubjectFilters={setSubjectFilters} subjects={subjects} setSubjects={setSubjects} sortingMode={sortingMode} setSortingMode={setSortingMode} />
					</div>
				</main>
			</div>
		</>
	);
}

export const fetchQuizData = async () => {
    try {
        const { data } = await axios.get("http://localhost:5000/quizzes");
        const convertedData = data.map(item => ({
            ...item,
            lastEdited: new Date(item.lastEdited),
            created: new Date(item.created)
        }));
        return convertedData;
    } catch (err) {
        console.log(err);
        throw err;
    }
}