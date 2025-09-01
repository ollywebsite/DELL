import React from "react";
import { useNavigate } from "react-router-dom";

function SuccessPage() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="icon success">✔</div>
      <h1 className="header">Payment Successful</h1>
      <p>Your transaction was completed successfully.</p>
      <button onClick={() => navigate("/")} className="btn">Back to Home</button>
    </div>
  );
}

export default SuccessPage;