import "./InspectQuizPage.css";
import InspectQuizPreview from "../InspectQuizPreview/InspectQuizPreview";
import InspectQuizForm from "../InspectQuizForm/InspectQuizForm";
import InspectPDFViewer from "../InspectPDFViewer/InspectPDFViewer";
import UsernameTopBar from "../UsernameTopBar/UsernameTopBar";

export default function InspectQuizPage() {
    return (
        <>
            <UsernameTopBar />
        
            <div className="inspect-quiz">
                <div className="inspect-quiz__left">
                    <InspectQuizPreview />
                    <InspectQuizForm />
                </div>

                <InspectPDFViewer />
            </div>
        </>
    )
}