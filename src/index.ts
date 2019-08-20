import Canvas from './lib/Models/Canvas/index';
import Rectangle from './lib/Models/Rectangle/Rectangle';
import Vector from './lib/Models/Vector/Vector';
import PongGame from './lib/Services/PongGame/PongGame';
console.log('Loaded Properly: ' + new Date().toUTCString())

const game = new PongGame('theimportantobject');

game.start();
