import React from 'react';

const P2 = () => {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      lineHeight: '1.6'
    },
    imageContainer: {
      flex: '1',
      display: 'flex',
      justifyContent: 'center'
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '8px'
    },
    textContainer: {
      flex: '2',
      marginLeft: '20px'
    },
    header: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px'
    },
    list: {
      listStyleType: 'disc',
      paddingLeft: '20px'
    },
    listItem: {
      marginBottom: '10px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img 
          src="https://images.squarespace-cdn.com/content/v1/65fe3c47c8d81c029ba61dfb/10049b8d-9b26-4e0e-a60b-55bfd4fbf771/i3.jpg?format=2500w/400" 
          alt="Supportive community" 
          style={styles.image}
        />
      </div>
      <div style={styles.textContainer}>
        <h1 style={styles.header}>Survivors do not have to suffer alone. We offer:</h1>
        <ul style={styles.list}>
          <li style={styles.listItem}>A community of lived experience and survivorship</li>
          <li style={styles.listItem}>Connections to resources to learn where and how to get help</li>
          <li style={styles.listItem}>Access to group chats and forums to share, learn and heal</li>
        </ul>
      </div>
    </div>
  );
}

export default P2;
