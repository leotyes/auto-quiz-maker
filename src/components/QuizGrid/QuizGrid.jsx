import QuizCard from "../QuizCard/QuizCard";
import "./QuizGrid.css";

export default function QuizGrid({ items }) {
    const quizzes = items.map((item, idx) => (
                <QuizCard
                    key={idx}
                    {...item}
                />
            ))

    return (
        <section className="quiz-grid">
            {quizzes}
        </section>
    )
}