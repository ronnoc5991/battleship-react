import React from 'react'
import WaveRow from './WaveRow'

const IntroAnimation = () => {

    const waveRows = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

    return (
        <div className="intro-animation-container">
            <div className="logo-container">
                {/* <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/WIKIPEDIA15_BATTLESHIP.svg/1024px-WIKIPEDIA15_BATTLESHIP.svg.png" alt='logo' /> */}
            </div>

            <div className="sky">
                <div className="sun"></div>
            </div>
            <div className="wave-parent">
                { waveRows.map((row, rowIndex) => {
                return <WaveRow number = { row } />
            }) }
            </div>

        </div>
    )
}

export default IntroAnimation;