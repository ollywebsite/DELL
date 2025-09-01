import React from "react";
import { Routes, Route } from "react-router-dom";
import PaymentPage from "./pages/PaymentPage";
import SuccessPage from "./pages/SuccessPage";
import FailedPage from "./pages/FailedPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PaymentPage />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/failed" element={<FailedPage />} />
    </Routes>
  );
}

export default App;