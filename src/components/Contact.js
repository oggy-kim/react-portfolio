import React from 'react';

class Contact extends React.Component {
    
    render() {
        if(this.props.data) {
            var numberone = this.props.data.numberone;
        }
        return (
            <section id="contact">

            <div className="row section-head">

                <div className="twelve columns">

                <h1>Contact<span>.</span></h1>

                <hr />

                <p>{numberone}
                </p>

            </div>

            </div>

            <div className="row form-section">
            
            <div id="contact-form" className="twelve columns">

                {/* <form name="contactForm" id="contactForm" method="post" action="">

                    <fieldset>

                    <div className="row">

                        <div className="six columns mob-whole">
                            <label for="contactFname">First Name <span className="required">*</span></label>	      						   
                                <input name="contactFname" type="text" id="contactFname" placeholder="First Name" value="" />	      					
                        </div>

                        <div className="six columns mob-whole">	
                            <label for="contactLname">Last Name <span className="required">*</span></label>      						   
                                <input name="contactLname" type="text" id="contactLname" placeholder="Last Name" value="" />	      					
                        </div>	                        

                    </div>

                    <div className="row">

                        <div className="six columns mob-whole">	
                            <label for="contactEmail">Email <span className="required">*</span></label>      						   
                                <input name="contactEmail" type="text" id="contactEmail" placeholder="Email" value="" />	      					
                        </div>

                        <div className="six columns mob-whole">	 
                            <label for="contactSubject">Subject</label>     						   
                                <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject"  value="" />	      					
                        </div>

                    </div>

                    <div className="row">

                        <div className="twelve columns">
                            <label  for="contactMessage">Message <span className="required">*</span></label>
                            <textarea name="contactMessage"  id="contactMessage" placeholder="Your Message" rows="10" cols="50" ></textarea>
                        </div>

                    </div>

                    <div>
                        <button className="submit full-width">Send Message</button>
                        <div id="image-loader">
                            <img src="images/loader.gif" alt="" />
                        </div>
                    </div>

                    </fieldset>
                        
                </form> */}

                
                <div id="message-warning"></div>
                <div id="message-success">
                    <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                    </div>

            </div> 	

            </div> 

            </section> 
        );
    }
};

export default Contact;