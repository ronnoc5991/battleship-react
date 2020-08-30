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

    function getShipName (shipLength) {
        if (shipLength === 5) {
            return 'CARRIER'
        } else if (shipLength === 4) {
            return 'BATTLESHIP'
        } else if (shipLength === 3 && player.shipsToPlace.length === 3) {
            return 'DESTROYER'
        } else if (shipLength === 3) {
            return 'SUBMARINE'
        } else if (shipLength === 2) {
            return 'PATROL BOAT'
        }
    }

    return (
        <>
        { player.shipsToPlace.length === 5 ? 
            <div className="pointing-hand"><i class="far fa-hand-point-left fa-5x"></i></div>
            :
            ''
        }
        <div className="ship-placer">

            { (player.shipsToPlace.length > 0) ? 
                <>
                    <div className="ship-text">
                        <h3>Place your</h3>
                        <h2>{getShipName(player.shipsToPlace[0])}</h2>
                    </div>
                    <DraggableShips length={ player.shipsToPlace[0] } index={ 0 } direction={ direction } />
                    <div className="switch-container">
                    <i class="fas fa-arrows-alt-v"></i>
                    <button className={`rotate-button ${ direction ? 'switched' : undefined }`} onClick={ toggleDirection }>
                        <div className='switch'></div>
                    </button>
                    <i class="fas fa-arrows-alt-h"></i>
                </div>
                </>
                :
                <div className="end-placement">
                    <h2>START GAME</h2>
                </div>
            }

        </div>
        </>
    )
}

export default ShipPlacer