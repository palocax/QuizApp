
import { pasResultsCollectionRef, db } from "../config/firebase-config";
import { useEffect, useState } from "react";
import { getDocs,deleteDoc,doc } from "firebase/firestore";

function prevAnsw(){

    const [pastResults, setPastResults]=useState([]);

    const getPastResults = async ()=>{
        //Read data from dataset
        //set the state to the data
        try{
            const data = await getDocs(pasResultsCollectionRef);
                
            const filteredData =data.docs.map((doc)=>({
                ...doc.data()
                ,id: doc.id
            }))
            setPastResults(filteredData);
        }catch(err){
            console.error.err};
        };

    useEffect(()=>{
        getPastResults();
    },[]);

    const deleteResults = async(id)=>{
        const resDoc = doc(db,"Answers", id);
        await deleteDoc(resDoc);
    };

    return(
        <div>
            <h1>Previous results</h1>
            {pastResults.map((Answers, index)=>(
            <div>
                <h2>Resultset {index+1}</h2>
                <p>Score: {Answers.Results}</p>
                <p>Answers: {Answers.userAnswers.join(", ")}</p>
                <p>score: {Answers.date.toDate().toLocaleString()}</p>

                <div className="nav-buttons">
                    <button onClick={()=>deleteResults(Answers.id)}>Delete Results</button>
                </div>
            </div>
            ))}
        </div>
    );
}

export default prevAnsw;