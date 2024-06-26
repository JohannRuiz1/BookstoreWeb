import "./AppFooter.css";
export default function AppFooter() {
  const iconStyle = {
    color: '#ffffff',
    textDecoration: 'none',
    backgroundColor: 'transparent'
  };

  return (
    <footer className="container">
      <div className="links">
          <h6 className="link-title">Contact Us</h6>          
          <span className="contact-logo">
              <a href="homepage.html">
                  <i className="fa-solid fa-phone" style={iconStyle}></i>
              </a>
          </span>
          <h6 className="link-title">Follow Us</h6>          
          <span className="contact-logo">
              <a href="homepage.html">
                  <i className="fa-brands fa-facebook" style={iconStyle}></i>                        
              </a>
              <a href="homepage.html">
                  <i className="fa-brands fa-square-twitter" style={iconStyle}></i>
              </a>
          </span>
          <h6 className="link-title">Find Us</h6>          
          <span className="contact-logo">
              <a href="homepage.html">
                  <i className="fa-solid fa-map" style={iconStyle}></i>
              </a>
          </span>
      </div>
      <div className="footer-bookstore">
          <h3 className="footer-title">Scriptoria</h3>          
          <span className="footer-logo">
              <i className="fa-brands fa-fort-awesome" style={iconStyle}></i>
          </span>
      </div>
      
      <div className="copyright">
          <h3 className="copyright-title">2023-2024</h3>          
          <span className="copyright-logo">
              <i className="fa-regular fa-copyright" style={iconStyle}></i>
          </span>
          <h3 className="copyright-title">www.scriptoria.com</h3>          
      </div> 
    </footer>
  );
}
