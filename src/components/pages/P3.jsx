import React from 'react';

const P3 = () => {
  const styles = {
    container: {
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      lineHeight: '1.6',
      textAlign: 'center'
    },
    quote: {
      fontStyle: 'italic',
      margin: '20px 0',
      padding: '10px 20px',
      background: '#f5f5f5',
      borderLeft: '4px solid #ccc',
      borderRadius: '8px'
    },
    quoteText: {
      marginBottom: '10px'
    },
    quoteAuthor: {
      textAlign: 'right',
      fontWeight: 'bold',
      marginTop: '10px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.quote}>
        <p style={styles.quoteText}>
          “Please know that you are not alone in this. Many others have gone through similar experiences and have come out stronger on the other side. It’s important to remember that you are not defined by what has happened to you.”
        </p>
        <p style={styles.quoteAuthor}>
          — Alecto AI User Chat Forum
        </p>
      </div>
    </div>
  );
}

export default P3;
