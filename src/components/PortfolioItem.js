import React from 'react';

class PortfolioItem extends React.Component {
    render() {
    return (
<div id="portfolio-wrapper" className="bgrid-fourth s-bgrid-third mob-bgrid-half group">

<div className="bgrid item">
 <div className="item-wrap">

    <a href="portfolio.html">
       <img src="images/portfolio/grizzly.jpg" alt="Grizzly" />
       <div className="overlay"></div>                       
       <div className="portfolio-item-meta">
                   <h5>Grizzly</h5>
             <p>Photography</p>
             </div>                         
    </a>

 </div>
 </div>

<div className="bgrid stack item">
 <div className="item-wrap">

    <a href="portfolio.html">
       <img src="images/portfolio/beetle.jpg" alt="Beetle" />                        
       <div className="overlay">
           <div className="portfolio-item-meta">
                   <h5>Beetle</h5>
             <p>Branding</p>
                </div>
       </div>                        
    </a>

 </div>
 </div> 

<div className="bgrid item">
 <div className="item-wrap">

    <a href="portfolio.html">
       <img src="images/portfolio/banjo-player.jpg" alt="Banjo Player" />
       <div className="overlay">
           <div className="portfolio-item-meta">
                   <h5>Banjo Player</h5>
             <p>Videography</p>
                </div>
       </div>                       
    </a>

 </div>
 </div> 

</div>
    );
}
}

export default PortfolioItem;