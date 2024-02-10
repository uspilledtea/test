import { useState } from "react";
import "./App.css";

const phrases = ["No"];

function App() {
  const [noPress, setNoPress] = useState(0);
  const [yes, setYes] = useState(false);

  const yesButtonSize = noPress * 20 + 25;

  function handleNoPress() {
    setNoPress(noPress + 1);
  }

  return (
    <>
      <div className="valentine-container">
        {yes ? (
          <>
            <div className="flex flex-row">
              <img
                alt="bear"
                src="https://media.tenor.com/g0Ikld3g1TwAAAAi/z.gif"
              />
              <img
                alt="bear"
                src="https://media.tenor.com/OHKT0LAthQEAAAAi/newt00th-newtooth.gif"
              />
            </div>
            <div className="text subpixel-antialiased">OK YAY!!!!</div>
            <div className="text subpixel-antialiased"> I LOVE U!!!</div>
          </>
        ) : (
          <>
            <div>
              <img
                alt="bear"
                src="https://media.tenor.com/Zo490fW6vrcAAAAi/emojify.gif"
              />
            </div>

            <div className="text">Will u be my valentine?</div>
            <div>
              <button
                className="yesButton px-5 rounded-lg shadow-xl"
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYes(true)}
              >
                Yes
              </button>
              <button
                className="noButton px-5 rounded-lg shadow-lg"
                onClick={handleNoPress}
              >
                No
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
