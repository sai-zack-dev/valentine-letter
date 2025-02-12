import { useEffect, useState } from "react";
import Envelope from "./components/Envelope";
import Letter from "./components/Letter";
import Settings from "./components/Settings";
import Celebration from "./components/Celebration";
import "./styles/app.scss";
import { useSearchParams } from "react-router-dom";

function App() {
  const [searchParams] = useSearchParams();
  const [receiver, setReceiver] = useState("My Love");
  const [question, setQuestion] = useState("Will you be my valentine?");
  const [showSettings, setShowSettings] = useState(false);
  const [celebrate, setCelebrate] = useState(false);

  useEffect(() => {
    // Get values from URL query params
    const toParam = searchParams.get("to");
    const questionParam = searchParams.get("question");

    if (toParam) setReceiver(toParam);
    if (questionParam) setQuestion(questionParam);
  }, [searchParams]);

  const handleYesClick = () => {
    setCelebrate(true);
    setTimeout(() => setCelebrate(false), 3000);
  };

  return (
    <div className="app">
      <Settings
        show={showSettings}
        setShow={setShowSettings}
        setReceiver={setReceiver}
        setQuestion={setQuestion}
      />
      <Envelope receiver={receiver} question={question} onYesClick={handleYesClick}  />
      <button className="settings-btn" onClick={() => setShowSettings(!showSettings)}>
        {showSettings ? "⤬" : "⚙"}
      </button>
      {celebrate && <Celebration />}
    </div>
  );
}

export default App;
