import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../utils/axios";
import { Link } from "react-router-dom";
import Alert from "../components/General/Alert";
import { EyeOpenIcon, EyeCloseIcon, EmailIcon, PwdIcon } from "../assets/Icons";

const Login = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [showpwd, setShowPwd] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/login", formData);
      const { accessToken } = response?.data;

      if (!accessToken) return setError("Invalid Credentials");

      setError("");
      localStorage.setItem("accessToken", accessToken);
      history.push("/");
    } catch (error) {
      setError(error.response?.data?.error || "Failed to login");
    }
  };

  return (
    <div className="w-full p-4 mx-auto bg-[#efefef] h-screen flex flex-col items-center justify-center">
      {error && (
        <div className="w-full">
          <Alert
            alertText={error}
            className="absolute bottom-10 max-w-3xl w-[90%] mx-auto left-0 right-0 text-left text-base"
          />
        </div>
      )}
      <div className="max-w-3xl relative mx-auto border border-gray-300 shadow-md p-6 py-4 rounded-2xl bg-gray-50 w-full flex flex-col justify-evenly">
        <h3 className="text-2xl mb-4 text-[#0198C6] font-semibold">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block mb-2 text-base font-medium text-[#0198C6]"
            >
              Username or Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <EmailIcon className="text-[#0198C6]" />
              </div>
              <input
                type="text"
                id="username"
                name="username"
                className="bg-gray-50 border tracking-wider text-[#0198C6] border-gray-300 text-base rounded-lg focus:ring-0 block w-full pl-10 p-2.5"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-base font-medium text-[#0198C6]"
            >
              Your password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <PwdIcon className="text-[#0198C6]" />
              </div>
              <input
                type={showpwd ? "text" : "password"}
                name="password"
                id="password"
                className="shadow-sm pl-10 bg-gray-50 border border-gray-300 tracking-wider text-[#0198C6] text-base rounded-lg focus:ring-0 block w-full p-2.5"
                onChange={handleChange}
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 cursor-pointer">
                <button type="button" onClick={() => setShowPwd(!showpwd)}>
                  {!showpwd ? <EyeCloseIcon /> : <EyeOpenIcon />}
                </button>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="flex justify-center text-white w-full max-w-sm mx-auto bg-[#0198C6] hover:bg-[#0198c6cc] active:ring-0 focus:ring-0 font-medium rounded-lg text-base px-5 py-2.5 text-center"
          >
            Login
          </button>
        </form>
        <div className="flex justify-center items-center text-base text-gray-500 mt-4">
          <p className="mr-2">Don't have an account?</p>
          <Link to="/signup" className="text-[#0198C6] font-semibold">
            Sign up here.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
