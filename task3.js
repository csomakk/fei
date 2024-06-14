/***
 * 
 * Please code a component for a bingo game tile</p>
 * The tile should display upto 5 numbers that represent balls in play
 * Assume that a reducer we wrote previously is in use to generate the balls on the tile
 * Format and display the 'minimum wager' using either a currency formatter or native browser apis
 * This is purely a creative task to see how you build the tile.
 * We mainly use React in-house, so it would be a preference to see it written 
 * in the typical React format but not a requirement.
 * Implement styling for the tile; 
 * feel free to choose your preferred styling approach (mock CSS, style objects, styled components, jss etc).
 * Remember to handle edge cases and error conditions where applicable.
 * 
 */


function displayTile(state) {
    document.body.getElementsByClassName('target')[0].innerHTML = `tile be here`;
}

document.onreadystatechange = () => {
    displayTile({
        balls: [3,4],
        title: "Sapphire",
        image: "https://cdn.inx01.gamesysgames.com/ucn/jackpotjoy//api/content/gametiles/bingo-tile-sapphire/scale-1/sapphire-bingo-tile-25-972.jpg"
    });
}