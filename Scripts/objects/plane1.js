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
var objects;
(function (objects) {
    var Plane1 = /** @class */ (function (_super) {
        __extends(Plane1, _super);
        // Constructor
        function Plane1() {
            var _this = _super.call(this, "plane") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Plane1.prototype._animationEnded = function () {
            if (this.alpha == 0) {
                this.alpha = 1;
                this.planeFlash.alpha = 0;
            }
        };
        // public methods
        // Initializes variables and creates new objects
        Plane1.prototype.Start = function () {
            this.planeFlash = new objects.PlaneFlash();
            this.planeFlash.alpha = 1;
            this.planeFlash.on("animationend", this._animationEnded.bind(this), false);
            this.x = 320;
            this.y = 430;
        };
        // updates the game object every frame
        Plane1.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        // reset the objects location to some value
        Plane1.prototype.Reset = function () {
        };
        // move the object to some new location
        Plane1.prototype.Move = function () {
            // mouse controls
            // this.x = objects.Game.stage.mouseX;
            // keyboard controls
            if (managers.Game.keyboardManager.moveLeft) {
                this.x -= 5;
            }
            if (managers.Game.keyboardManager.moveRight) {
                this.x += 5;
            }
            this.planeFlash.x = this.x;
            this.planeFlash.y = this.y;
        };
        // check to see if some boundary has been passed
        Plane1.prototype.CheckBounds = function () {
            // right boundary
            if (this.x >= 640 - this.halfWidth) {
                this.x = 640 - this.halfWidth;
            }
            // left boundary
            if (this.x <= this.halfWidth) {
                this.x = this.halfWidth;
            }
        };
        return Plane1;
    }(objects.GameObject));
    objects.Plane1 = Plane1;
})(objects || (objects = {}));
//# sourceMappingURL=plane1.js.map