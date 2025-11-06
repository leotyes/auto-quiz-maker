import { useMemo, useState } from "react";
import QuizGrid from "../QuizGrid/QuizGrid";
import Sidebar from "../Sidebar/Sidebar";
import QuizSearchBar from "../QuizSearchBar/QuizSearchBar";
import QuizFilters from "../QuizFilters/QuizFilters";
import UsernameTopBar from "../UsernameTopBar/UsernameTopBar";

export default function QuizzesPage({ setPage, showSidebar, setShowSidebar }) {
	const [quizQuery, setQuizQuery] = useState("");
	const [quizGridItems, setQuizGridItems] = useState([
		{ id: 1, name: "Abc", questions: 7, lastEdited: new Date(2025, 0, 1), subject: "Math", created: new Date(2024, 0, 1) },
		{ id: 2, name: "Def", questions: 6, lastEdited: new Date(2025, 0, 11), subject: "Physics", created: new Date(2024, 0, 12) },
		{ id: 3, name: "Abg", questions: 5, lastEdited: new Date(2025, 0, 12), subject: "English", created: new Date(2024, 0, 13) },
		{ id: 4, name: "Quiz 4", questions: 4, lastEdited: new Date(2025, 0, 13), subject: "French", created: new Date(2024, 0, 14) },
		{ id: 5, name: "Quiz 5", questions: 3, lastEdited: new Date(2025, 0, 14), subject: "Chemistry", created: new Date(2024, 0, 15) },
		{ id: 6, name: "Quiz 6", questions: 2, lastEdited: new Date(2025, 0, 15), subject: "Economics", created: new Date(2024, 0, 16) },
		{ id: 7, name: "Quiz 7", questions: 1, lastEdited: new Date(2025, 0, 16), subject: "Theory of Knowledge", created: new Date(2024, 0, 17) }
	]);
	const [subjects, setSubjects] = useState(["Math", "Physics", "Chemistry", "English", "Economics"]);
	const [subjectFilters, setSubjectFilters] = useState([]);
	const [sortingMode, setSortingMode] = useState(0);

	const sortedQuizGridItems = useMemo(() => {
		return [...quizGridItems].sort((a, b) => {
			switch (sortingMode) {
				case (0): {
					const dateA = a.lastEdited.getTime();
					const dateB = b.lastEdited.getTime();
					return dateB - dateA;
				}
				case (1): {
					const dateA = a.lastEdited.getTime();
					const dateB = b.lastEdited.getTime();
					return dateA - dateB;
				}
				case (2): {
					const dateA = a.created.getTime();
					const dateB = b.created.getTime();
					return dateB - dateA;
				}
				case (3): {
					const dateA = a.created.getTime();
					const dateB = b.created.getTime();
					return dateA - dateB;
				}
			}
		});
	}, [quizGridItems, sortingMode]);

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
				<Sidebar active={1} showSidebar={showSidebar} setShowSidebar={setShowSidebar} setPage={setPage} />
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