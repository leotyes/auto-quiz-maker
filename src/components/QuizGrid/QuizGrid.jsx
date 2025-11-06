import QuizCard from "../QuizCard/QuizCard";
import "./QuizGrid.css";

export default function QuizGrid({ items, query, setQuery, deleteQuiz, subjectFilters }) {
    const quizzes = items.filter((item) => (
            item.name.toLowerCase().includes(query.toLowerCase()) && (subjectFilters.length == 0 || subjectFilters.includes(item.subject)) 
        ))
        .map(item => (
            <QuizCard deleteQuiz={() => deleteQuiz(item.id)} key={item.id} {...item} />
        ))

    return (
        <section className="quiz-grid">
            {quizzes}
        </section>
    )
}