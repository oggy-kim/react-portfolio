import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import SkillStack from './components/SkillStack';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends React.Component {
    state = { resumeData: {}};

    async getResumeData() {
        const res = await fetch('/resumeData.json');
        if(res.ok) {
            this.setState({resumeData: await res.json()});
        }
    };

    componentDidMount() {
        this.getResumeData();
    };

    render() {
        return(
            <div className="App">
                <Header />
                <Hero data={this.state.resumeData.main}/>
                <About data={this.state.resumeData.resume}/>
                <SkillStack data={this.state.resumeData.skill}/>
                <Portfolio data={this.state.resumeData.portfolio}/>
                <Contact data={this.state.resumeData.main}/>
                <Footer data={this.state.resumeData.main}/>
            </div>
        );
    }
}

export default App;

