// import item_bg from './assets/sheets/item_bg.png';

export default class Item extends Phaser.GameObjects.Container {
    constructor(scene) {
        super(scene, 0, 0);
        // const { item, isOnce, isOpenStore, scale } = options;

        // this.tweens = scene.tweens;
        // this.img = item;
        // this.isOnce = isOnce;
        // this.isOpenStore = isOpenStore || false;
        // this.scaleImg = scale;
        this.addBase();
        // this.addBaseInteractive();
        // this.addItem();
        // this.addGlow();
        // this.initListener();
    }

    // initListener() {
    //     this.scene.emitter.on(EVENTS.ON_ITEM_CLICK, this.onItemsClick, this);
    // }

    // preload ()
    // {

    //     this.load.image('item_bg', item_bg);


    // }

    addItem() {
        this.item = this.scene.add
            .image(0, 0, 'atlas', this.img)
            .setScale(this.scaleImg ? this.scaleImg : 1)
            .setDepth(LAYERS_DEPTH.ITEM);
        if (this.img === SHEETS.ITEM_DRESS_C) {
            this.item.setPosition(0, -30);
        }
        this.add([this.item]);
        this._sort();
    }

    disable() {
        this.item.off('pointerdown');
        return this;
    }

    addScale() {
        this.tweens.add({
            targets: this,
            scale: '-=0.08',
            yoyo: true,
            duration: 500,
            ease: 'Sine.out',
        });

        this.tweens.add({
            targets: this.glow,
            alpha: 1,
            yoyo: true,
            duration: 500,
            ease: 'Sine.out',
        });
        return this;
    }

    // removeGlow() {
    //     this.glow?.setAlpha(0);
    //     return this;
    // }

    addGlow() {
        this.glow = this.scene.add.image(0, 0, 'atlas', SHEETS.ITEM_GLOW).setDepth(LAYERS_DEPTH.ITEM_GLOW).setAlpha(0);
        this.add([this.glow]);
        this._sort();
    }

    addBase() {
        this.base = this.scene.add.image(0, 0, 'item_bg')
        this.base.setScale(5).setPosition(0, -100).setDepth(300)
        this.add([this.base]);
        console.log('addBase', this.base);

        this.sort();

        // this.add.image(this.scale.width / 2, this.scale.height / 2, 'bg')
    }

    addBaseInteractive() {
        if (this.isOnce) {
            this.base.setInteractive().once('pointerdown', this.onClick, this);
        } else {
            this.base.setInteractive().on('pointerdown', this.onClick, this);
        }
    }

    removeInteractive() {
        this.base.disableInteractive();
    }

    removeTint(onComplete = () => {}) {
        this.tweens.add({
            targets: this.tint,
            alpha: 0,
            delay: 500,
            duration: 500,
            ease: 'Sine.out',
            onComplete,
        });
    }

    onBaseSelect() {
        this.tweens.add({
            targets: this,
            scale: '-=0.08',
            yoyo: true,
            duration: 500,
            ease: 'Sine.out',
        });

        this.tweens.add({
            targets: this.glow,
            alpha: 1,
            yoyo: true,
            duration: 500,
            ease: 'Sine.out',
            onComplete: () => this.removeGlow(),
        });
        return this;
    }

    onClick() {
        const tapAudio = this.tap ? this.tap : AUDIO.TAP;
        Utils.addAudio(this.scene, tapAudio, 0.5, false);
        if (this.isOpenStore) {
            this.scene.emitter.emit(EVENTS.OPEN_STORE, this);
        } else {
            this.scene.emitter.emit(EVENTS.ON_ITEM_CLICK, this);
        }
        this.isSelected = true;
        this.onBaseSelect();
    }

    onItemsClick(obj) {
        if (obj === this) {
            return;
        }
        this.isSelected = false;
    }
}
