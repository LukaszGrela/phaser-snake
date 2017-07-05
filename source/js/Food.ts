module GrelaDesign.Game {
    export class Food extends Phaser.Sprite {
        constructor(game:Phaser.Game, x:number, y:number) {
            super(game, x * 16, y * 16, 'food');
        }
    }
}