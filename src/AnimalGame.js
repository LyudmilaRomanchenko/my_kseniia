import Character from './Character';
import Animal from './Animal';
import { eventsCenter } from './EventsCenter';

const ITEMS_ELEMENTS = [
        {img: 'item_elephant', typeItem: 'elephant'},
        { img: 'item_lion', typeItem: 'lion' },
        { img: 'item_mouse', typeItem: 'mouse' }
    ]


// const FATHER_GLASSES = [
//     { img: 'item_father_glasses_a', player: 'father' },
//     { img: 'item_father_glasses_b', player: 'father' },
//     { img: 'item_father_glasses_c', player: 'father' }
// ];

// const FATHER_HATS = [
//     { img: 'item_father_hat_a', player: 'father' },
//     { img: 'item_father_hat_b', player: 'father' },
//     { img: 'item_father_hat_c', player: 'father' }
// ];

// const KSENIIA_GLASSES = [
//     { img: 'item_kseniia_glasses_a', player: 'kseniia' },
//     { img: 'item_kseniia_glasses_b', player: 'kseniia' },
//     { img: 'item_kseniia_glasses_c', player: 'kseniia' }
// ];

// const KSENIIA_HATS = [
//     { img: 'item_kseniia_hat_a', player: 'kseniia' },
//     { img: 'item_kseniia_hat_b', player: 'kseniia' },
//     { img: 'item_kseniia_hat_c', player: 'kseniia' }
// ];

// const MOTHER_GLASSES = [
//     { img: 'item_mother_glasses_a', player: 'mother' },
//     { img: 'item_mother_glasses_b', player: 'mother' },
//     { img: 'item_mother_glasses_c', player: 'mother' }
// ];

// const MOTHER_HATS = [
//     { img: 'item_mother_hat_a', player: 'mother' },
//     { img: 'item_mother_hat_b', player: 'mother' },
//     { img: 'item_mother_hat_c', player: 'mother' }
// ];

export default class AnimalGame extends Phaser.GameObjects.Container {
    constructor(scene) {
        super(scene, 0, 0);
        this.tweens = scene.tweens;
        this.init()
        this.initChange()
        console.log('AnimalGame',);

    }

    initChange() {
        eventsCenter.on('start_customizations', this.onStart, this);
        eventsCenter.on('animalAnimation', this.onClick, this);
    }

    onStart(obj) {
        // console.log('START', obj.assets.face);
        this.currentPlayer = obj
        // this.playerOptions = ITEMS_ELEMENTS[obj.assets.face];
        this.playerType = obj.assets.face
        console.log('this.player', this.playerType);


        this.players.forEach(element => element.hide())
        this.currentPlayer.addAnimalsScene()
        this.addItems(ITEMS_ELEMENTS)

        // switch (this.playerType) {
        //     case 'father':
        //         this.glassesOptions = FATHER_GLASSES;
        //         this.hatsOptions = FATHER_HATS;
        //         break;
        //     case 'kseniia':
        //         this.glassesOptions = KSENIIA_GLASSES;
        //         this.hatsOptions = KSENIIA_HATS;
        //         break;
        //     case 'mother':
        //         this.glassesOptions = MOTHER_GLASSES;
        //         this.hatsOptions = MOTHER_HATS;
        //         break;
        //     default:
        //         break;
        // }
       
        // this.tweens.add({
        //     targets: this.currentPlayer,
        //     delay: 1000,
        //     duration: 500,
        //     scale: 0.8,
        //     onStart: () =>  this.currentPlayer.addFaceBig().setPosition(0, -100),
        // });


    }

     onClick(obj) {
        //  console.log('click CustomizationGame', this.currentPlayer.assets.face);
        //  let newItems = () => {}
        this.items.hide()
         const animal = obj.img.typeItem
         const player = this.currentPlayer.assets.face

        //  eventsCenter.emit('playerAnimalAnimation', name, this)
         
       
         this.animalOgj = new Animal(this.scene, { animal, player })
        // this.animalOgj.setScale(1.2);
         this.currentPlayer.setAlpha(0)
         
        // switch (name) {
        //     case 'glasses': {
        //         newItems = () => this.addItems(this.glassesOptions);
        //         break;
        //     }
        //     case 'hat': {
        //         newItems = () => this.addItems(this.hatsOptions);
                
        //         break;
        //     }
        //     default:
        //         break;
        //  }
        //  this.items.hide({onComplete: newItems })
    }

