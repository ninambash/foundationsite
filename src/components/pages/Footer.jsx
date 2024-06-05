import React from 'react';

const Footer = () => {
  const footerStyle = {
    background: '#2f2f2f url("path_to_your_image.jpg") no-repeat center center',
    backgroundSize: 'cover',
    color: 'white',
    textAlign: 'center',
    padding: '20px 0',
    fontFamily: 'Arial, sans-serif',
  };

  const inputStyle = {
    marginBottom: '10px',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ced4da',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    textAlign: 'center',
  };

  return (
    <footer style={footerStyle}>
     info@alectoai.com
    </footer>
  );
}

export default Footer;
