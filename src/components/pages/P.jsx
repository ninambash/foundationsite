import React from 'react';

const P = () => {
  const styles = {
    container: {
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      lineHeight: '1.6'
    },
    header: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px'
    },
    paragraph: {
      marginBottom: '20px'
    },
    quote: {
      fontStyle: 'italic',
      margin: '20px 0',
      padding: '10px 20px',
      background: '#f5f5f5',
      borderLeft: '4px solid #ccc'
    },
    quoteText: {
      marginBottom: '10px'
    },
    quoteAuthor: {
      textAlign: 'right',
      fontWeight: 'bold'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Thank you for joining Alecto AI and believing in the power of survivors to heal, thrive and become the advocates.</h1>
      <p style={styles.paragraph}>
        Thank you for joining Alecto AI and believing in the power of survivors to heal, thrive and become the advocates we need today to stop image-based sexual violence in the future.
      </p>
      <p style={styles.paragraph}>
        The Alecto AI Foundation globally supports survivors of all forms of image-based sexual violence. We believe that survivors can and should lead the movement to ensure that no one else suffers alone after experiencing this form of sexual violence. Digital safety should be the right of everyone, not the privilege of the few.
      </p>
      <div style={styles.quote}>
        <p style={styles.quoteText}>“I wish that we lived in a world where this app is not necessary, but thank you for making this app.”</p>
        <p style={styles.quoteAuthor}>— Alecto AI User Chat Forum</p>
      </div>
    </div>
  );
};

export default P;
