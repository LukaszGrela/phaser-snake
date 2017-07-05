var GrelaDesign;
(function (GrelaDesign) {
    var Game;
    (function (Game) {
        var Main = (function () {
            function Main() {
                console.log("Constructor");
            }
            Main.prototype.method = function () {
                console.log("method");
            };
            return Main;
        }());
    })(Game = GrelaDesign.Game || (GrelaDesign.Game = {}));
})(GrelaDesign || (GrelaDesign = {}));
//# sourceMappingURL=Main.js.map