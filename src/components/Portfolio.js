import React from 'react';
import PortfolioItem from './PortfolioItem';

class Portfolio extends React.Component {
    state = {portfolio: {}};

    render() {
        if(this.props.data) {
            var portfolioMessage = this.props.data.portfolioMessage;
            var portfolioItems = this.props.data.portfolioItems;
            // var portfolioList = portfolioItems.map((item) => {
            //     return <PortfolioItem />
            // });
        }

        return(
            <section id="portfolio">
                <div className="row section-head">
                    <div className="twelve columns">
                    <h1>PORTFOLIO<span>.</span></h1>
                    <hr />
                    <p>{portfolioMessage}</p>
                    </div>
                </div>
                <div className="row items">
                    <div className="twelve columns">
                        <PortfolioItem />
                            {/* {portfolioList} */}
                </div> 
                </div>  
            </section>
        );
    }
}

export default Portfolio;