import React, { useState } from "react";
import SignupImg from "../../src/assets/register.webp";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name });
  };
  return (
    <div className="flex mb-4 ">
      {/* Left: Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-2">
        <div className="max-w-md w-full p-4 bg-white rounded-3xl shadow-md text-center">
          <h1 className="pb-6 font-bold text-3xl text-gray-800">Register</h1>

          <form className="space-y-4" method="post" onSubmit={handleSubmit}>
            <div className="text-left">
              <label
                htmlFor="name"
                className="block mb-2 text-lg text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                type="name"
                placeholder="Name"
                required
                className="w-full p-3 border rounded-lg shadow-md border-gray-300 placeholder:text-base focus:scale-105 transition duration-300 ease-in-out"
                value={name}
                onChange={handleName}
              />
            </div>
            <div className="text-left">
              <label
                htmlFor="email"
                className="block mb-2 text-lg text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                required
                className="w-full p-3 border rounded-lg shadow-md border-gray-300 placeholder:text-base focus:scale-105 transition duration-300 ease-in-out"
                value={email}
                onChange={handleEmail}
              />
            </div>

            <div className="text-left">
              <label
                htmlFor="password"
                className="block mb-2 text-lg text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                required
                onChange={handlePassword}
                value={password}
                className="w-full p-3 border rounded-lg shadow-md border-gray-300 placeholder:text-base focus:scale-105 transition duration-300 ease-in-out"
              />
            </div>

            <button
              type="submit"
              className="w-full p-3 text-white bg-black rounded-lg shadow-lg mt-6 hover:scale-105 transition duration-300 ease-in-out"
            >
              REGISTER
            </button>
          </form>

          {/* Log In Link */}
          <div className="flex flex-col items-center justify-center mt-4 text-sm">
            <p>
              <span className="text-gray-600">have an account?</span>
              <a
                href="/login"
                className="ml-1 text-blue-400 group transition-all duration-100 ease-in-out"
              >
                <span className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Login
                </span>
              </a>
            </p>
          </div>

          {/* Third-party Auth */}
          <div className="flex flex-wrap items-center justify-center mt-5 gap-3">
            {[
              {
                alt: "Google",
                src: "https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/",
              },
              {
                alt: "GitHub",
                src: "https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/",
              },
              {
                alt: "Apple",
                src: "https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/",
              },
            ].map((item, idx) => (
              <button
                key={idx}
                type="button"
                className="p-2 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out"
              >
                <img src={item.src} alt={item.alt} className="w-6 h-6" />
              </button>
            ))}
          </div>

          {/* Terms and Privacy */}
          <div className="mt-4 text-sm text-gray-500 text-center">
            <p>
              By signing in, you agree to our{" "}
              <a
                href="#"
                className="text-blue-400 group transition-all duration-100 ease-in-out"
              >
                <span className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Terms
                </span>
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-blue-400 group transition-all duration-100 ease-in-out"
              >
                <span className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Privacy Policy
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Right: Image Section */}
      <div className="hidden lg:flex w-full lg:w-1/2 h-full">
        <img
          src={SignupImg}
          alt="Login Visual"
          className="w-full h-[750px] object-cover"
        />
      </div>
    </div>
  );
};

export default Signup;
