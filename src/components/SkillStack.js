import React from 'react';
import SkillStackItem from './SkillStackItem';

const SkillStack = props => {
    if(props.data) {
        var skillIntro = props.data.skillIntro;
        var skillItem = props.data.skills.map((item) => {
            return <SkillStackItem key={item.name} data={item}/>
        })
    }

    return (
        <section id="services">
            <div className="row section-head">
                <div className="twelve columns">
                    <h1>Skill<span>.</span></h1>
                    <p>{skillIntro}</p>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="twelve columns">
                    <div className="service-list bgrid-third s-bgrid-half mob-bgrid-whole">
                    {skillItem}
                    </div>
                </div>
            </div>     
        </section> 
    );
};

export default SkillStack;