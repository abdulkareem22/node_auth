import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/auth/reset-password/${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPassword }), // Send newPassword instead of password
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Password reset successful now login first');
        setTimeout(() => {
          navigate('/login'); // Redirect to login page after a delay
        }, 4000);
      } else {
        setMessage(data.message || 'Error resetting password');
      }
    } catch (error) {
      setMessage('Server error');
    }
  };

  return (
    <>
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
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Reset Password</h3>

                  {message && <div className="alert alert-info">{message}</div>}

                  <form className="px-md-2" onSubmit={handleSubmit}>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example1q"
                        name="newPassword"
                        className="form-control"
                        required
                        placeholder="Enter new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Example1q">New Password</label>
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
    </>
  );
};

export default ResetPassword;
