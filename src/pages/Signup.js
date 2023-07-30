import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../utils/axios";
import Alert from "../components/general/Alert";
import Input from "../components/auth-form-elements/Input";
import Password from "../components/auth-form-elements/Password";
import SubmitButton from "../components/auth-form-elements/SubmitButton";

const defaultProfile = `https://avatarairlines.com/wp-content/uploads/2020/05/Male-placeholder.jpeg`;

// Validator functions
function isUsernameValid(username) {
  const usernameRegex = /^[a-zA-Z][a-zA-Z0-9._]{3,}$/;
  return usernameRegex.test(username);
}

function isPasswordValid(password) {
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return passwordRegex.test(password);
}

function isEmailValid(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function isNameValid(name) {
  const nameRegex = /^[a-zA-Z]+( [a-zA-Z]+)?$/;
  return nameRegex.test(name);
}

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
    profilePicture: null,
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState();

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let errorMessage = "";

    if (value !== "") {
      switch (name) {
        case "username":
          errorMessage = !isUsernameValid(value)
            ? "Invalid username. It should be 4 characters long and alphanumeric."
            : "";
          break;
        case "name":
          errorMessage = !isNameValid(value)
            ? "Invalid name. It should contain only letters. And only one space is allowed."
            : "";
          break;
        case "email":
          errorMessage = !isEmailValid(value) ? "Invalid email address." : "";
          break;
        case "password":
          errorMessage = !isPasswordValid(value)
            ? "Invalid password. It should be 8 characters long and contain at least one letter, one number, and one special character."
            : "";
          break;
        case "confirm-password":
          errorMessage = !isConfirmPasswordValid()
            ? "Password and Confirm Password do not match."
            : "";
          break;
        default:
          break;
      }
    }

    setError(errorMessage);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  const isConfirmPasswordValid = () => {
    return formData.password === confirmPassword;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isUsernameValid(formData.username)) {
      setError(
        "Invalid username. It should be 4 characters long and alphanumeric."
      );
      return;
    } else if (!isNameValid(formData.name)) {
      setError(
        "Invalid name. It should contain only letters. And only one space is allowed."
      );
      return;
    } else if (!isEmailValid(formData.email)) {
      setError("Invalid email address.");
      return;
    } else if (!isPasswordValid(formData.password)) {
      setError(
        "Invalid password. It should be 8 characters long and contain at least one letter, one number, and one special character."
      );
      return;
    } else if (!isConfirmPasswordValid()) {
      setError("Password and Confirm Password do not match.");
      return;
    }

    try {
      const response = await axios.post("/api/auth/signup", formData);
      const responseData = response?.data;
      if (responseData) console.log(responseData);
      else console.log("Response data is undefined");
    } catch (error) {
      console.error(error.response.data.error);
    }
  };

  return (
    <div className="w-full p-4 mx-auto bg-[#efefef] h-screen flex flex-col items-center justify-center">
      {error ? (
        <div className="w-full">
          <Alert
            alertText={error}
            className="absolute bottom-10 max-w-3xl w-[90%] mx-auto left-0 right-0 text-left text-base"
          />
        </div>
      ) : null}
      <div className="max-w-3xl relative mx-auto border max-h-[70vh] md:max-h-[unset] overflow-hidden border-gray-300 shadow-md p-6 py-4 rounded-2xl bg-gray-50 w-full flex flex-col justify-evenly">
        <h3 className="text-2xl mb-4 text-[#0198C6] font-semibold">
          Create an Account
        </h3>
        <form
          onSubmit={handleSubmit}
          autoComplete="new-password"
          className="overflow-y-auto"
        >
          <div className="grid grid-cols-1 gap-4 mb-6 relative">
            <div
              className="border border-[#0198C6] rounded-lg h-20 w-20 mx-auto"
              style={{
                background: `url(${defaultProfile}) center/contain no-repeat`,
              }}
            >
              <input
                type="file"
                id="profilePicture"
                name="profilePicture"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="profilePicture"
                className="w-full h-full block cursor-pointer"
              ></label>
              <p className="absolute capitalize text-[#0198C6] font-semibold -bottom-5 left-0 right-0 text-xs w-full text-center">
                upload picture
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="text"
              name="name"
              id="name"
              label="Name*"
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <Input
              type="text"
              name="username"
              id="username"
              label="Username*"
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <Input
              type="email"
              name="email"
              id="email"
              label="Email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Password
              name="password"
              id="password"
              label="Password*"
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <Password
              name="confirm-password"
              id="confirm-password"
              label="Confirm Password*"
              onBlur={handleBlur}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <SubmitButton>Sign Up</SubmitButton>
        </form>
        <div className="flex justify-center items-center text-base text-gray-500 mt-4">
          <p className="mr-2">Already have an account?</p>
          <Link to="/login" className="text-[#0198C6] font-semibold">
            Login here.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
