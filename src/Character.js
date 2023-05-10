
// import icon_custom from './assets/sheets/icon_custom.png';
import {eventsCenter} from './EventsCenter';



export default class Character extends Phaser.GameObjects.Container {
    constructor(scene, assets) {
        super(scene, 0, 0);
        this.tweens = scene.tweens;
        this.assets = assets;
        this.init(this.assets)
        this.initChange()
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

    initChange() {
        eventsCenter.on('customization', this.onCustomization, this);
        // eventsCenter.on('playerAnimalAnimation', this.onAnimalAnimation, this);

    }

    onCustomization(obj) {
        // console.log("CHAR CUST", obj.img.player);
        const img = obj.img.img;
        const player = obj.img.player;
        const playerLength = obj.img.player.length;


        const choose = img.slice(5 + playerLength)
        const asset = `${player}_big${choose}`
        console.log("CHAR CUST IMG AAAAAAAAA", choose);


        choose.includes('hat') ? this.addHat(asset) : this.addGlasses(asset)
        
    }

    // onAnimalAnimation(obj) {
    //     console.log("onAnimalAnimation AAAAAAAAAAAAAA", this.faceBig);
    //     this.animal = this.scene.add.image(this.scene.scale.width / 2, this.scene.scale.height / 2, obj).setScale(1.2);
    //     // this.faceBig.setVisible(false)
    //     this.hideFaceBig()
    // }

    addGlasses(img) {
        if (this.glasses) {
            this.glasses.setTexture(img)
            return;
        }
        this.glasses = this.scene.add.image(0, 0, img);
        this.add([this.glasses]);

    }

    addHat(img) {
        console.log('HAAAAAAAAAAAAAAAAAT');
        if (this.hat) {
            this.hat.setTexture(img)
            return;
        }
        this.hat = this.scene.add.image(0, 0, img).setPosition(0, -100);
        this.add([this.hat]);

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

    hideFaceBig() {
        this.faceBig.setVisible(false)
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
        // console.log('jjjjjjjjjjj');
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

     addAnimalsScene() {
        console.log('addAnimalsScene');
        this.tweens.add({
            targets: this,
            delay: 1000,
            duration: 500,
            scale: 0.8,
            onStart: () => {
                this.addFaceBig().setPosition(0, -100)
            },
        });
    }
}