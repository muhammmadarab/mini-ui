import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../utils/axios";
import { Link } from "react-router-dom";
import Alert from "../components/general/Alert";
import { EmailIcon } from "../assets/Icons";
import Input from "../components/auth-form-elements/Input";
import Password from "../components/auth-form-elements/Password";
import SubmitButton from "../components/auth-form-elements/SubmitButton";

const Login = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/login", formData);
      const { accessToken, userId } = response?.data;

      if (!accessToken) return setError("Invalid Credentials");

      setError("");
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userId", userId);
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
      <div className="max-w-md relative mx-auto border border-gray-300 shadow-md p-6 py-4 rounded-2xl bg-gray-50 w-full flex flex-col justify-evenly">
        <h3 className="text-2xl mb-4 text-[#0198C6] font-semibold">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <Input
              type="text"
              id="username"
              name="username"
              label="Username or Email"
              icon={<EmailIcon className="text-[#0198c6]" />}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <Password onChange={handleChange} required />
          </div>
          <SubmitButton>Login</SubmitButton>
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
