import Phaser from 'phaser';
import { eventsCenter } from './EventsCenter';

import IntroScene from './Scenes/IntroScene';
import bgImg from './assets/bg.jpg';
import bgAnimalImg from './assets/bg_animal.jpg';

import father from './assets/father.png';
import mother from './assets/mother.png';
import kseniia from './assets/kseniia.png';
import father_big from './assets/textures/father_big.png';
import mother_big from './assets/textures/mother_big.png';
import kseniia_big from './assets/textures/kseniia_big.png';

import elephant from './assets/textures/elephant.png';

import icon_custom from './assets/sheets/icon_custom.png';
import icon_animal from './assets/sheets/icon_animal.png';
import item_bg from './assets/sheets/item_bg.png';

///////////// items chooses
import item_father_glasses_a from './assets/sheets/item_father_glasses_a.png';
import item_father_glasses_b from './assets/sheets/item_father_glasses_b.png';
import item_father_glasses_c from './assets/sheets/item_father_glasses_c.png';

import item_kseniia_glasses_a from './assets/sheets/item_kseniia_glasses_a.png';
import item_kseniia_glasses_b from './assets/sheets/item_kseniia_glasses_b.png';
import item_kseniia_glasses_c from './assets/sheets/item_kseniia_glasses_c.png';

import item_mother_glasses_a from './assets/sheets/item_mother_glasses_a.png';
import item_mother_glasses_b from './assets/sheets/item_mother_glasses_b.png';
import item_mother_glasses_c from './assets/sheets/item_mother_glasses_c.png';

import item_father_hat_a from './assets/sheets/item_father_hat_a.png';
import item_father_hat_b from './assets/sheets/item_father_hat_b.png';
import item_father_hat_c from './assets/sheets/item_father_hat_c.png';

import item_kseniia_hat_a from './assets/sheets/item_kseniia_hat_a.png';
import item_kseniia_hat_b from './assets/sheets/item_kseniia_hat_b.png';
import item_kseniia_hat_c from './assets/sheets/item_kseniia_hat_c.png';

import item_mother_hat_a from './assets/sheets/item_mother_hat_a.png';
import item_mother_hat_b from './assets/sheets/item_mother_hat_b.png';
import item_mother_hat_c from './assets/sheets/item_mother_hat_c.png';

import item_elephant from './assets/sheets/item_elephant.png';
import item_lion from './assets/sheets/item_lion.png';
import item_mouse from './assets/sheets/item_mouse.png';

/////// big assets
import father_big_glasses_a from './assets/textures/father_big_glasses_a.png';
import father_big_glasses_b from './assets/textures/father_big_glasses_b.png';
import father_big_glasses_c from './assets/textures/father_big_glasses_c.png';

import kseniia_big_glasses_a from './assets/textures/kseniia_big_glasses_a.png';
import kseniia_big_glasses_b from './assets/textures/kseniia_big_glasses_b.png';
import kseniia_big_glasses_c from './assets/textures/kseniia_big_glasses_c.png';

import mother_big_glasses_a from './assets/textures/mother_big_glasses_a.png';
import mother_big_glasses_b from './assets/textures/mother_big_glasses_b.png';
import mother_big_glasses_c from './assets/textures/mother_big_glasses_c.png';

import father_big_hat_a from './assets/textures/father_big_hat_a.png';
import father_big_hat_b from './assets/textures/father_big_hat_b.png';
import father_big_hat_c from './assets/textures/father_big_hat_c.png';

import kseniia_big_hat_a from './assets/textures/kseniia_big_hat_a.png';
import kseniia_big_hat_b from './assets/textures/kseniia_big_hat_b.png';
import kseniia_big_hat_c from './assets/textures/kseniia_big_hat_c.png';

import mother_big_hat_a from './assets/textures/mother_big_hat_a.png';
import mother_big_hat_b from './assets/textures/mother_big_hat_b.png';
import mother_big_hat_c from './assets/textures/mother_big_hat_c.png';
import Preloader from './Preloader';
import ChoiceGames from './ChoiceGames';


