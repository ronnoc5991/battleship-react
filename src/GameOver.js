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


    // <div className="rolling-wave wave-1"></div>
    // <div className="rolling-wave wave-2"></div>
    // <div className="rolling-wave wave-3"></div>
    // <div className="rolling-wave wave-4"></div>
    // <div className="rolling-wave wave-5"></div>
    // <div className="rolling-wave wave-6"></div>
    // <div className="rolling-wave wave-7"></div>
    // <div className="rolling-wave wave-8"></div>
    // <div className="rolling-wave wave-9"></div>
    // <div className="rolling-wave wave-10"></div>