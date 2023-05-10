import {eventsCenter} from './EventsCenter';

export default class GameType extends Phaser.GameObjects.Container {
    constructor(scene, options) {
        super(scene, 0, 0);
        this.tweens = scene.tweens;
        this.options = options
        this.addBase();
    }

    
    addBase() {
        this.base = this.scene.add.image(0, 0, this.options.img)
        this.add([this.base]);
        this.sort();
        this.base.setInteractive().once('pointerdown', this.onClick, this);
    }

    

    removeInteractive() {
        this.base.disableInteractive();
    }

    

    onClick() {
        eventsCenter.emit('choose_game', this);  
    }

}
