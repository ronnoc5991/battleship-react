import React, { useContext } from 'react';
import {GameContext} from './GameContext';

const UpperPanel = () => {

    const {playerObject, enemyObject, orientation, setUp} = useContext(GameContext);
    const [player, setPlayer] = playerObject;
    const [enemy, setEnemy] = enemyObject;
    const [direction, setDirection] = orientation;
    const [inSetupPhase, setInSetupPhase] = setUp;

    function beginGame () {
        setInSetupPhase(false);
      }

    return (
        <div className="top">
            <button onClick={ beginGame } className="start-button" > 
                <div className="start-button-inner"></div>
            </button>
            <div className="light">
                <div className="light-circle"></div>
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
                <div className="spinners">
                    <div className="spinner-1"></div>
                    <div className="spinner-2"></div>
                </div>
                <div className="inner"></div>
            </div>
        </div>
    )
}

export default UpperPanel;