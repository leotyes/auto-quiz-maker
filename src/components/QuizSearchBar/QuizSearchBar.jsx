import "./QuizSearchBar.css";
import { Search, X } from "lucide-react";
import { useState } from "react";

export default function QuizSearchBar({ query, setQuery }) {
    function clearInput() {
        setQuery("");
    }

    return (
        <div className="quiz-searchbar">
            <div className="quiz-searchbar__inner">
                <Search className="quiz-searchbar__icon" />
                <input
                    id="quiz-search-input"
                    className="quiz-searchbar__input"
                    placeholder="Search quizzes..."
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                {query && (
                    <button
                        className="quiz-searchbar__clear"
                        type="button"
                        onClick={clearInput}
                    >
                        <X className="quiz-searchbar__icon" />
                    </button>
                )}
            </div>
        </div>
    )
}