import "./index.css" ;
import Quiz from "./components/quiz";
import{Auth} from "./components/auth";
import {db} from "./config/firebase-config";
import { useEffect, useState } from "react";
import { getDocs,collection } from "firebase/firestore";

function App() {
  const [pastResults, setPastResults]=useState([]);
  const pasResultsCollectionRef = collection(db,"Answers");

  useEffect(()=>{
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

    getPastResults();
  },[]);

  return (
    <div className="app-container">
      <h1>Quiz App</h1>
      <Auth/>
      <Quiz/>

      <div>
        {pastResults.map((Answers)=>(
          <div>
            <h1>Previous results</h1>
            <p>Score: {Answers.Results}</p>
            <p>Answers: {Answers.userAnswers.join(", ")}</p>
            <p>score: {Answers.date.toDate().toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
