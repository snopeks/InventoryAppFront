import React from 'react';


const Footer = () =>(
      <div>
        <footer>
          <div className="appInfo">
            <p>KnowYourStuff</p>
            <p>Created by <a className="footer-owner" href="https://github.com/snopeks">Stephanie</a> and <a className="footer-owner" href="https://github.com/stevengill">Steve</a></p>
          </div>
          <div id="footer-list">
            <ul className="list-unstyled">
              <li><a href="/about"><p className="footer-text">About</p></a></li>
              <li><a href="/contact"><p className="footer-text">Contact Us</p></a></li>
            </ul>
          </div>
        </footer>
      </div>
)







export default Footer