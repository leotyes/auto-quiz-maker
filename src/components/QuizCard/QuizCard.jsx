import "./QuizCard.css";
import { Edit, Eye, Download, Trash2 } from "lucide-react";

export default function QuizCard({ name, questions, lastEdited, subject }) {
	return (
		<article className="quiz-card">
			<div className="quiz-card__body">
				<h2 className="quiz-card__name">{name}</h2>
				<p className="quiz-card__description">{questions} questions</p>
				<p className="quiz-card__description">
					Last edited on {lastEdited}
				</p>
				<p className="quiz-card__description">
					Subject: {subject}
				</p>

				
			</div>
			<div className="quiz-card__actions">
				<button className="quiz-card__action" aria-label="Edit">
					<Edit className="quiz-card__icon" />
				</button>

				<button className="quiz-card__action" aria-label="Preview">
					<Eye className="quiz-card__icon" />
				</button>

				<button className="quiz-card__action" aria-label="Export">
					<Download className="quiz-card__icon" />
				</button>
				
				<button className="quiz-card__action" aria-label="Delete">
					<Trash2 className="quiz-card__icon" />
				</button>
			</div>
		</article>
	);
}
