const playerFactory = (name) => {

    const launchAttack = (gameboard, position) => {
        gameboard.receiveAttack(position);
    }

//Are the players given a gameboard?

//the game loop will take care of which player is active

//how is the computer player created?




    return { launchAttack, name }
}

module.exports = playerFactory;