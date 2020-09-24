import React, { useState } from 'react'
import Loser from './game-over.png'
import Winner from './fireworks.png'

function GameOver(props) {

    const [playerWins, setPlayerWins] = useState(props.winner)



    return (
        <>
            { playerWins ? 
            <div className="win">
                <h1>YOU WIN!</h1>
                <img src={ Winner } alt=""/>
            </div>
            : 
            <div className="lose">
                <img src={ Loser } alt=""/>
            </div>
            }
        </>
    )
}

export default GameOver