// src/components/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import css from '../../assets/css/style.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const history = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', formData);
      console.log(response.data);
      alert('Login successful');
      // Assuming you have a dashboard or home page to redirect to after login
      history('/');
    } catch (error) {
      console.error(error);
      alert('Login failed');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: '#8fc4b7' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-8 col-xl-6">
            <div className="card rounded-3">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                className="w-100"
                style={{ borderTopLeftRadius: '.3rem', borderTopRightRadius: '.3rem' }}
                alt="Sample photo"
              />
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Login Info</h3>
                <form className="px-md-2" onSubmit={handleSubmit}>
                  <div  className="form-outline mb-4">
                    <input
                      type="email"
                     
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label className="form-label" htmlFor="form3Example1q">Email</label>
                  </div>
                  <div  className="form-outline mb-4" style={{ position: 'relative' }}>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      className="form-control"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <label className="form-label" htmlFor="form3Example1q">Password</label>
                    <span onClick={togglePasswordVisibility} style={{ position: 'absolute', right: '10px', top: '7px', cursor: 'pointer' }}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                  </div>
                  <div className="rightsidelink">
                    <p><Link to="/forget-password">Forget Password?</Link></p>
                  </div>
                  <div className="sidelink">
                    <p>Want to signup? <Link to="/register">Register</Link></p>
                  </div>
                  <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-success btn-lg mb-1">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
