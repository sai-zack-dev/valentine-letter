import "../styles/settings.scss";

function Settings({
  show,
  setShow,
  setReceiver,
  setQuestion,
  setSender,
  setButtons,
}) {
  if (!show) return null;

  return (
    <div className="settings">
      <div className="container">
        <h2>Settings</h2>
        <label>
          To:
          <input type="text" onChange={(e) => setReceiver(e.target.value)} />
        </label>
        <label>
          Question:
          <input type="text" onChange={(e) => setQuestion(e.target.value)} />
        </label>
        {/* <button onClick={() => setShow(false)}>Close</button> */}
      </div>
    </div>
  );
}

export default Settings;
