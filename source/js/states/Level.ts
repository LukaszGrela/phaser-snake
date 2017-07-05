
/// <reference path="../Food.ts" />
/// <reference path="../Snake.ts" />
module GrelaDesign.Game {
    export class Level extends Phaser.State {

        static KEY: string = "Level";

        food: Food;
        snake: Snake;

        cursors: Phaser.CursorKeys;

        create() {
            console.log(Level.KEY, "create()");
            this.food = new Food(this.game, 3, 4);
            this.game.add.existing(this.food);

            this.snake = new Snake(this.game, 8, 8);
            this.game.add.existing(this.snake);

            this.cursors = this.input.keyboard.createCursorKeys();
        }


        update() {
            if (this.cursors.left.isDown) {
                this.snake.faceLeft();
            }
            else if (this.cursors.right.isDown) {
                this.snake.faceRight();
            }
            else if (this.cursors.up.isDown) {
                this.snake.faceUp();
            }
            else if (this.cursors.down.isDown) {
                this.snake.faceDown();
            }
        }

    }
}