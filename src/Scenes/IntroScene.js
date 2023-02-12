// import father from '../assets/father.png';
// import mother from '../assets/mother.png';
// import kseniia from '../assets/kseniia.png';

// // export default class IntroScene extends Phaser.Scene
// // {
// //     constructor ()
// //     {
// //         super();
// //     }
// export default class IntroScene {
//     constructor(scene) {
//         this.scene = scene;
//         // this.time = scene.time;
//         // this.tweens = scene.tweens;
//         // this.mainContainer = scene.mainContainer;
//         // this.add = scene.add;
//         // this.emitter = scene.emitter;

//         this.init()
//         // console.log(mother);

//     }

//     preload ()
//     {

//         this.scene.load.image('father', father);
//         this.scene.load.image('mother', mother);
//         this.scene.load.image('kseniia', kseniia);

//     }

    

//     init() {
//         console.log('gggggggggggg');
//         //  this.logo = this.scene.add.image(this.scale.width / 2, this.scale.height / 2, 'bg');
//         this.father = this.scene.add.image(0, 0, 'father');
//         this.mother = this.scene.add.image(0, 0, 'mother');
//         this.kseniia = this.scene.add.image(0, 0, 'kseniia');

//         this.scene.mainContainer.add([this.father, this.mother, this.kseniia]);

//         this.father.setPosition(0, -250),
//         this.mother.setPosition(0, 250),
//         this.kseniia.setPosition(0, 0)
        
//         this.players = [this.father, this.mother, this.kseniia]
//         this.players.forEach(element => element.setInteractive().once('pointerdown', this.onClick, this))

//     }

//     onClick() {
//         console.log('click');
//     }

    
// }