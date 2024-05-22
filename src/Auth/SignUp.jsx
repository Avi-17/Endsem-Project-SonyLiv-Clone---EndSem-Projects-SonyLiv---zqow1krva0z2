import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required");
    } else {
      const payload = {
        name: name,
        email: email,
        password: password,
        appType: "ott",
      };

      fetch("https://academics.newtonschool.co/api/v1/user/signup", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          projectID: "d63nfx122ebp",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else if (response.status === 409) {
            alert("User already exists");
          }
        })
        .then((data) => {
          console.log(data);
          navigate("/login");
        });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md p-8 space-y-8">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="block w-full p-3 bg-gray-900 border border-gray-800 rounded text-white placeholder-gray-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="block w-full p-3 bg-gray-900 border border-gray-800 rounded text-white placeholder-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="block w-full p-3 bg-gray-900 border border-gray-800 rounded text-white placeholder-gray-500"
          />
        </div>
        <div>
          <button
            className="w-full py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600"
            onClick={handleSubmit}
          >
            Continue
          </button>
        </div>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-yellow-500 hover:underline">
            Sign in here.
          </a>
        </p>
      </div>
    </div>
  );
}
