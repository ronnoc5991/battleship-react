import React, {useContext} from 'react'
import DraggableShips from './DraggableShips';
import {GameContext} from './GameContext';

const ShipPlacer = () => {

    const {playerObject, enemyObject, orientation, setUp, refresher, game} = useContext(GameContext);
    const [player, setPlayer] = playerObject;
    const [enemy, setEnemy] = enemyObject;
    const [direction, setDirection] = orientation;
    const [inSetupPhase, setInSetupPhase] = setUp;
    const [refresh, setRefresh] = refresher;
    const [gameIsOver, setGameIsOver] = game;

    function toggleDirection () {
        setDirection(!direction);
    }

    return (
        <div className="ship-placer">
                { player.shipsToPlace.map((ship, shipIndex) => {
                    return <DraggableShips length={ ship } index={ shipIndex } direction={ direction } />
                }) }
                <button className={`rotate-button ${ direction ? 'rotated' : undefined }`} onClick={ toggleDirection }>
                    <div className="switch">
                        <div className="arrow"></div>
                    </div>
                </button>
        </div>
    )
}

export default ShipPlacer