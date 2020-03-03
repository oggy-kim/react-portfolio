import React from 'react';

const SkillStackItem = (props) => {
    console.log(props.data);
    if(props.data) {
        var name = props.data.name;
        var url = `/images/skills/${name}.png`;
        var description = props.data.description;
    }

    return (
        <div className="bgrid">
                <img src={url} alt={props.data.name} style={{height:"100px"}}/>
            <h3>{props.data.name}</h3>
            <div className="service-content">	                
                <p>{description}</p>   
            </div>      
        </div> 
                   
    );
};

export default SkillStackItem;