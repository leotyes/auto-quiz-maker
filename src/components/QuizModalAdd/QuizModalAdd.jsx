import "./QuizModalAdd.css";

export default function QuizModalAdd({ setSubjects, setModalOpen }) {
	function confirmAddSubject(formData) {
        const dataObject = Object.fromEntries(formData);

		const trimmed = dataObject.subject.trim();

		if (!trimmed) {
		    setModalOpen(false);
        } else {
            setSubjects((prev) => (!prev.includes(trimmed) ? [...prev, trimmed] : prev));
		    setModalOpen(false);
        }
	}

	function cancelAdd() {
		setNewSubject("");
		setModalOpen(false);
	}

	return (
		<div
			className="quiz-filters-modal-overlay"
			onMouseDown={cancelAdd}
		>
			<div
				className="quiz-filters-modal"
				onMouseDown={(e) => e.stopPropagation()}
			>
				<h4 className="quiz-filters-modal-title">Add Subject</h4>
				<form action={confirmAddSubject}>
					<input
						className="quiz-filters-modal-input"
						placeholder="Subject name"
                        name="subject"
						autoFocus
					/>
					<div className="quiz-filters-modal-actions">
						<button
							type="button"
							className="quiz-filters-modal-cancel"
							onClick={cancelAdd}
						>
							Cancel
						</button>
						<button
							type="submit"
							className="quiz-filters-modal-confirm"
							onClick={confirmAddSubject}
						>
							Add
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
