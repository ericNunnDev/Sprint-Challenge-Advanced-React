import React from 'react';

const Player = props => {
    return (
        <div className='player-card'>
            <h2>{props.name}</h2>
            <p><strong>Country: </strong>{props.country}</p>
            <p><strong>Searches: </strong>{props.searches}</p>
        </div>
    )
}

export default Player;