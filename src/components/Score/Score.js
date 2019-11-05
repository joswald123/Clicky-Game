import React from 'react';



const Score = props => (
    <div className="gameScore">
        <h3 className="score">Your score:   { props.total } || Top Score: { props.highScore } </h3>
        <h3 className="status">{props.status}</h3>
    </div>
);

export default Score;
