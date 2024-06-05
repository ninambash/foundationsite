import React from 'react';
import { Link } from 'react-router-dom';

const Subscribe = () => {
  const centerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f8f9fa',
  };

  const formStyle = {
    marginTop: '20px',
  };

  const inputStyle = {
    marginBottom: '10px',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ced4da',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={centerStyle}>
      <h2>Sign up to stay in touch!</h2>
      <form style={formStyle}>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" style={inputStyle} />
        <button type="submit" style={buttonStyle}>Sign Up</button>
      </form>
    </div>
  );
}

export default Subscribe;
