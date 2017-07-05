module GrelaDesign.Game {
    export class MainMenu extends Phaser.State {

        static KEY:string = "MainMenu";
        
        create() { 
            
            this.game.state.start(Level.KEY, true, false);
        }

    }
}