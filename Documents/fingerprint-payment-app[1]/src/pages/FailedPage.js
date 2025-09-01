import React from "react";
import { useNavigate } from "react-router-dom";

function FailedPage() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="icon failed">✖</div>
      <h1 className="header">Verification Failed</h1>
      <p>Your fingerprint could not be verified. Please try again.</p>
      <button onClick={() => navigate("/")} className="btn">Retry Payment</button>
    </div>
  );
}

export default FailedPage;