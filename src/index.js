import Phaser from 'phaser';
import IntroScene from './Scenes/IntroScene';
import logoImg from './assets/bg.jpg';
import father from './assets/father.png';
import mother from './assets/mother.png';
import kseniia from './assets/kseniia.png';
import father_big from './assets/textures/father_big.png';
import mother_big from './assets/textures/mother_big.png';
import kseniia_big from './assets/textures/kseniia_big.png';
import icon_custom from './assets/sheets/icon_custom.png';


import Preloader from './Preloader';
import ChoiceGames from './ChoiceGames';


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
        this.load.image('father_big', father_big);
        this.load.image('mother_big', mother_big);
        this.load.image('kseniia_big', kseniia_big);
        this.load.image('icon_custom', icon_custom);


        this.mainContainer.setDepth(100)

    }
      
    create ()
    {
        this.logo = this.add.image(this.scale.width / 2, this.scale.height / 2, 'bg');
        


        // this.introScene = new IntroScene(this)
        // this.mainContainer.add([this.introScene]);
        // console.log(this.introScene);

        this.items = new ChoiceGames(this)
        this.mainContainer.add([this.items]);


        this.scale.on('resize', this.resize, this);
        // console.log(this.logo);


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

    

    resize (gameSize, baseSize, displaySize, resolution)
{
    var width = gameSize.width;
    var height = gameSize.height;

        this.cameras.resize(width, height);
        
        this.logo.setSize(width, height);
        this.logo.setPosition(width / 2, height / 2);
        console.log(this.logo);

        // this.introScene = new IntroScene(this)
        // this.mainContainer.add([this.introScene]);
        // this.introScene.setDepth(1000000000)
        // this.sort()
        // console.log("this.introScene");

    
}
}

// export default class Items extends Phaser.GameObjects.Container {
//     constructor(scene) {
//         super(scene, 0, 0);
//         // this.tweens = scene.tweens;
//         this.init()
//     }

//     init() {
//         console.log('Items');
//         this.father = this.scene.add.image(0, 0, 'father');
//         this.mother = this.scene.add.image(0, 0, 'mother');
//         this.kseniia = this.scene.add.image(0, 0, 'kseniia');

//         this.add([this.father, this.mother, this.kseniia]);

//         this.father.setPosition(0, -250),
//         this.mother.setPosition(0, 250),
//             this.kseniia.setPosition(0, 0)
        
//         // this.players = [this.father, this.mother, this.kseniia]
//         // this.players.forEach(element => element.setInteractive().once('pointerdown', this.onClick, this))

//     }

//     onClick() {
//         console.log('click');
//     }
// }

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
    // scene: [MyGame, IntroScene], 
    scene: [MyGame, Preloader],

};

const game = new Phaser.Game(config);
