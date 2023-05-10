
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

export default class ChoiceGames extends Phaser.GameObjects.Container {
    constructor(scene) {
        super(scene, 0, 0);
        // this.tweens = scene.tweens;
        this.init()
        this.initChange()
    }

    init() {
        this.icon_custom = new GameType(this.scene, GAMES.CUSTOM)
        this.icon_animal = new GameType(this.scene, GAMES.ANIMAL )
        this.add([this.icon_custom, this.icon_animal]);

        this.icon_custom.setPosition(0, -200).setScale(1.5)
        this.icon_animal.setPosition(0, 200).setScale(1.5) // this.players.forEach(element => element.base.setInteractive().once('pointerdown', this.onClick, this))

    }

     initChange() {
        eventsCenter.on('choose_game', this.onClick, this);
    }

    onClick(obj) {
        console.log('click', obj.options.type);
        this.setVisible(false)
        const game = obj.options.type;

        // this.customizationGame = new CustomizationGame(this.scene);
        // this.animalGame = new Animal(this.scene);

        //  this.add([this.customizationGame]);
        switch (game) {
            case 'custom': {
                new CustomizationGame(this.scene)
                break;
            }
                case 'animal': {
                new AnimalGame(this.scene)
                break;
            }
            default:
                break;
        }
    }
}