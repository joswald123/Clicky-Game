import React from "react";
import "./style.css";

const EmojiCard = props => (
    <div className="card">
        <div className="img-container">
        <img alt={props.name} src={props.image} />
    </div>

    <span onClick={() => props.selectEmoji(props.id)} className="select">
        x
    </span>
    
    </div>
);

export default EmojiCard;