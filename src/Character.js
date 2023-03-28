
// import icon_custom from './assets/sheets/icon_custom.png';
import {eventsCenter} from './EventsCenter';



export default class Character extends Phaser.GameObjects.Container {
    constructor(scene, assets) {
        super(scene, 0, 0);
        this.tweens = scene.tweens;
        this.assets = assets;
        this.init(this.assets)
    }

    //  preload ()
    // {
    //     this.load.image('icon_custom', icon_custom);
    //     // this.load.image('father', father);
    //     // this.load.image('mother', mother);
    //     // this.load.image('kseniia', kseniia);

    // }

    init(assets) {
        this.scene.mainContainer.add(this)
        this.addFace(assets.face)
        
        // this.father = this.scene.add.image(0, 0, 'father');
        // this.mother = this.scene.add.image(0, 0, 'mother');
        // this.kseniia = this.scene.add.image(0, 0, 'kseniia');

        // this.add([this.father, this.mother, this.kseniia]);

        // this.father.setPosition(0, -250)
        // this.mother.setPosition(0, 250)
        // this.kseniia.setPosition(0, 0)

        // this.father.name = 'father'
        
        // this.players = [this.father, this.mother, this.kseniia]
        // this.players.forEach(element => element.setInteractive().once('pointerdown', this.onClick, this))

    }

    hide() {
        this.tweens.add({
            targets: this,
            delay: 500,
            duration: 500,
            scale: 0,
        });
        return this;
    }

    selected() {
        this.tweens.add({
            targets: this,
            duration: 500,
            scale: '+=0.3',
        });
        return this;
    }

    addFace(face) {
        if (!face) {
            return
        }

        this.face = this.scene.add.image(0, 0, face);
        this.face.setInteractive().once('pointerdown', this.onClick, this)

        this.add([this.face]);
        return this;
    }

    addFaceBig() {
        if (!this.assets.face_big) {
            return
        }

        this.faceBig = this.scene.add.image(0, 0, this.assets.face_big).setDepth(1);
        // this.face.setInteractive().once('pointerdown', this.onClick, this)
        this.add([this.faceBig]);
        this.sort()

        return this;
    }

    addAsset(asset, depth) {
        if (!asset) {
            return
        }
        this[asset] = this.scene.add.image(0, 0, asset).setDepth(depth);
        this.add([this[asset]]);
        this.sort()
        return this;
    }

    onClick(obj) {
        this.selected()
        // const ev = new Phaser.Events.EventEmitter()
        // console.log('click', ev.emit);
        eventsCenter.emit('start_customizations', this);
        
        //  this.add([this.customizationGame]);
        // switch (this.scene) {
        //     case SCENES.INTRO_SCENE: {
        //         new IntroScene(this);
        //         break;
        //     }
        //     default:
        //         break;
        // }
    }

    addCustomizations() {
        console.log('jjjjjjjjjjj');
        this.tweens.add({
            targets: this,
            delay: 1000,
            duration: 500,
            scale: 0.8,
            onStart: () => {
                this.addFaceBig().setPosition(0, -100)
        this.addAsset(this.assets.glasses_a, 2)
            },
        });
    }
}