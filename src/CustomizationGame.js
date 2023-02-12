
// import icon_custom from './assets/sheets/icon_custom.png';


export default class CustomizationGame extends Phaser.GameObjects.Container {
    constructor(scene) {
        super(scene, 0, 0);
        // this.tweens = scene.tweens;
        this.init()
    }

    //  preload ()
    // {
    //     this.load.image('icon_custom', icon_custom);
    //     // this.load.image('father', father);
    //     // this.load.image('mother', mother);
    //     // this.load.image('kseniia', kseniia);

    // }

    init() {
        this.scene.mainContainer.add(this)
        this.father = this.scene.add.image(0, 0, 'father');
        this.mother = this.scene.add.image(0, 0, 'mother');
        this.kseniia = this.scene.add.image(0, 0, 'kseniia');

        this.add([this.father, this.mother, this.kseniia]);

        this.father.setPosition(0, -250)
        this.mother.setPosition(0, 250)
        this.kseniia.setPosition(0, 0)

        this.father.name = 'father'
        
        this.players = [this.father, this.mother, this.kseniia]
        this.players.forEach(element => element.setInteractive().once('pointerdown', this.onClick, this))

    }

    onClick(obj) {
        console.log('click CustomizationGame', obj.name);
        // switch (this.scene) {
        //     case SCENES.INTRO_SCENE: {
        //         new IntroScene(this);
        //         break;
        //     }
        //     default:
        //         break;
        // }
    }
}