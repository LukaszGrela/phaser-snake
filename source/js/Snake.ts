
/// <reference path="Body.ts" />

module GrelaDesign.Game {
    export class Snake extends Phaser.Group {

        //  Direction consts
        static UP = 0;
        static DOWN = 1;
        static LEFT = 2;
        static RIGHT = 3;
        direction:number;
        heading:number;
        headPosition:Phaser.Point;


        head: BodyPart;

        constructor(game: Phaser.Game, x:number, y:number) {
            super(game);

            this.headPosition = new Phaser.Point(x, y);

            /*
            if(length && length > 0) {
                var part;
                for (var i = 0; i < length; i++) {
                    part = this.add(new BodyPart(this.game, 0, 0));
                }
            }
            */

            this.head = this.create(x * 16, y * 16);

            
            this.add(this.head);



            
        }



        private create(x, y):BodyPart {
            var part:BodyPart = this.getFirstExists(false);
            if(!part) {
                part = new BodyPart(this.game, 0, 0);

                this.add(part, true);
            }
            return part;
        }

        faceLeft() {
            if (this.direction === Snake.UP || this.direction === Snake.DOWN) {
                this.heading = Snake.LEFT;
            }
        }

        faceRight() {
            if (this.direction === Snake.UP || this.direction === Snake.DOWN) {
                this.heading = Snake.RIGHT;
            }
        }

        faceUp() {
            if (this.direction === Snake.LEFT || this.direction === Snake.RIGHT) {
                this.heading = Snake.UP;
            }
        }

        faceDown() {
            if (this.direction === Snake.LEFT || this.direction === Snake.RIGHT) {
                this.heading = Snake.DOWN;
            }
        }

        move():boolean {
            switch (this.heading)
            {
                case Snake.LEFT:
                    this.headPosition.x = Phaser.Math.wrap(this.headPosition.x - 1, 0, 40);
                    break;

                case Snake.RIGHT:
                    this.headPosition.x = Phaser.Math.wrap(this.headPosition.x + 1, 0, 40);
                    break;

                case Snake.UP:
                    this.headPosition.y = Phaser.Math.wrap(this.headPosition.y - 1, 0, 30);
                    break;

                case Snake.DOWN:
                    this.headPosition.y = Phaser.Math.wrap(this.headPosition.y + 1, 0, 30);
                    break;
            }

            this.direction = this.heading; 

            return true;           
        }

        update() {
            this.game.debug.spriteBounds(this.head);
            this.game.debug.spriteInfo(this.head, 10, 10);
        }
    }
}