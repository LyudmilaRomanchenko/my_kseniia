
// import icon_custom from './assets/sheets/icon_custom.png';
import CustomizationGame from './CustomizationGame';
import AnimalGame from './AnimalGame';
import GameType from './GameType';
import {eventsCenter} from './EventsCenter';

const GAMES = {
    CUSTOM: { 
        img: 'icon_custom',
        type: 'custom'
    },
    ANIMAL: { 
        img: 'icon_animal',
        type: 'animal'
    }
}

export default class Animal extends Phaser.GameObjects.Container {
    constructor(scene, options) {
        super(scene, 0, 0);
        this.tweens = scene.tweens;
        this.animal = options.animal;
        this.player = options.player;
        this.init()
        // this.initChange()
    }

    init() {
        console.log('INIT', this.player);
        this.animalImg = this.scene.add.image(this.scene.scale.width / 2, this.scene.scale.height / 2, this.animal)
        this.playerImg = this.scene.add.image(this.scene.scale.width / 2, this.scene.scale.height / 2, this.player)
        // // this.add([this.animal, this.player]);
        // this.add([this.animal]);

        const PLAYER_POSITIONS = {
            elephant: {
                x: -70,
                y: -43,
                scale: 0.8,
            }
        }

        const x = this.scene.scale.width / 2  + PLAYER_POSITIONS[this.animal].x;
        const y = this.scene.scale.height / 2 + PLAYER_POSITIONS[this.animal].y;
        const scale = PLAYER_POSITIONS[this.animal].scale;

        this.playerImg.setPosition(x, y).setScale(scale)
        // this.player.setPosition(0, 200).setScale(1)

      

    }

    //  initChange() {
    //     eventsCenter.on('choose_game', this.onClick, this);
    // }

    // onClick(obj) {
    //     console.log('click', obj.options.type);
    //     this.setVisible(false)
    //     const game = obj.options.type;

    //     // this.customizationGame = new CustomizationGame(this.scene);
    //     // this.animalGame = new Animal(this.scene);

    //     //  this.add([this.customizationGame]);
    //     switch (game) {
    //         case 'custom': {
    //             new CustomizationGame(this.scene)
    //             break;
    //         }
    //             case 'animal': {
    //             new AnimalGame(this.scene)
    //             break;
    //         }
    //         default:
    //             break;
    //     }
    // }
}