class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
        this.initChange()
    }

    preload ()
    {
        this.mainContainer = this.add.container(this.scale.width / 2, this.scale.height / 2);
        this.load.image('bg', bgImg);
        this.load.image('bgAnimal', bgAnimalImg);

        this.load.image('father', father);
        this.load.image('mother', mother);
        this.load.image('kseniia', kseniia);
        this.load.image('father_big', father_big);
        this.load.image('mother_big', mother_big);
        this.load.image('mother_glasses_a', mother_big_glasses_a);

        this.load.image('kseniia_big', kseniia_big);
        this.load.image('icon_custom', icon_custom);
        this.load.image('icon_animal', icon_animal);
        this.load.image('item_bg', item_bg);

        this.load.image('elephant', elephant);



        /////////// items chooses
        this.load.image('item_father_glasses_a', item_father_glasses_a)
        this.load.image('item_father_glasses_b', item_father_glasses_b)
        this.load.image('item_father_glasses_c', item_father_glasses_c)
        this.load.image('item_kseniia_glasses_a',item_kseniia_glasses_a)
        this.load.image('item_kseniia_glasses_b', item_kseniia_glasses_b)
        this.load.image('item_kseniia_glasses_c', item_kseniia_glasses_c)
        this.load.image('item_mother_glasses_a', item_mother_glasses_a)
        this.load.image('item_mother_glasses_b', item_mother_glasses_b)
        this.load.image('item_mother_glasses_c', item_mother_glasses_c)
        this.load.image('item_father_hat_a', item_father_hat_a)
        this.load.image('item_father_hat_b', item_father_hat_b)
        this.load.image('item_father_hat_c', item_father_hat_c)
        this.load.image('item_kseniia_hat_a', item_kseniia_hat_a)
        this.load.image('item_kseniia_hat_b', item_kseniia_hat_b)
        this.load.image('item_kseniia_hat_c', item_kseniia_hat_c)
        this.load.image('item_mother_hat_a', item_mother_hat_a)
        this.load.image('item_mother_hat_b', item_mother_hat_b)
        this.load.image('item_mother_hat_c', item_mother_hat_c)
        this.load.image('item_elephant', item_elephant)
        this.load.image('item_lion', item_lion)
        this.load.image('item_mouse', item_mouse)

        ///////// big assets
        this.load.image('father_big_glasses_a', father_big_glasses_a)
        this.load.image('father_big_glasses_b', father_big_glasses_b)
        this.load.image('father_big_glasses_c', father_big_glasses_c)
        this.load.image('kseniia_big_glasses_a',kseniia_big_glasses_a)
        this.load.image('kseniia_big_glasses_b', kseniia_big_glasses_b)
        this.load.image('kseniia_big_glasses_c', kseniia_big_glasses_c)
        this.load.image('mother_big_glasses_a', mother_big_glasses_a)
        this.load.image('mother_big_glasses_b', mother_big_glasses_b)
        this.load.image('mother_big_glasses_c', mother_big_glasses_c)
        this.load.image('father_big_hat_a', father_big_hat_a)
        this.load.image('father_big_hat_b', father_big_hat_b)
        this.load.image('father_big_hat_c', father_big_hat_c)
        this.load.image('kseniia_big_hat_a', kseniia_big_hat_a)
        this.load.image('kseniia_big_hat_b', kseniia_big_hat_b)
        this.load.image('kseniia_big_hat_c', kseniia_big_hat_c)
        this.load.image('mother_big_hat_a', mother_big_hat_a)
        this.load.image('mother_big_hat_b', mother_big_hat_b)
        this.load.image('mother_big_hat_c', mother_big_hat_c)



        this.mainContainer.setDepth(100)

    }
      
    create ()
    {
        this.bg = this.add.image(this.scale.width / 2, this.scale.height / 2, 'bg');

        this.items = new ChoiceGames(this)
        this.mainContainer.add([this.items]);
        this.scale.on('resize', this.resize, this);
        // console.log(this.bg);


    //     gameSize.width;
    // var height = gameSize.height;
      
        // this.tweens.add({
        //     targets: bg,
        //     y: 450,
        //     duration: 2000,
        //     ease: "Power2",
        //     yoyo: true,
        //     loop: -1
        // });
    }

    initChange() {
        eventsCenter.on('change_bg', this.changeBg, this);
    }

    changeBg() {
        this.bg.setTexture('bgAnimal')
    }

    

    resize (gameSize, baseSize, displaySize, resolution)
    {
        var width = gameSize.width;
        var height = gameSize.height;
        this.cameras.resize(width, height);
        this.bg.setSize(width, height);
        this.bg.setPosition(width / 2, height / 2);
        // console.log(this.bg);

        // this.introScene = new IntroScene(this)
        // this.mainContainer.add([this.introScene]);
        // this.introScene.setDepth(1000000000)
        // this.sort()
        // console.log("this.introScene");

    
    }
}


const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 600,
    height: 900,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: 'phaser-example',
    },
    // scene: [MyGame, IntroScene], 
    scene: [MyGame, Preloader],

};

const game = new Phaser.Game(config);
