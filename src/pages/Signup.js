import React, { useState } from 'react';
import axios from "../utils/axios"

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post('/api/auth/signup', formData);

      const responseData = response?.data;

      if (responseData) console.log(responseData);
      else console.log('Response data is undefined');
    } catch (error) {
      console.error(error.response.data.error);
    }
  };


  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="file" name="profilePicture" onChange={handleFileChange} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
