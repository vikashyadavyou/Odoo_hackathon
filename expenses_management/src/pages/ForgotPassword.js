import React, { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Forgot Password Request:", email);
    // TODO: Send email to Python backend for password reset
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-96">
      <h2 className="text-2xl font-semibold text-center mb-6">Forgot Password</h2>
      <p className="text-sm text-gray-600 mb-4 text-center">
        Enter your registered email and we’ll send you instructions to reset your password.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border rounded-lg"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
        >
          Send Reset Link
        </button>
      </form>
      <div className="mt-4 text-sm text-center">
        <Link to="/" className="text-blue-600 hover:underline">
          Back to Login
        </Link>
      </div>
    </div>
  );
}

export default ForgotPassword;
