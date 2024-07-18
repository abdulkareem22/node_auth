import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons from react-icons

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/signup', formData);
      console.log(response.data); // Log response for debugging
      setMessage('User registered successfully'); // Set success message
      setTimeout(() => {
        navigate('/login'); // Redirect to login page after a delay
      }, 2000); // 2-second delay
    } catch (error) {
      console.error('Registration failed:', error.message);
      setError('Registration failed. Please try again.'); // Set specific error message
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  return (
    <>
      <section className="h-100 h-custom" style={{ backgroundColor: "#8fc4b7" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card rounded-3">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                  className="w-100" style={{ borderTopLeftRadius: ".3rem", borderTopRightRadius: ".3rem" }}
                  alt="Sample photo" />
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>

                  {error && <div className="alert alert-danger">{error}</div>}
                  {message && <div className="alert alert-success">{message}</div>} {/* Display success message */}

                  <form className="px-md-2" onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <input type="text" name="username" className="form-control" onChange={handleChange} value={formData.username} required />
                      <label className="form-label" htmlFor="form3Example1q">Username</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="email" name="email" className="form-control" onChange={handleChange} value={formData.email} required />
                      <label className="form-label" htmlFor="form3Example2q">Email</label>
                    </div>

                    <div className="form-outline mb-4" style={{ position: 'relative' }}>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.password}
                        required
                      />
                      <label className="form-label" htmlFor="form3Example3q">Password</label>
                      <span onClick={togglePasswordVisibility} style={{ position: 'absolute', right: '10px', top: '7px', cursor: 'pointer' }}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>

                    <div className='sidelink'>
                      <p>Have An Account? <Link to="/login">Login</Link></p>
                    </div>

                    <button type="submit" className="btn btn-success btn-lg mb-1">Submit</button>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
