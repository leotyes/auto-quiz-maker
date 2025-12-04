import "./InspectQuizPage.css";
import InspectQuizPreview from "../InspectQuizPreview/InspectQuizPreview";
import InspectQuizForm from "../InspectQuizForm/InspectQuizForm";
import InspectPDFViewer from "../InspectPDFViewer/InspectPDFViewer";
import UsernameTopBar from "../UsernameTopBar/UsernameTopBar";
import { useLoaderData, useParams } from "react-router-dom";
import axios from "axios";

export default function InspectQuizPage() {

    const { quizId } = useParams(); // I could also use Zustand and Query to get the stored data
    const quizData = useLoaderData();

    return (
        <>
            <UsernameTopBar />
        
            <div className="inspect-quiz">
                <div className="inspect-quiz__left">
                    <InspectQuizPreview />
                    <InspectQuizForm quizData={quizData} />
                </div>

                <InspectPDFViewer />
            </div>
        </>
    )
}

export const inspectQuizLoader = async ({ params }) => {
    try {
        const { quizId } = params;
        const { data } = await axios.get("http://localhost:5000/quizzes/" + quizId);
        const convertedData = {...data, lastEdited: new Date(data.lastEdited), created: new Date(data.created)};
        return convertedData;
    } catch (err) {
        console.log(err);
        throw err;
    }
}