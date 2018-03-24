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
    var Ocean1 = /** @class */ (function (_super) {
        __extends(Ocean1, _super);
        // public properties
        // Constructor
        function Ocean1() {
            var _this = _super.call(this, managers.Game.assetManager.getResult("ocean")) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // reset the objects location to some value
        Ocean1.prototype._reset = function () {
            this.x = -800;
        };
        // move the object to some new location
        Ocean1.prototype._move = function () {
            this.x += this._dx;
        };
        // check to see if some boundary has been passed
        Ocean1.prototype._checkBounds = function () {
            if (this.x <= 0) {
                this._reset();
            }
        };
        // public methods
        // Initializes variables and creates new objects
        Ocean1.prototype.Start = function () {
            this._dx = 5;
            this._reset();
        };
        // updates the game object every frame
        Ocean1.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        return Ocean1;
    }(createjs.Bitmap));
    objects.Ocean1 = Ocean1;
})(objects || (objects = {}));
//# sourceMappingURL=ocean1.js.map