import { useState } from "react";
import './App.css'
import envelope from "./assets/envelope.svg";
import matcha from "./assets/matcha.svg";
import hojicha from "./assets/hojicha.svg";

export default function App() {
  const [step, setStep] = useState("envelope");

  return (
    <div className="container">
      {step === "envelope" && (
        <div className="center">
          <img
            src={envelope}
            alt="Envelope"
            className="envelope"
            onClick={() => setStep("letter")}
          />

          <h2>One year ago, we matched on Hinge.</h2>
          <p>Click to open!</p>
        </div>
      )}

      {step === "letter" && (
        <div className="letter-container">
          <div className="letter">
            <h1>Hi Erika! :)</h1>

            <p>
              It's been one whole year since we matched on Hinge!
            </p>

            <p>
              That's 365 days of texting, sending memes, having random conversations, and going on video calls.
            </p>

            <p>
             I wanted to celebrate the fact that one of us decided to hit that match button heh.
            </p>

            <p>
              Starting a relationship long-distance isn't always easy, so I really appreciate your time, your patience, and the effort you put into us. 
              The distance can be hard sometimes *eye twitches* but hearing from you and sharing all the little things that happen throughout our days make it better.
            </p>

            <p>
              Thank you for all the memories we've made so far. 
              Here's to more ahead of us!
            </p>

            <p>
              Since I originally asked to get matcha with you as our first meet up if *someone* was in LA, feel free to redeem your sweet drink card.
            </p>

            <p>— Christina 🐶 🧁 </p>

          <div>
            <button
              className="redeem-btn"
              onClick={() => setStep("bread")}
            >
             🍵 Sweet Drink Card 🍵
            </button>
          </div>

          <div>
            <button
              className="back-btn"
              onClick={() => setStep("envelope")}
                  >
                    ← Back
            </button>
          </div>
          </div>
        </div>
      )}

      {step === "bread" && (
        <div className="center">
          <img
          src={matcha}
          />
          <img
          src={hojicha}
          />
          <img
          src={matcha}
          />
          <img
          src={hojicha}
          />

          <h1>Sweet Drink Successfully Redeemed!</h1>

          <p className="stagger">          
            (specifically from Stagger :D)
          </p>

          <p className="cheers">
            Cheers to one year of not leaving each other alone.
          </p>

          <button
            className="back-btn"
            onClick={() => setStep("letter")}
          >
            ← Back to Letter
          </button>
        </div>
      )}
    </div>
  );
}