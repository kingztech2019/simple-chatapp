import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
  const [userName, setUserName] = useState();
  const navigate = useNavigate();
  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };
  const getId = () => sessionStorage.getItem("id");
  const nextPage = () => {
    sessionStorage.setItem("id", getId() || userName);
    navigate("/chat");
  };

  return (
    <div class="flex items-center px-2 justify-center h-screen bg-gray-100">
      <div class="px-8 py-6 mt-4 w-full lg:w-1/3 h-1/3 text-left bg-white shadow-lg">
        <h3 class="text-2xl font-bold text-center">Welcome to Simple Chat</h3>
        <form action="">
          <div class="mt-4">
            <div>
              <label class="block" for="email">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                class="w-full px-7 py-6 mt-2 border-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                onChange={handleNameChange}
              />
            </div>

            <div class="flex items-baseline justify-between">
              <button
                onClick={nextPage}
                type="button"
                class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              >
                Get Started
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
