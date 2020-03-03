import React from 'react';

class About extends React.Component {
    render() {
        if(this.props.data){
            var aboutMe = this.props.data.introduce;
            var aboutMeDetail = this.props.data.history.map((detail) => {
                return (
                    <div className="mob-whole six columns left">
                    <h4>{detail.company}</h4>
                    <h3>({detail.title} {detail.period})</h3>
                    <p>{detail.description}</p>
                </div>
                );
            });
        }
        return(
            <section id="about">
            <div className="row section-head">
                <div className="twelve columns">
                  <h1>Who Am I<span>.</span></h1>
                  <hr />
                  <p>{aboutMe}</p>
               </div>
           </div>
           <div className="row about-content"> 
            {aboutMeDetail}
           </div>
           <br />
           <br />    
        </section> 
        );
    }
}

export default About;