import React from 'react';
import './PortfolioItem.css';

class PortfolioItem extends React.Component {
   render() {
      const { title, category, image, url } = this.props.data;
      const imgsrc = `/images/portfolio/${image}.png`;

      return (
         <div className="portfolio-item bgrid item">
            <div className="item-wrap">
               <a href={url}>
                  <img src={imgsrc} alt={title} />
                  <div className="overlay"></div>                       
                  <div className="portfolio-item-meta">
                     <h5>{title}</h5>
                     <p>{category}</p>
                  </div>                         
               </a>
            </div>
         </div>
      );
   }
}

export default PortfolioItem;