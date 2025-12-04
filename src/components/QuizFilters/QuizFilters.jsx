import { useState } from "react";
import "./QuizFilters.css";
import { ChevronDown, ChevronUp, Plus } from "lucide-react";
import QuizModalAdd from "../QuizModalAdd/QuizModalAdd";

export default function QuizFilters({ subjectFilters, setSubjectFilters, subjects, setSubjects, sortingMode, setSortingMode }) {
    const options = ["Last Edited (Newest to Oldest)", "Last Edited (Oldest to Newest)", "Date Created (Newest to Oldest)", "Date Created (Oldest to Newest)"]
    const [sortOpen, setSortOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    function handleSortSelect(option) {
        setSortOpen(false);
        setSortingMode(option);
    }

    function handleSubjectFilterSelect(subject) {
        if (subjectFilters.includes(subject)) {
            setSubjectFilters(prev => prev.filter(s => s !== subject));
        } else {
            setSubjectFilters(prev => [...prev, subject]);
        }
    }

    function addSubject() {
        setModalOpen(prev => true)
    }

    const subjectsAppear = subjects.map((subject) => (
        <label key={subject}><input type="checkbox" onChange={() => handleSubjectFilterSelect(subject)} />{subject}</label>
    ))

    return (
        <div className="quiz-filters-card">
            <h3 className="quiz-filters-title">Filter and Sort</h3>
            <div className="quiz-filters-section">
                <label htmlFor="filter-type" className="quiz-filters-label">Sort By</label>
                <div className="quiz-filters-dropdown-wrapper">
                    <button type="button" onClick={() => setSortOpen((prev) => !prev)} className="custom-dropdown-selected">{options[sortingMode]}</button>
                    {sortOpen ? (
                        <ChevronUp className="quiz-filters-dropdown-arrow" />
                    ) : (
                        <ChevronDown className="quiz-filters-dropdown-arrow" />
                    )}
                    {sortOpen && (
                        <ul className="custom-dropdown-options">
                            {options.map((option, index) => (
                                <li
                                    key={index}
                                    className={`custom-dropdown-option${option === sortingMode ? " selected" : ""}`}
                                    onClick={() => handleSortSelect(index)}
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            <div className="quiz-filters-section">
                <span className="quiz-filters-label">Subjects</span>
                <div className="quiz-filters-checklist">
                    {subjectsAppear}
                    <button type="button" className="quiz-filters-add-item" onClick={addSubject}>
                        <Plus className="quiz-filters-add-icon" />
                        Add Subject
                    </button>
                </div>
            </div>
            {modalOpen && <QuizModalAdd setModalOpen={setModalOpen} setSubjects={setSubjects} />}
        </div>
    )
}