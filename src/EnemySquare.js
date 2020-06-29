import React, { useContext } from 'react';
import {EnemyContext} from './EnemyContext';

const Square = (props) => {

    const { object, board } = useContext(EnemyContext);
    const [enemy, setEnemy] = object;
    const [enemyBoard, setEnemyBoard] = board;

    return (
        <div className={ `Square ${ props.square === '-' ? "untouched" : ''} 
                                ${ props.square === 'm' ? 'miss' : ''}
                                ${ props.square === 'x' ? 'hit' : ''} `} key={`[${props.rowIndex}, ${ props.columnIndex }]`} data-board="enemyBoard" data-coordinates={ [`${props.rowIndex}${ props.columnIndex }`] } >
        </div>
    )

}

export default Square;