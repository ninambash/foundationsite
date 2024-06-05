import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const styles = {
        heroSection: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px',
          height: '100px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        },
        foundationInfo: {
          flex: '1',
          textAlign: 'left',
          padding: '20px'
        },
        actions: {
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '20px'
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
          color: '#fff'
        },
        donateButton: {
          background: '#28a745',
          color: '#fff'
        }
      };
    
      return (
        <div style={styles.heroSection}>
          <div style={styles.foundationInfo}>
            <h1>AlectoFoundation </h1>
          </div>
          <div style={styles.actions}>
            <button style={{ ...styles.button, ...styles.contactButton }}>Contact Us</button>
            <Link to="/donate"> {/* Corrected Link component */}
              <button style={{ ...styles.button, ...styles.donateButton }}>Donate</button>
            </Link>
          </div>
        </div>
      );
    }
    
export default Navbar;