    addItems(options) {
        this.items = new Items(this.scene, options)
        this.add([this.items]);

        // this.items.setPosition(0, 200)

        // this.base1 = this.scene.add.image(0, 0, 'item_bg').setPosition(-200, 300)
        //  this.base2 = this.scene.add.image(0, 0, 'item_bg').setPosition(0, 300)
        //  this.base3 = this.scene.add.image(0, 0, 'item_bg').setPosition(200, 300)
        // this.add([this.base1, this.base2, this.base3]);
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
            // glasses_a: 'mother_glasses_a'
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

            eventsCenter.emit('change_bg', this)
        

    }

    // onClick(obj) {
    //     console.log('click CustomizationGame', obj);
    //     // switch (this.scene) {
    //     //     case SCENES.INTRO_SCENE: {
    //     //         new IntroScene(this);
    //     //         break;
    //     //     }
    //     //     default:
    //     //         break;
    //     // }
    // }
}

class Items extends Phaser.GameObjects.Container {
    constructor(scene, options) {
        super(scene, 0, 0);
        // const { glasses, hat } = options;
        // this.glasses = glasses;
        // this.hat = hat;
        this.options = options;

        this.tweens = scene.tweens;
        // this.addItemsBase()

        this.init()
        // this.initChange()
        this.show()
        console.log('this.options.length', this.options.length);

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
        // this._sort();
    }

    // addItems() {
    //     this.glassesChoose = this.scene.add.image(0, 0, this.glasses).setPosition(-100, 0)
    //     this.hatChoose = this.scene.add.image(0, 0, this.hat).setPosition(100, 0)
    //     this.add([this.glassesChoose, this.hatChoose]);
    //     [this.glassesChoose, this.hatChoose].forEach(element => element.setInteractive().once('pointerdown', this.onClick, this))

    // }

    // onClick(obj) {
    //     console.log('click CustomizationGame ITEMS', obj.img.typeItem);
    //     const name = obj.img.typeItem
    //     switch (name) {
    //         case 'glasses': {
                
    //             break;
    //         }
    //         case 'hat': {
                
    //             break;
    //         }
    //         default:
    //             break;
    //     }
    // }

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

        // this.init()
        // this.show()
        console.log('this.img ITEM', this.img);
    }

    init() {
        this.setScale(0).setPosition(0, 300)
    }

    addBase() {
        // this.items = new Items(this.scene)

        // this.items.setPosition(0, 200)

        // this.base1 = this.scene.add.image(0, 0, 'item_bg').setPosition(-200, 0)
        //  this.base2 = this.scene.add.image(0, 0, 'item_bg').setPosition(0, 0)
        //  this.base3 = this.scene.add.image(0, 0, 'item_bg').setPosition(200, 0)
        // this.add([this.base1, this.base2, this.base3]);
        
        this.base = this.scene.add.image(0, 0, 'item_bg').setPosition(0, 0)
        this.add([this.base]);
        this.base.setInteractive().on('pointerdown', this.onClick, this)
    }

    addItem() {
        this.item = this.scene.add.image(0, 0, this.img.img).setPosition(0, 0)
        this.add([this.item]);

    }

    onClick(obj) {
        // if (this.img.typeItem) {
        //     eventsCenter.emit('item_click', this);
        // }

         
            // eventsCenter.emit('animalAnimation', this)
            eventsCenter.emit('animalAnimation', this)
        
        

        // console.log('Item', obj);
        // switch (this.scene) {
        //     case SCENES.INTRO_SCENE: {
        //         new IntroScene(this);
        //         break;
        //     }
        //     default:
        //         break;
        // }
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