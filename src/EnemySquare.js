import React, { useContext } from 'react';
import { GameContext } from './GameContext';

const EnemySquare = (props) => {

    // IDK if state is necessary here

    const {playerObject, enemyObject, orientation, setUp, refresher, game} = useContext(GameContext);
    const [player, setPlayer] = playerObject;
    const [enemy, setEnemy] = enemyObject;
    const [direction, setDirection] = orientation;
    const [inSetupPhase, setInSetupPhase] = setUp;
    const [refresh, setRefresh] = refresher;
    const [gameIsOver, setGameIsOver] = game;

    return (
        <div className={ `Square ${ props.square === '-' ? "untouched" : ''} ${ inSetupPhase ? 'unclickable' : '' }`} 
                                data-status={ (props.square !== 'm' && props.square !== 'x') ? 'attackable' : 'notAttackable' } 
                                key={`[${props.rowIndex}, ${ props.columnIndex }]`} data-board="enemyBoard" data-coordinates={ [`${props.rowIndex}${ props.columnIndex }`] } >
                        { props.square === 'm' ? <div className="missed" ></div> : null}
                        { props.square === 'x' ? <div className="hit" ></div> : null}
        </div>
    )

}

export default EnemySquare;