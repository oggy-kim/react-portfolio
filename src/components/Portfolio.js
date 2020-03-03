import React from 'react';
import PortfolioItem from './PortfolioItem';

class Portfolio extends React.Component {
    render() {
        if(this.props.data) {
            var portfolioMessage = this.props.data.portfolioMessage;
            var projects = this.props.data.projects;
            var portfolioList = projects.map((project) => {
                return <PortfolioItem key={project.name} data={project}/>
            });
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
                        <div id="portfolio-wrapper" className="bgrid-third s-bgrid-third mob-bgrid-half group">
                        {portfolioList}
                        </div>
                    </div> 
                </div>  
                <br />
                <br />
            </section>
        );
    }
}

export default Portfolio;