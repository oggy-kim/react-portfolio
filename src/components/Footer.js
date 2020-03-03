import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer>
               <div className="row">       
                  <div className="twelve columns tab-whole right-cols"></div>
                  <p className="copyright">&copy; Copyright 2014 Puremedia. Design by <a href="http://www.styleshout.com/">Styleshout.</a></p>        
                  <div id="go-top">
                     <a className="smoothscroll" title="Back to Top" href="#hero"><span>Top</span><i className="fa fa-long-arrow-up"></i></a>
                  </div>
               </div> 
            </footer>
        );
    }
};

export default Footer;