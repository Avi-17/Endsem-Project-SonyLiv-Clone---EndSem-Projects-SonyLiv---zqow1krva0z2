import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate("");

  const handleSignIn = (e) => {
    e.preventDefault();

    const payload = {
      email: email,
      password: password,
      appType: "ott",
    };

    fetch("https://academics.newtonschool.co/api/v1/user/login", {
      method: "POST",
      headers: {
        accept: "application/json",
        projectID: "d63nfx122ebp",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.token);
        setError(null);
        navigate("/");
        props.setSignedIn(true);
        alert("Login successful");
      })
      .catch((error) => {
        alert("Bad credentials");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md p-8 space-y-8">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        <div className="space-y-4">
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
            onClick={handleSignIn}
          >
            Continue
          </button>
        </div>
        <p className="text-center mt-4 text-white-500">
          New to SonyLiv?{" "}
          <a href="/signup" className="text-yellow-500 hover:underline">
            Sign Up here.
          </a>
        </p>
      </div>
    </div>
  );
}
