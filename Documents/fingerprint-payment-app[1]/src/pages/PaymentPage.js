import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Fingerprint from "../components/Fingerprint";

function PaymentPage() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [card, setCard] = useState("");
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({ amount: "", card: "" });

  // Validation function
  const validateInputs = () => {
    let valid = true;
    const newErrors = { amount: "", card: "" };

    // Amount: must be positive number
    if (!amount.trim()) {
      newErrors.amount = "Amount is required.";
      valid = false;
    } else if (isNaN(amount) || Number(amount) <= 0) {
      newErrors.amount = "Enter a valid positive amount.";
      valid = false;
    }

    // Card: must be 16 digits
    if (!card.trim()) {
      newErrors.card = "Card number is required.";
      valid = false;
    } else if (!/^\d{16}$/.test(card)) {
      newErrors.card = "Card number must be 16 digits.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handlePayment = () => {
    if (!validateInputs()) {
      setStatus("⚠️ Please fix the errors above.");
      return;
    }

    setStatus("🔐 Verifying fingerprint...");

    setTimeout(() => {
      navigate("/success");
    }, 2000);
  };

  return (
    <div className="container">
      <h1 className="header">Fingerprint Payment</h1>
      <img src="/pos1.jpeg" alt="POS" className="pos-img" />

      {/* Amount Field */}
      <input
        type="text"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className={`input-field ${errors.amount ? "border-red-500" : ""}`}
      />
      {errors.amount && <p className="error-text">{errors.amount}</p>}

      {/* Card Field */}
      <input
        type="text"
        placeholder="Enter Card Number"
        value={card}
        onChange={(e) => setCard(e.target.value)}
        className={`input-field ${errors.card ? "border-red-500" : ""}`}
      />
      {errors.card && <p className="error-text">{errors.card}</p>}

      <Fingerprint />

      <button onClick={handlePayment} className="btn">
        Scan Fingerprint
      </button>

      <p className="status">{status}</p>
    </div>
  );
}

export default PaymentPage;
