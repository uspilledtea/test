import { useState } from "react";
import "./App.css";

function App() {
  const [noPress, setNoPress] = useState(0);
  const [yes, setYes] = useState(false);

  const yesButtonSize = noPress * 20 + 25;

  function handleNoPress() {
    setNoPress(noPress + 1);
  }

  return (
    <>
      <div className="valentine-container bg-gradient-to-bl from-pink-300 to-red-600">
        {yes ? (
          <>
            <div className="flex flex-row flex-wrap">
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
            <img
              alt="happycat"
              src="https://media.tenor.com/CnP64S7lszwAAAAi/meme-cat-cat-meme.gif"
            />
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
                className="yesButton px-5 rounded-lg shadow-xl bg-pink-300"
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYes(true)}
              >
                yes :D
              </button>
              <button
                className="noButton px-5 rounded-lg shadow-lg visible bg-pink-300"
                onClick={handleNoPress}
              >
                no :(
              </button>
            </div>
            <img
              className="w-64 object-bottom"
              alt="please cat"
              src="https://i.pinimg.com/originals/42/61/ec/4261ec8b20a4ec6f9cf047250024371f.gif"
            />
          </>
        )}
      </div>
    </>
  );
}

export default App;
