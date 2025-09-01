import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Fingerprint from "../components/Fingerprint";


function PaymentPage() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [card, setCard] = useState("");
  const [status, setStatus] = useState("");

  const handlePayment = () => {
    setStatus("Verifying fingerprint...");

    setTimeout(() => {
      if (amount.trim() !== "" && card.trim() !== "") {
        navigate("/success");
      } else {
        navigate("/failed");
      }
    }, 2000);
  };

  return (
    <div className="container">
      <h1 className="header">Fingerprint Payment</h1>
      <img
        src="/pos.jpeg"
        alt="POS"
        className="pos-img"
      />

      <input
        type="text"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="input-field"
      />

      <input
        type="text"
        placeholder="Enter Card Number"
        value={card}
        onChange={(e) => setCard(e.target.value)}
        className="input-field"
      />

      <Fingerprint />

      <button onClick={handlePayment} className="btn">
        Scan Fingerprint
      </button>

      <p className="status">{status}</p>
    </div>
  );
}

export default PaymentPage;
