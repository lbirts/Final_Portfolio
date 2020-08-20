import React from 'react';
import './footer.css'
 
function Footer(props) {

  return (
    <div id="footer">
        <a href="/#" className="up-btn-wrapper" alt="Go to top">
            <i className="fa fa-angle-up up-btn"></i>
        </a>
        <div className="footer-icons">
          <a href="https://github.com/lbirts" target="_blank" rel="noopener noreferrer" aria-label="Github" data-tip="Github" data-place="right">
            <i className="fa fa-github footer-i"></i>
          </a>
          <a href="https://linkedin.com/lauren-birts" target="_blank" rel="noopener noreferrer" aria-label="Linkedin" data-tip="Linkedin" data-place="right">
            <i className="fa fa-linkedin footer-i"></i>
          </a>
          <a href="https://twitter.com/codeLo" target="_blank" rel="noopener noreferrer" aria-label="Twitter" data-tip="Twitter" data-place="right">
            <i className="fa fa-twitter footer-i"></i>
          </a>
          <a href="https://medium.com/@birtslauren" target="_blank" rel="noopener noreferrer" aria-label="Medium" data-tip="Medium" data-place="right">
            <i className="fa fa-medium footer-i"></i>
          </a>
        </div>
        <hr/>
        <p>Made with <span role="img" aria-label="heart">❤️</span> by Lauren Birts</p>
        <p class="copyright">© 2020 Lauren Birts</p>
    </div>
  )
}
 
export default Footer;