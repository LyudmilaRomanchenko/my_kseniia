import Phaser from 'phaser';
import logoImg from './assets/bg.jpg';
import father from './assets/father.png';
import mother from './assets/mother.png';
import kseniia from './assets/kseniia.png';

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.mainContainer = this.add.container(this.scale.width / 2, this.scale.height / 2);
        this.load.image('bg', logoImg);
        this.load.image('father', father);
        this.load.image('mother', mother);
        this.load.image('kseniia', kseniia);

        this.mainContainer.setDepth(100)

    }
      
    create ()
    {
        this.logo = this.add.image(this.scale.width / 2, this.scale.height / 2, 'bg');
        this.father = this.add.image(this.scale.width / 2, this.scale.height / 2, 'father');
        this.mother = this.add.image(this.scale.width / 2, this.scale.height / 2, 'mother');
        this.kseniia = this.add.image(this.scale.width / 2, this.scale.height / 2, 'kseniia');

        this.mainContainer.add([this.father, this.mother, this.kseniia]);

        this.father.setPosition(0, -250),
        this.mother.setPosition(0, 250),
            this.kseniia.setPosition(0, 0)
        
        this.players = [this.father, this.mother, this.kseniia]
        this.players.forEach(element => element.setInteractive().once('pointerdown', this.onClick, this))

        this.scale.on('resize', this.resize, this);
        console.log(this.logo);


    //     gameSize.width;
    // var height = gameSize.height;
      
        // this.tweens.add({
        //     targets: logo,
        //     y: 450,
        //     duration: 2000,
        //     ease: "Power2",
        //     yoyo: true,
        //     loop: -1
        // });
    }

    onClick() {
        console.log('click');
    }

    resize (gameSize, baseSize, displaySize, resolution)
{
    var width = gameSize.width;
    var height = gameSize.height;

        this.cameras.resize(width, height);
        
        this.logo.setSize(width, height);
        this.logo.setPosition(width / 2, height / 2);
        console.log(this.logo);

    
}
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 600,
    height: 900,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: 'phaser-example',
    },
    scene: MyGame
};

const game = new Phaser.Game(config);
