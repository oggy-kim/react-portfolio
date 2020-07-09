import React from 'react';

class Header extends React.Component {
    
    render() {
        return (
            <header id="main-header">
            <div className="row header-inner">
               <nav id="nav-wrap">         
                  <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
                      <span className='menu-text'>Show Menu</span>
                      <span className="menu-icon"></span>
                  </a>
                  <a className="mobile-btn" title="Hide navigation">
                      <span className='menu-text'>Hide Menu</span>
                      <span className="menu-icon"></span>
                  </a>         
                  <ul id="nav" className="nav">
                     <li className="current"><a className="smoothscroll" href="#hero">Home.</a></li>
                     <li><a className="smoothscroll" href="#about">About Me.</a></li>        
                     <li><a className="smoothscroll" href="#services">Skill.</a></li>
                      <li><a className="smoothscroll" href="#portfolio">Portfolio.</a></li>
                     <li><a className="smoothscroll" href="#contact">Contact.</a></li>
                  </ul> 
               </nav>       
            </div> 
        </header> 
        );
    }
}

export default Header;
