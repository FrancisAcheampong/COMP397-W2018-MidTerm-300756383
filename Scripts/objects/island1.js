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
    var Island1 = /** @class */ (function (_super) {
        __extends(Island1, _super);
        // private instance variables
        //private _dx:number;
        // public properties
        // Constructor
        function Island1() {
            var _this = _super.call(this, "island") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        Island1.prototype.Start = function () {
            this._dx = 5;
            this.Reset();
        };
        // updates the game object every frame
        Island1.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        // reset the objects location to some value
        Island1.prototype.Reset = function () {
            this.y = Math.floor((Math.random() * (640 - this.height)) + this.halfHeight);
            this.x = -this.width;
        };
        // move the object to some new location
        Island1.prototype.Move = function () {
            this.x += this._dx;
        };
        // check to see if some boundary has been passed
        Island1.prototype.CheckBounds = function () {
            // check lower bounds
            if (this.x >= 480 + this.width) {
                this.Reset();
            }
        };
        return Island1;
    }(objects.GameObject));
    objects.Island1 = Island1;
})(objects || (objects = {}));
//# sourceMappingURL=island1.js.map