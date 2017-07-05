module GrelaDesign.Game {
    export class Body extends Phaser.Group {



        constructor(game:Phaser.Game, length?:number) {
            super(game);

            if(length && length > 0) {
                var part;
                for (var i = 0; i < length; i++) {
                    part = this.add(new BodyPart(this.game, 0, 0));
                }
            }
        }

        create(x, y):BodyPart {
            var part:BodyPart = this.getFirstExists(false);
            if(!part) {
                part = new BodyPart(this.game, 0, 0);

                this.add(part, true);
            }
            return part;
        }
    }
}