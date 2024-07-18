import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Password reset email sent');
      } else {
        setMessage(data.message || 'Error sending password reset email');
      }
    } catch (error) {
      setMessage('Server error');
    }
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
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Forget Password</h3>

                {message && <div className="alert alert-info">{message}</div>}

                <form className="px-md-2" onSubmit={handleSubmit}>
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example1q"
                      name="email"
                      className="form-control"
                      required
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="form-label" htmlFor="form3Example1q">Email</label>
                  </div>

                  <div className='sidelink'>
                    <p>Want to signup? <Link to="/register">Register</Link></p>
                  </div>

                  <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-success btn-lg mb-1">Submit</button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
