var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GrelaDesign;
(function (GrelaDesign) {
    var Game;
    (function (Game) {
        var Body = (function (_super) {
            __extends(Body, _super);
            function Body(game, x, y) {
                return _super.call(this, game, x * 16, y * 16, 'body') || this;
            }
            return Body;
        }(Phaser.Sprite));
        Game.Body = Body;
    })(Game = GrelaDesign.Game || (GrelaDesign.Game = {}));
})(GrelaDesign || (GrelaDesign = {}));
var GrelaDesign;
(function (GrelaDesign) {
    var Game;
    (function (Game) {
        var Food = (function (_super) {
            __extends(Food, _super);
            function Food(game, x, y) {
                return _super.call(this, game, x * 16, y * 16, 'food') || this;
            }
            return Food;
        }(Phaser.Sprite));
        Game.Food = Food;
    })(Game = GrelaDesign.Game || (GrelaDesign.Game = {}));
})(GrelaDesign || (GrelaDesign = {}));
var GrelaDesign;
(function (GrelaDesign) {
    var Game;
    (function (Game) {
        var Boot = (function (_super) {
            __extends(Boot, _super);
            function Boot() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Boot.prototype.preload = function () { };
            Boot.prototype.create = function () {
                this.game.state.start(Game.Preloader.KEY, true, false);
            };
            return Boot;
        }(Phaser.State));
        Boot.KEY = "Boot";
        Game.Boot = Boot;
    })(Game = GrelaDesign.Game || (GrelaDesign.Game = {}));
})(GrelaDesign || (GrelaDesign = {}));
var GrelaDesign;
(function (GrelaDesign) {
    var Game;
    (function (Game) {
        var Preloader = (function (_super) {
            __extends(Preloader, _super);
            function Preloader() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Preloader.prototype.preload = function () {
                this.load.image('food', 'assets/food.png');
                this.load.image('body', 'assets/body.png');
            };
            Preloader.prototype.create = function () {
                this.game.state.start(Game.MainMenu.KEY, true, false);
            };
            return Preloader;
        }(Phaser.State));
        Preloader.KEY = "Preloader";
        Game.Preloader = Preloader;
    })(Game = GrelaDesign.Game || (GrelaDesign.Game = {}));
})(GrelaDesign || (GrelaDesign = {}));
var GrelaDesign;
(function (GrelaDesign) {
    var Game;
    (function (Game) {
        var MainMenu = (function (_super) {
            __extends(MainMenu, _super);
            function MainMenu() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MainMenu.prototype.create = function () {
                this.game.state.start(Game.Level.KEY, true, false);
            };
            return MainMenu;
        }(Phaser.State));
        MainMenu.KEY = "MainMenu";
        Game.MainMenu = MainMenu;
    })(Game = GrelaDesign.Game || (GrelaDesign.Game = {}));
})(GrelaDesign || (GrelaDesign = {}));
/// <reference path="Body.ts" />
var GrelaDesign;
(function (GrelaDesign) {
    var Game;
    (function (Game) {
        var Snake = (function (_super) {
            __extends(Snake, _super);
            function Snake(game, x, y) {
                var _this = _super.call(this, game) || this;
                _this.head = new Game.Body(game, x, y);
                _this.add(_this.head);
                return _this;
            }
            Snake.prototype.faceLeft = function () {
                if (this.direction === Snake.UP || this.direction === Snake.DOWN) {
                    this.heading = Snake.LEFT;
                }
            };
            Snake.prototype.faceRight = function () {
                if (this.direction === Snake.UP || this.direction === Snake.DOWN) {
                    this.heading = Snake.RIGHT;
                }
            };
            Snake.prototype.faceUp = function () {
                if (this.direction === Snake.LEFT || this.direction === Snake.RIGHT) {
                    this.heading = Snake.UP;
                }
            };
            Snake.prototype.faceDown = function () {
                if (this.direction === Snake.LEFT || this.direction === Snake.RIGHT) {
                    this.heading = Snake.DOWN;
                }
            };
            Snake.prototype.update = function () {
                this.game.debug.spriteBounds(this.head);
                this.game.debug.spriteInfo(this.head, 10, 10);
            };
            return Snake;
        }(Phaser.Group));
        //  Direction consts
        Snake.UP = 0;
        Snake.DOWN = 1;
        Snake.LEFT = 2;
        Snake.RIGHT = 3;
        Game.Snake = Snake;
    })(Game = GrelaDesign.Game || (GrelaDesign.Game = {}));
})(GrelaDesign || (GrelaDesign = {}));
/// <reference path="../Food.ts" />
/// <reference path="../Snake.ts" />
var GrelaDesign;
(function (GrelaDesign) {
    var Game;
    (function (Game) {
        var Level = (function (_super) {
            __extends(Level, _super);
            function Level() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Level.prototype.create = function () {
                console.log(Level.KEY, "create()");
                this.food = new Game.Food(this.game, 3, 4);
                this.game.add.existing(this.food);
                this.snake = new Game.Snake(this.game, 8, 8);
                this.game.add.existing(this.snake);
                this.cursors = this.input.keyboard.createCursorKeys();
            };
            Level.prototype.update = function () {
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
            };
            return Level;
        }(Phaser.State));
        Level.KEY = "Level";
        Game.Level = Level;
    })(Game = GrelaDesign.Game || (GrelaDesign.Game = {}));
})(GrelaDesign || (GrelaDesign = {}));
/// <reference path="../../defs/phaser.d.ts" />
/// <reference path="states/Boot.ts" />
/// <reference path="states/Preloader.ts" />
/// <reference path="states/MainMenu.ts" />
/// <reference path="Food.ts" />
/// <reference path="states/Level.ts" />
var GrelaDesign;
(function (GrelaDesign) {
    var Game;
    (function (Game) {
        var Main = (function (_super) {
            __extends(Main, _super);
            function Main(config) {
                var _this = _super.call(this, config) || this;
                _this.state.add(Game.Boot.KEY, Game.Boot, false);
                _this.state.add(Game.Preloader.KEY, Game.Preloader, false);
                _this.state.add(Game.MainMenu.KEY, Game.MainMenu, false);
                _this.state.add(Game.Level.KEY, Game.Level, false);
                _this.state.start(Game.Boot.KEY);
                return _this;
            }
            return Main;
        }(Phaser.Game));
        Game.Main = Main;
    })(Game = GrelaDesign.Game || (GrelaDesign.Game = {}));
})(GrelaDesign || (GrelaDesign = {}));
window.onload = function () {
    var config = {
        renderer: Phaser.AUTO,
        width: 640,
        height: 480,
        parent: 'content',
        forceSetTimeOut: false
    };
    var game = new GrelaDesign.Game.Main(config);
    Phaser.Device.whenReady(function () {
        //wait for stage to be initialized
        game.stage.setBackgroundColor('#bfcc00');
    }, game);
};
//# sourceMappingURL=game.js.map