import React from "react";
import "./style.css";

const EmojiCard = props => (
    
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} id={props.id}
             onClick={ () => props.selectEmoji(props.id)} className="select"/>
            
        </div>
        
    </div>
);

export default EmojiCard;