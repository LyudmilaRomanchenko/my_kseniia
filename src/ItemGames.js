
// import icon_custom from './assets/sheets/icon_custom.png';


export default class ItemGames extends Phaser.GameObjects.Container {
    constructor(scene) {
        super(scene, 0, 0);
        // this.tweens = scene.tweens;
        // this.init()
    }

    //  preload ()
    // {
    //     this.load.image('icon_custom', icon_custom);
    //     // this.load.image('father', father);
    //     // this.load.image('mother', mother);
    //     // this.load.image('kseniia', kseniia);

    // }

    init() {
        this.icon_custom = this.scene.add.image(0, 0, 'icon_custom');

        this.add([this.icon_custom]);

        this.icon_custom.setPosition(0, -250),
        // this.mother.setPosition(0, 250),
        //     this.kseniia.setPosition(0, 0)
        
        this.players = [this.icon_custom]
        this.players.forEach(element => element.setInteractive().once('pointerdown', this.onClick, this))

    }

    onClick(obj) {
        console.log('click', obj);
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