import Character from './Character';
import { eventsCenter } from './EventsCenter';

const ITEMS_ELEMENTS = {
    'father' : [
       { img: 'item_father_glasses_a', typeItem: 'glasses'},
        {img: 'item_father_hat_a', typeItem: 'hat'}
    ],
    'kseniia' : [
        {img: 'item_kseniia_glasses_a', typeItem: 'glasses'},
        {img: 'item_kseniia_hat_a', typeItem: 'hat'}
    ],
    'mother' : [
        {img: 'item_mother_glasses_a', typeItem: 'glasses'},
        {img: 'item_mother_hat_a', typeItem: 'hat'}
    ]
}

const FATHER_GLASSES = [
    { img: 'item_father_glasses_a', player: 'father' },
    { img: 'item_father_glasses_b', player: 'father' },
    { img: 'item_father_glasses_c', player: 'father' }
];

const FATHER_HATS = [
    { img: 'item_father_hat_a', player: 'father' },
    { img: 'item_father_hat_b', player: 'father' },
    { img: 'item_father_hat_c', player: 'father' }
];

const KSENIIA_GLASSES = [
    { img: 'item_kseniia_glasses_a', player: 'kseniia' },
    { img: 'item_kseniia_glasses_b', player: 'kseniia' },
    { img: 'item_kseniia_glasses_c', player: 'kseniia' }
];

const KSENIIA_HATS = [
    { img: 'item_kseniia_hat_a', player: 'kseniia' },
    { img: 'item_kseniia_hat_b', player: 'kseniia' },
    { img: 'item_kseniia_hat_c', player: 'kseniia' }
];

const MOTHER_GLASSES = [
    { img: 'item_mother_glasses_a', player: 'mother' },
    { img: 'item_mother_glasses_b', player: 'mother' },
    { img: 'item_mother_glasses_c', player: 'mother' }
];

const MOTHER_HATS = [
    { img: 'item_mother_hat_a', player: 'mother' },
    { img: 'item_mother_hat_b', player: 'mother' },
    { img: 'item_mother_hat_c', player: 'mother' }
];

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
        eventsCenter.on('item_click', this.onClick, this);
    }

    onStart(obj) {
        this.currentPlayer = obj
        this.playerOptions = ITEMS_ELEMENTS[obj.assets.face];
        this.playerType = obj.assets.face;
        this.players.forEach(element => element.hide())
        this.currentPlayer.addCustomizations()
        this.addItems(this.playerOptions)

        switch (this.playerType) {
            case 'father':
                this.glassesOptions = FATHER_GLASSES;
                this.hatsOptions = FATHER_HATS;
                break;
            case 'kseniia':
                this.glassesOptions = KSENIIA_GLASSES;
                this.hatsOptions = KSENIIA_HATS;
                break;
            case 'mother':
                this.glassesOptions = MOTHER_GLASSES;
                this.hatsOptions = MOTHER_HATS;
                break;
            default:
                break;
        }
    }

     onClick(obj) {
         console.log('click CustomizationGame', obj.img.typeItem);
         let newItems = () => {}
        const name = obj.img.typeItem
        switch (name) {
            case 'glasses': {
                newItems = () => this.addItems(this.glassesOptions);
                break;
            }
            case 'hat': {
                newItems = () => this.addItems(this.hatsOptions);
                
                break;
            }
            default:
                break;
         }
         this.items.hide({onComplete: newItems })
    }

    addItems(options) {
        this.items = new Items(this.scene, options)
        this.add([this.items]);
    }

    init() {
        const MOTHER = {
            face: 'mother',
            face_big: 'mother_big',
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
        
        this.players = [this.father, this.mother, this.kseniia]

    }
}

class Items extends Phaser.GameObjects.Container {
    constructor(scene, options) {
        super(scene, 0, 0);
        this.options = options;
        this.tweens = scene.tweens;
        this.init()
        this.show()

        this.lengthItem = this.options.length
        this.half = Math.floor(this.lengthItem / 2);
        this.gap = 200;
        this.delta = this.lengthItem === 2 ? 100 : 0;
        this.addItems();
    }

    init() {
        this.setScale(0).setPosition(0, 300)
    }

    // initChange() {
    //     eventsCenter.on('item_click', this.onClick, this);

    // }

    addItems() {
        this.items = [];
        this.options.forEach((img, index) => {
            const x = (index - this.half) * this.gap + this.delta;
            const y = 0;
            const item = new Item(this.scene, img).setPosition(x, y);
            this.items.push(item);
            this.add([item]);
        });
    }


    show() {
        this.tweens.add({
            targets: this,
            delay: 1500,
            duration: 500,
            scale: 1,
            // onStart: () =>  this.currentPlayer.addFaceBig().setPosition(0, -100),
        });
    }

    hide(options) {
        this.tweens.add({
            targets: this,
            delay: 500,
            duration: 500,
            scale: 0,
            ...options,
        });
    }
}

class Item extends Phaser.GameObjects.Container {
    constructor(scene, img) {
        super(scene, 0, 0);
        this.img= img;
        this.tweens = scene.tweens;
        this.addBase()
        this.addItem();
    }

    init() {
        this.setScale(0).setPosition(0, 300)
    }

    addBase() {
        this.base = this.scene.add.image(0, 0, 'item_bg').setPosition(0, 0)
        this.add([this.base]);
        this.base.setInteractive().on('pointerdown', this.onClick, this)
    }

    addItem() {
        this.item = this.scene.add.image(0, 0, this.img.img).setPosition(0, 0)
        this.add([this.item]);

    }

    onClick(obj) {
        eventsCenter.emit(this.img.typeItem ? 'item_click' : 'customization', this);
    }

    show() {
        this.tweens.add({
            targets: this,
            delay: 1500,
            duration: 500,
            scale: 1,
            // onStart: () =>  this.currentPlayer.addFaceBig().setPosition(0, -100),
        });
    }
}