import React, { Component } from 'react';
import Player from './Player';

class Players extends Component {
    render() {
        return (
            <div className='players'>
                <h1>Women's World Cup Players</h1>
                <ul>
                    {this.props.players.map(player => {
                        return (
                            <Player 
                            id={player.id}
                            name={player.name}
                            country={player.country}
                            searches={player.searches}
                            key={player.id}
                            />
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Players;