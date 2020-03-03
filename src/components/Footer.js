import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer>

      <div className="row">       

         <div className="six columns tab-whole right-cols">

            <div className="row">

               <div className="columns">
                  <h3 className="address">Contact Me</h3>
                  <p>
                  oksamha@gmail.com
                  </p>

                  <ul>
                    <li><a href="tel:6473438234">647.343.8234</a></li>
                    <li><a href="tel:1234567890">123.456.7890</a></li>
                    <li><a href="mailto:someone@puremedia.com">someone@puremedia.com</a></li>
                  </ul>                  
               </div>            

               <div className="columns last">
                  <h3 className="contact">SNS</h3>

                  <ul>
                     <li><a href="https://github.com/oggy-kim">Github</a></li>
                     <li><a href="http://oggykim.github.io">Blog</a></li>
                  </ul>
                  
               </div> 

            </div> 

         </div>

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