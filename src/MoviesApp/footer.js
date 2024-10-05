import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const styles = {
  footer: {
    backgroundColor: 'rgba(0, 0, 0, 0.35)',  // trans black 
    color: '#fff',  // White 
    textAlign: 'center',
    padding: '20px 0px',
    marginTop: '40px',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  column: {
    flex: '1',
    minWidth: '250px',
    padding: '10px',
  },
  heading: {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#E50914',  // red
  },
  text: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: 'rgba(255, 255, 255, 0.8)',  
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.9)',  
    textDecoration: 'none',
    fontSize: '16px',
    margin: '5px 0',
  },
  copyright: {
    borderTop: '1px solid rgba(255, 255, 255, 0.3)',  // white 
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '10px',
  },
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <h5 style={styles.heading}>About Us</h5>
          <p style={styles.text}>A movie app provides detailed information on movies, including cast, ratings, and reviews. Through personalized recommendations and trending lists, the app allows creating watchlists and saving favorite movies for quick access.</p>
        </div>

        <div style={styles.column}>
          <h5 style={styles.heading}>Contact Us</h5>
          <p style={styles.text}>Email: MovieNexus@gmail.com</p>
          <p style={styles.text}>Phone: +123 456 7890</p>
        </div>

        <div style={styles.column}>
          <h5 style={styles.heading}>Follow Us</h5>
          <a href="/" style={styles.icon}>
            <i className="fab fa-facebook"></i> Facebook
          </a><br />
          <a href="/" style={styles.icon}>
            <i className="fab fa-twitter"></i> Twitter
          </a><br />
          <a href="/" style={styles.icon}>
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>
      <div style={styles.copyright}>
        <p>© 2024 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
