import React from "react";
import { auth } from "../confi/firebase";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Authentication() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(err);
    }
  };

  return (
    <div className="h-full w-full bg-black flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            email
          </label>
          <input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">
            Password
          </label>
          <input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={signIn}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Authentication;
