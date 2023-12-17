import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    
      
      <div class=" footer-row row">
        <div class="footer-col">
          <h4>company</h4>
          <ul>
            <li><a href="#">about us</a></li>
            <li><a href="#">our services</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">affiliate program</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>get help</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><Link to="cart">shipping</Link></li>
            <li><Link to="cart">returns</Link></li>
            <li><Link to="cart">order status</Link></li>
            <li><Link to="cart">payment options</Link></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>online shop</h4>
          <ul>
            <li><Link to="shop">watch</Link></li>
            <li><Link to="shop">bag</Link></li>
            <li><Link to="shop">shoes</Link></li>
            <li><Link to="shop">dress</Link></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>follow us</h4>
          <div class="social-links">
            <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com/?lang=en-in"><i class="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/home/?originalSubdomain=in"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
   
            
  
  )
}

export default Footer