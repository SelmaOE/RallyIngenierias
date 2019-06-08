function preload() {
	game.stage.backgroundColor = '#285885'; //Color del background en hexadecimal
    
	//game.load.image('fondo','https://pbs.twimg.com/media/C3df3qaUEAEW-DD.jpg');
    
	game.load.crossOrigin = 'anonymous';
    
	game.load.image('platform', 'https://phaser.io/content/tutorials/coding-tips-003/ice-platform.png');
    
	game.load.image('snowball','https://vignette.wikia.nocookie.net/clubpenguin/images/0/04/Snowball.png/revision/latest?cb=20140616182803')

	game.load.spritesheet('trump', 'https://3.bp.blogspot.com/-_NVjscKbE7Q/WLB4GtYM6PI/AAAAAAAAIyk/iGm67QmaiV0v0VKNSnG5pzenizWGsbvyQCLcB/s1600/trump_run.png', 100, 100, 24);

	game.load.spritesheet('pen', 'https://scontent.fmex5-1.fna.fbcdn.net/v/t34.0-12/28233744_1924343230909354_1883905372_n.png?oh=921bc8c264673fbaf24da83af66e9e59&oe=5AA482B7', 41, 42, 64);
    

}
