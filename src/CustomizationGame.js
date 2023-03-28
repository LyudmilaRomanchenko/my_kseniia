
// import icon_custom from './assets/sheets/icon_custom.png';

import Character from './Character';
import {eventsCenter} from './EventsCenter';

export default class CustomizationGame extends Phaser.GameObjects.Container {
    constructor(scene) {
        super(scene, 0, 0);
        this.tweens = scene.tweens;
        this.init()
        this.initChange()
        console.log('eventCenter', eventsCenter);

    }

    initChange() {
        eventsCenter.on('start_customizations', this.onStart, this);

    }

    onStart(obj) {
        console.log('START', obj);
        this.currentPlayer = obj
        this.players.forEach(element => element.hide())
        this.currentPlayer.addCustomizations()
       
        // this.tweens.add({
        //     targets: this.currentPlayer,
        //     delay: 1000,
        //     duration: 500,
        //     scale: 0.8,
        //     onStart: () =>  this.currentPlayer.addFaceBig().setPosition(0, -100),
        // });


    }

    //  preload ()
    // {
    //     this.load.image('icon_custom', icon_custom);
    //     // this.load.image('father', father);
    //     // this.load.image('mother', mother);
    //     // this.load.image('kseniia', kseniia);

    // }

    init() {
        const MOTHER = {
            face: 'mother',
            face_big: 'mother_big',
            glasses_a: 'mother_glasses_a'
        }
        const FATHER = {
            face: 'father',
            face_big: 'father_big',
        }
        const KSENIIA = {
            face: 'kseniia',
            face_big: 'kseniia_big'
        }
        this.scene.mainContainer.add(this)
        this.father = new Character(this.scene, FATHER);
        this.mother = new Character(this.scene, MOTHER);
        this.kseniia = new Character(this.scene, KSENIIA);

        this.add([this.father, this.mother, this.kseniia]);


        this.father.setPosition(0, -250)
        this.mother.setPosition(0, 250)
        this.kseniia.setPosition(0, 0)

        // this.father.name = 'father'
        
        this.players = [this.father, this.mother, this.kseniia]
        // this.players.forEach(element => element.setInteractive().once('pointerdown', this.onClick, this))

    }

    onClick(obj) {
        console.log('click CustomizationGame', obj);
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