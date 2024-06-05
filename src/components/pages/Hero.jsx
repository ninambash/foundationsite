import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // Adjust the import path as needed

const Hero = () => {
  const styles = {
    heroSection: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '65vh',
      background: 'url(https://images.pexels.com/photos/3612932/pexels-photo-3612932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) no-repeat center center/cover',
      color: '#fff',
      textAlign: 'center'
    },
    navbar: {
      position: 'absolute',
      top: 0,
      width: '100%'
    },
    foundationInfo: {
      marginBottom: '20px'
    },
    h1: {
      fontSize: '4em',
      margin: '0.5em 0'
    },
    button: {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background 0.3s'
    },
    contactButton: {
      background: '#007bff',
      color: '#fff',
      marginRight: '10px'
    },
    donateButton: {
      background: '#28a745',
      color: '#fff'
    }
  };

  const handleDonateNow = () => {
    window.location.href = '/donate'; // Assuming '/donate' is the route for the donate page
  };

  return (
    <div style={styles.heroSection}>
      <div style={styles.navbar}>
        <Navbar />
      </div>
      <h1 style={styles.h1}>End Online Image Abuse</h1>
      <div>
      <Link to="/donate"> {/* Corrected Link component */}
              <button style={{ ...styles.button, ...styles.donateButton }}>Donate</button>
            </Link>
        <button style={{ ...styles.button, ...styles.donateButton }} onClick={handleDonateNow}>Donate Now</button>
      </div>
    </div>
  );
}

export default Hero;
