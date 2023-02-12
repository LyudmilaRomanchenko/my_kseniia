export default class Preloader extends Phaser.Scene {
    constructor() {
        super({ key: 'Preloader' });
    }

    preload() {
        for (const key in window.App.resources.spine) {
            this.textures.addBase64(`${key}.png`, window.App.resources.spine[key].png);
        }
    }

    create() {
        this.loaded = 0;
        this.audioLoaded = false;

        this.loadTotal = Object.keys(App.resources.textures).length + Object.keys(App.resources.spine).length;
        if (window.App.resources.sheets.json) this.loadTotal += 1;
        if (window.App.resources.audio.json) this.loadTotal += 1;

        for (const key in App.resources.textures) {
            this.textures.addBase64(key, window.App.resources.textures[key]);
            this.loaded += 1;
        }

        if (window.App.resources.sheets.json) {
            const shardsImg = new Image();
            shardsImg.onload = () => {
                this.textures.addAtlas('atlas', shardsImg, window.App.resources.sheets.json);
                this.loaded += 1;

                this.startGame();
            };
            shardsImg.src = window.App.resources.sheets.png;
        }

        if (window.App.resources.audio.json) {
            this.cache.json.add('sfx', window.App.resources.audio.json);

            let codec = window.App.resources.audio.m4a;
            if (!this.game.device.audio.m4a) codec = window.App.resources.audio.ogg;
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            audioCtx.decodeAudioData(this.base64ToArrayBuffer(codec), (buffer) => {
                if (this.audioLoaded) return;

                this.cache.audio.add('sfx', buffer);
                this.loaded += 1;

                this.audioLoaded = true;

                this.startGame();
            });

            setTimeout(() => {
                if (this.audioLoaded) return;
                this.loaded += 1;

                this.audioLoaded = true;

                this.startGame();
            }, 1000);
        }

        this.time.addEvent({ delay: 250, callback: () => {
            for (const key in App.resources.spine) {
                this.cache.custom.spine.add(key, {
                    preMultipliedAlpha: false, data: window.App.resources.spine[key].atlas, prefix: '',
                });
                this.cache.custom.spineTextures.add(key, this.spine.getAtlas(key));
                this.cache.json.add(key, window.App.resources.spine[key].json);

                this.loaded += 1;
            }

            this.startGame();
        }, callbackScope: this });

        this.startGame();
    }

    base64ToArrayBuffer(base64) {
        const binaryString = window.atob(base64);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);

        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }

        return bytes.buffer;
    }

    startGame() {
        if (this.loaded !== this.loadTotal) return;

        this.loadTotal = -1;

        this.time.addEvent({ delay: 250, callback: () => {
            document.getElementById('loader').style.display = 'none';
            document.getElementById('app').style.display = 'block';

            this.scene.start('Game');
        }, callbackScope: this });
    }
}
