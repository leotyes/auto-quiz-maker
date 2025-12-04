import "./InspectQuizForm.css";

export default function InspectQuizForm({ quizData }) {

    function saveQuiz(formData) {
        const dataObject = Object.fromEntries(formData);
    }

    return (
        <section className="inspect-quiz__meta">
            <form action={saveQuiz}>
                <div className="inspect-quiz__form">
                    <label className="field">
                        <span className="field__label">Title</span>
                        <input className="field__input" type="text" placeholder="Title" defaultValue={quizData.name} />
                    </label>

                    <label className="field">
                        <span className="field__label">Subject</span>
                        <input className="field__input" type="text" placeholder="e.g. Biology, Math" defaultValue={quizData.subject} />
                    </label>

                    <label className="field">
                        <span className="field__label">Description</span>
                        <input className="field__input" placeholder="Description"></input>
                    </label>

                    <div className="inspect-quiz__actions">
                        <button className="btn btn--primary" type="button">Save</button>
                        <button className="btn" type="button">Cancel</button>
                    </div>
                </div>
            </form>
        </section>
    )
}