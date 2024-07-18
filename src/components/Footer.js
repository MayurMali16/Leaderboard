import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
         <div className="announcements">
        <p>Coming Soon: New Map - Sky Temple!</p>
        <a href="https://www.twitter.com/yourgame">Follow us on Twitter for updates!</a>
      </div>
      <div className="disclaimers">
        <p>© 2024 Your Game Name. All Rights Reserved.</p>
        <a href="terms-of-service.html">Terms of Service</a>
        <a href="privacy-policy.html">Privacy Policy</a>
      </div>
   
      <div className="social-media">
        <a href="https://www.facebook.com/yourgame"><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.twitter.com/yourgame"><i className="fab fa-twitter"></i></a>
        <a href="https://discord.com/invite/yourgamediscord"><i className="fab fa-discord"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
