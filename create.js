var player1;
var player2;
var platforms;
var p1Left, p1Right, p1Jump;
var p2Left, p2Right, p2Jump;

function create() {

    player1 = game.add.sprite(100, 200, 'player1');

    

    game.physics.arcade.enable(player1); //Activamos fisica "Arcade" para el player1

    player1.body.collideWorldBounds = true; //El player1 va a chocar contra las orillas de la pantalla
    player1.body.gravity.y = 500;           //Ajustamos la gravedad del player1.

    //Creacion de plataformas en grupo-----------------------
    
    platforms = game.add.physicsGroup(); //creamos el grupo llamado platforms

    platforms.create(500, 150, 'platform');  //Vamos agregando instancias de la plataforma en posiciones diferentes
    platforms.create(-200, 300, 'platform');
    platforms.create(400, 450, 'platform');

    platforms.setAll('body.immovable', true);  //A todas lses asignamos que no se puedan mover.
    


    //creacion de botones para el input ------------------------------

    p1Left = game.input.keyboard.addKey(Phaser.Keyboard.A);
    p1Right = game.input.keyboard.addKey(Phaser.Keyboard.D);
    p1Jump = game.input.keyboard.addKey(Phaser.Keyboard.W);

}