import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const [position, setPosition] = useState({
    top: "65%",
    left: "58%",
  });

  const moveButton = () => {
    const top = Math.random() * 70 + 10;
    const left = Math.random() * 70 + 10;

    setPosition({
      top: `${top}%`,
      left: `${left}%`,
    });
  };

  return (
    <div className="page">
      <div className="card">

        <img
          className="gif"
          src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
          alt="Cute Teddy"
        />

        <h1>🥺 Will you go on a date with me?</h1>

        <div className="buttons">
          <button
            className="yes"
            onClick={() => navigate("/yes")}
          >
            💖 Yes
          </button>
        </div>

        <button
          className="no"
          style={position}
          onMouseEnter={moveButton}
          onMouseMove={moveButton}
        >
          🙈 No
        </button>

      </div>
    </div>
  );
}