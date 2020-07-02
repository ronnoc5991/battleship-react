import React, { useContext } from 'react';
import { GameContext } from './GameContext';

const EnemySquare = (props) => {

    // IDK if state is necessary here

    const {playerObject, enemyObject, orientation, setUp} = useContext(GameContext);
    const [player, setPlayer] = playerObject;
    const [enemy, setEnemy] = enemyObject;
    const [direction, setDirection] = orientation;
    const [inSetupPhase, setInSetupPhase] = setUp;

    return (
        <div className={ `Square ${ props.square === '-' ? "untouched" : ''} 
                                ${ props.square === 'm' ? 'miss' : ''}
                                ${ props.square === 'x' ? 'hit' : ''} `} key={`[${props.rowIndex}, ${ props.columnIndex }]`} data-board="enemyBoard" data-coordinates={ [`${props.rowIndex}${ props.columnIndex }`] } >
        </div>
    )

}

export default EnemySquare;