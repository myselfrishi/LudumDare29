/*global Phaser*/
/*global menuState*/

/**
 * @author Steve Richey http://www.steverichey.com @stvr_tweets
 */

var gameWidth = 150;
var gameHeight = 300;
var zoom = 2;

var game = new Phaser.Game(gameWidth, gameHeight, Phaser.CANVAS, 'game', playState, false, false);