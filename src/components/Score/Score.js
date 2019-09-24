import React from 'react';
// import FaBeer from 'react-icons/lib/fa/beer';

const Score = props => (
    <div className="gameScore">
        <h3 className="score">Your score: { props.total }</h3>
        <h3 className="status">{props.status}</h3>
    </div>
);

export default Score;