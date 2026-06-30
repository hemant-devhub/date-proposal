import { useEffect, useState } from "react";

export default function Success() {
  const [countdown, setCountdown] = useState(6);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);

          window.location.href =
            "https://wa.me/919818612625?text=Yes%20❤️";

          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page">
      <div className="card success">
        <img
          className="gif"
          src="https://media.giphy.com/media/26FLdmIp6wJr91JAI/giphy.gif"
          alt="Love"
        />

        <h1>❤️ I Knew It!</h1>

        <p>
          I knew you would choose <b>Yes.</b>
        </p>

        <p>
          Tomorrow is our <b>4 Month Anniversary ❤️</b>
        </p>

        <p>
          Dress well...
          <br />
          We're going out tomorrow! 🌹
        </p>

        <h2>I Love You ❤️</h2>

        <div className="countdown">
          Opening WhatsApp in...
          <br />
          <span>{countdown}</span>
        </div>
      </div>
    </div>
  );
}