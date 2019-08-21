import PongGame from './lib/Services/PongGame/PongGame';
console.log('Loaded Properly: ' + new Date().toUTCString())


const game = new PongGame('theimportantobject');

game.start();
