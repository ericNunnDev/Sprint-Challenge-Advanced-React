import React, { Component } from 'react';
import Player from './Player';

class Players extends Component {
    render() {
        return (
            <div>
                <h1>Players List</h1>
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