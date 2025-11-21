import "./index.css" ;
import Quiz from "./components/quiz";
import PrevAnsw from "./components/prevAnsw";
import{Auth} from "./components/auth";

function App() {
  return (
    <div className="app-container">
      <h1>Quiz App</h1>
      <Auth/>
      <Quiz/>
      <PrevAnsw/>
    </div>
  )
}

export default App
