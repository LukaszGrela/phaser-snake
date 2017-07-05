module GrelaDesign.Game {
    export class Preloader extends Phaser.State {
        static KEY:string = "Preloader";

        preload() {
            this.load.image('food', 'assets/food.png');
            this.load.image('body', 'assets/body.png');
        }

        create() {


            this.game.state.start(MainMenu.KEY, true, false);
        }

        
    }
}