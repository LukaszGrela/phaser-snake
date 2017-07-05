/// <reference path="../../defs/phaser.d.ts" />
/// <reference path="states/Boot.ts" />
/// <reference path="states/Preloader.ts" />
/// <reference path="states/MainMenu.ts" />
/// <reference path="Food.ts" />
/// <reference path="states/Level.ts" />

module GrelaDesign.Game {
    export class Main extends Phaser.Game {
        constructor(config: Phaser.IGameConfig) {
            super(config);

            this.state.add(Boot.KEY, Boot, false);
            this.state.add(Preloader.KEY, Preloader, false);
            this.state.add(MainMenu.KEY, MainMenu, false);
            this.state.add(Level.KEY, Level, false);

            this.state.start(Boot.KEY);
        }
    }
}

window.onload = () => {
    var config: Phaser.IGameConfig = {
        renderer: Phaser.AUTO,
        width: 640,
        height: 480,
        parent: 'content',
        forceSetTimeOut: false
    };
    var game: Phaser.Game = new GrelaDesign.Game.Main(config);
    Phaser.Device.whenReady(function () {
        //wait for stage to be initialized
        game.stage.setBackgroundColor('#bfcc00');
    }, game);
};