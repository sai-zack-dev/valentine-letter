import { useState, useEffect } from "react";
import "../styles/settings.scss";

function Settings({ show, setReceiver, setQuestion }) {
  const [receiver, setLocalReceiver] = useState("");
  const [question, setLocalQuestion] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    // Generate the URL when receiver or question changes
    const params = new URLSearchParams();
    if (receiver) params.append("to", receiver);
    if (question) params.append("question", question);
    setLink(`${window.location.origin}/?${params.toString()}`);
  }, [receiver, question]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link).then(() => {
      alert("Link copied to clipboard!");
    });
  };

  if (!show) return null;

  return (
    <div className="settings">
      <div className="container">
        <h2>Settings</h2>
        <label>
          To:
          <input
            type="text"
            value={receiver}
            onChange={(e) => {
              setLocalReceiver(e.target.value);
              setReceiver(e.target.value); // Update parent state
            }}
          />
        </label>
        <label>
          Question:
          <input
            type="text"
            value={question}
            onChange={(e) => {
              setLocalQuestion(e.target.value);
              setQuestion(e.target.value); // Update parent state
            }}
          />
        </label>
        <label>
          Link:
          <div className="input-container">
            <input type="text" value={link} readOnly />
            <button className="copy-btn" onClick={copyToClipboard}>📋</button>
          </div>
        </label>
      </div>
    </div>
  );
}

export default Settings;
