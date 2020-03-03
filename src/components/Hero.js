import React from 'react';

class Hero extends React.Component {
    render() {
        if(this.props.data) {
            var name = this.props.data.name;
        }

        return(
            <section id="hero">	
                <div className="row hero-content">
                    <div className="twelve columns flex-container">
                        <div id="hero-slider" className="flexslider">
                            <ul className="slides">
                                <li>
                                    <div className="flex-caption">
                                        <h1>오늘보다 내일이 기대되는,</h1>
                                        <h1>주니어 개발자 {name} 입니다.</h1>	
                                        <p><a className="button stroke smoothscroll" href="#about">About me</a></p>																   
                                    </div>						
                                </li>
                                <li>
                                    <div className="flex-caption">
                                        <h1 >저의 <a className="smoothscroll" href="#portfolio" title="">포트폴리오</a>를 소개합니다. 다양한 경험을 녹여 멋진 작업물을 만들어 나가고자 합니다.</h1>
                                        <p><a className="button stroke smoothscroll" href="#contact">Get In Touch</a></p>										   
                                    </div>
                                </li>					              
                            </ul>
                        </div> 				   
                    </div>  
                </div>    
            </section>
        );
    }
}

export default Hero;