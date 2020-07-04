const shipFactory = (length) => {

    let ship = [];

    //is it important that the ship knows where it is?

    let placement = [];
    let i;
    for (i=0; i < length; i++) {
        ship.push('safe');
    }

    const hit = (coordinates) => {
        for (i=0; i<placement.length; i++) { //search ship placement for these coordinates
            if (placement[i][0] === Number(coordinates[0]) && placement[i][1] === Number(coordinates[1])) {
                ship[i] = 'hit'
            }
        }
    }

    const isSunk = () => {
        let sunk = false;
        let hitCount = 0;
        for (i=0; i<ship.length; i++) {
            if (ship[i] === 'hit') {
                hitCount += 1;
            }
        }
        if (hitCount === ship.length) {
            sunk = true;
        }
        return sunk;
    }

    return { placement, ship, hit, isSunk };
}

module.exports = shipFactory;