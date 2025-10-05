import React from "react";

import "../Style/footer.css";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Logo + Tagline */}
        <div className="footer-brand">
          <h2>HealthPlus</h2>
          <p>Your trusted digital pharmacy & healthcare partner.</p>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h4>Stay Updated</h4>
          <p>Subscribe for health tips & exclusive offers.</p>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer Links */}
      <div className="footer-container">

        {/* Shop */}
        <div className="footer-links">
          <h4>Shop</h4>
          <ul>
            <li><a href="/medicines">Medicines</a></li>
            <li><a href="/wellness">Wellness</a></li>
            <li><a href="/devices">Medical Devices</a></li>
            <li><a href="/personal-care">Personal Care</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-links">
          <h4>Support</h4>
          <ul>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/delivery">Delivery Info</a></li>
            <li><a href="/returns">Returns</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-links">
          <h4>Legal</h4>
          <ul>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/disclaimer">Medical Disclaimer</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📍 123 Health Street, Chennai, India</p>
          <p>📞 +91 6380010292</p>
          <p>✉ kalaimani.lakshmanan14@gmail.com</p>
        </div>
      </div>

      {/* Social + Payment */}
      <div className="footer-middle">
        <div className="social-icons">
          <a href="https://www.facebook.com/" target="_blank">Facebook </a>
          <a href="https://www.instagram.com/" target="_blank">Instagram </a>
          <a href="https://x.com/i/flow/login" target="_blank">Twitter </a>
          <a href="https://www.linkedin.com/company/login" target="_blank">Linkedin </a>
        </div>
      </div>

      {/* Disclaimer + Copyright */}
      <div className="footer-bottom">
        <p className="disclaimer">
          *Disclaimer: HealthPlus is a digital healthcare platform. Always consult your doctor
          before taking any medication. Information on this site is for educational purposes only.
        </p>
        <p>© {new Date().getFullYear()} HealthPlus. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

