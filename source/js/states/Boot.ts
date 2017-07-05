module GrelaDesign.Game {
    export class Boot extends Phaser.State {
        static KEY:string = "Boot";

        preload() {}
        create() {
            this.game.state.start(Preloader.KEY, true, false);
        }
    }
}