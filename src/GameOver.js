import React, { useState } from 'react'

function GameOver(props) {

    const [playerWins, setPlayerWins] = useState(props.winner)



    return (
        <>
            { playerWins ? 
            'You Win!' : 
            <div className="game-over">You Lose!</div>
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