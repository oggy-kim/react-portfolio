import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    
    render() {
        if(this.props.data) {
            var numberone = this.props.data.numberone;
            var networks = this.props.data.social.map((network) => {
                return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
            })
        }
        return (
            <section id="contact">
            <div className="row section-head">
                <div className="twelve columns">
                <h1>Contact<span>.</span></h1>
                <hr />
                <p>{numberone}</p>
                <ul className="social-links">
                    {networks}  
                </ul>
                </div>
            </div>
        </section> 
        );
    }
};

export default Contact;