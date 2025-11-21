import { pasResultsCollectionRef } from "../config/firebase-config";
import { addDoc } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";

function Results({questionBank, userAnswers, restartQuiz}){

    function getScore(){
        let finalScore = 0;

        userAnswers.forEach((answer, index) => {
            if(answer === questionBank[index].answer){
                    finalScore++;
                }           
        });

        return finalScore;
    }
    const score = getScore();

    const finalScoreString = `${score}/${questionBank.length}`;
    const today = Timestamp.now();
    
    const onSubmitRes = async () =>{
        try {
            await addDoc(pasResultsCollectionRef,{
                Results: finalScoreString,
                date: today, 
                userAnswers: userAnswers,
            });
        }catch(err){
            console.error(err);
        }
    };

    return <div>
        <h2>Quiz Completed!</h2>
        <p> Your Score: {finalScoreString}</p>

        <div className="nav-buttons">
            <button onClick={restartQuiz}> Restart Quiz</button>
            <button onClick={onSubmitRes}> Send Results</button>
        </div>
    </div>;
}

export default Results;