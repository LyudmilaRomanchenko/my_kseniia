// import Scene from '@holywater-tech/ads-builder/framework/components/Scene';
// import Utils from '@holywater-tech/ads-builder/framework/Utils';
import Item from './Item';
// import { EVENTS, LAYERS_DEPTH } from './constants/Constants';
// import { AUDIO, SHEETS } from './constants/assets';

export default class Items extends Phaser.GameObjects.Container {
    constructor(scene) {
        super(scene, 0, 0);
        // const { itemsArray, isOnce, isOpenStore } = options;

        // this.tweens = scene.tweens;
        // this.itemsArray = itemsArray || [];
        // this.lengthItem = itemsArray.length;
        // this.isOnce = isOnce;
        // this.isOpenStore = isOpenStore || false;
        // this.gap = 200;

        // this.counter = 0;
        // this.initAssets();
        this.buildItems();
    }

    initAssets() {
        // this.addProperties(['pos', 'scale'])
        //     .setCustomPosition(350, 0, 180, -50)
        //     .setCustomScale(0, 0, 0, 0)
        //     .setCustomAlign('Center')
        //     .setDepth(LAYERS_DEPTH.ITEMS);
        // this.half = Math.floor(this.lengthItem / 2) * 0.5;

        // this.scene.emitter.on(EVENTS.ON_ITEM_CLICK, this.onItemClick, this);
    }

    buildItems() {
        console.log('buildItems')
        this.base = this.scene.add.image(0, 0, 'item_bg')
        this.base.setScale(1).setPosition(0, -100).setDepth(300)
        this.add([this.base]);

        // const item = new Item(this.scene)
        // this.items = [];
        // this.itemsArray.forEach((img, index) => {
        //     const x = 0;
        //     const y = (index - this.half) * this.gap;
        //     const item = new Item(this.scene,
        //         // {
        //         // item: img,
        //         // isOnce: this.isOnce,
        //         // scale: img.scale,
        //         // isOpenStore: this.isOpenStore,
        //         // }
        //     )
        //         .setDepth(2)
        //         .setPosition(x, y);
        //     this.items.push(item);
        //     this.add([item]);
        // });
        // this._sort();
        // this.addHand(this.items);
        // return this.items;
    }

    removeTint() {
        this.items.forEach((obj, index) => {
            if (this.counter === index) {
                obj.removeTint();
            }
        });
    }

    show(options = {}) {
        this.tweens.add({
            targets: this,
            lScaleX: 0.8,
            lScaleY: 0.8,
            pScaleX: 0.8,
            pScaleY: 0.8,
            duration: 500,
            delay: 500,
            ease: 'Sine.out',
            ...options,
            onStart: () => this.showHand(),
        });
        return this;
    }

    remove() {
        this.tweens.add({
            targets: this,
            lScaleX: 0,
            lScaleY: 0,
            pScaleX: 0,
            pScaleY: 0,
            delay: 500,
            duration: 500,
            onComplete: () => this.setVisible(false),
        });
        return this;
    }

    removeVisible() {
        this.items &&
            this.items.forEach((obj) => {
                obj.disable();
                this.tweens.add({
                    targets: obj,
                    ly: 300,
                    py: 300,
                    scale: 0,
                    delay: 500,
                    duration: 500,
                    ease: 'Sine.out',
                });
            });
    }

    hide() {
        this.tweens.add({
            targets: this,
            lx: Scene.LANDSCAPE_MAX_WIDTH,
            px: Scene.PORTRAIT_MAX_WIDTH,
            duration: 750,
        });
        return this;
    }

    clear() {
        if (!this.items) {
            return this;
        }
        Utils.destroy([this.items]);
        return this;
    }

    get Items() {
        return this.items;
    }

    addHand() {
        this.handX = -100;
        this.handY = 400;
        this.hand = this.scene.add
            .image(0, 0, 'atlas', SHEETS.HAND_TUTORIAL)
            .setDepth(LAYERS_DEPTH.HAND_TUTORIAL)
            .setPosition(this.handX, this.handY)
            .setAlpha(0)
            .setScale(0);
        this.add([this.hand]);
        this._sort();
    }

    showHand() {
        this.tweens.add({
            targets: this.hand,
            alpha: 1,
            scale: 1,
            duration: 300,
            delay: 300,
            onStart: () => (this.isDrag ? this.addHandTutorialDrag() : this.addHandTutorial()),
        });
    }

    addHandTutorial() {
        if (this.items.length === 0) {
            return;
        }

        this.handX = this.items[0].x;
        this.hand.setAlpha(1).setPosition(this.handX + 20, 200);
        const tweensParam = [];
        this.items.forEach((item) => {
            const press = {
                scale: 0.9,
                yoyo: true,
                duration: 300,
                startDelay: 300,
                targets: this.hand,
            };
            const param = {
                delay: 300,
                duration: 300,
                x: item.x + 75,
                y: item.y + 90,
                onComplete: () => item.addScale(),
            };

            tweensParam.push(param, press);
        });

        this.tweensHand = this.tweens.timeline({
            loop: -1,
            targets: this.hand,
            tweens: [...tweensParam],
        });
    }

    removeHandTutorial() {
        this.hand.setAlpha(0);
        this.tweens.remove(this.tweensHand);
        return this;
    }

    onItemClick() {
        this.removeHandTutorial();
        this.items.forEach((obj) => {
            obj.disable();
            obj.removeInteractive();
        });
    }

    hideAllGlow() {
        this.items.forEach((obj) => obj.removeGlow());
        return this;
    }
}
