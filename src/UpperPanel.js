import React, { useContext } from 'react';
import {GameContext} from './GameContext';

const UpperPanel = () => {

    const {playerObject, enemyObject, orientation, setUp, refresher, game} = useContext(GameContext);
    const [player, setPlayer] = playerObject;
    const [enemy, setEnemy] = enemyObject;
    const [direction, setDirection] = orientation;
    const [inSetupPhase, setInSetupPhase] = setUp;
    const [refresh, setRefresh] = refresher;
    const [gameIsOver, setGameIsOver] = game;

    function beginGame () {
        setInSetupPhase(false);
    }

    function surrender () {
        setGameIsOver(true)
    }

    return (
        <div className="control-panel">
            <div className="light">
                <div className="light-circle"></div>
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
                <div className={ `spinners ${inSetupPhase ? '' : 'animate-spinner'}`}>
                    <div className={`spinner-1 ${ inSetupPhase ? '' : 'on-1' }`}></div>
                    <div className={`spinner-2 ${ inSetupPhase ? '' : 'on-2'}`}></div>
                </div>
                <div className="inner"></div>
            </div>
            <div className="buttons">
                <div className="screw screw-upper-1"></div>
                <div className="screw screw-upper-2"></div>
                <div className="screw screw-lower-1"></div>
                <div className="screw screw-lower-2"></div>
                <div className="control-label">START</div>
                <button onClick={ beginGame } className="start-button" > 
                    <div className="start-button-inner"></div>
                </button>
                <div className="control-label">SURRENDER</div>
                <button onClick={ surrender } className="surrender-button" > 
                    <div className="surrender-button-inner"></div>
                </button>
            </div>
        </div>
    )
}

export default UpperPanel;