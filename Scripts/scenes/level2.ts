module scenes {
    export class Level2Scene extends objects.Scene {
      // Private Instance Variables
      private _ocean1: objects.Ocean1;
      private _plane1: objects.Plane1;
      private _island1: objects.Island1;
      private _clouds1: objects.Cloud1[];
      private _cloudNum: number;
      private _scoreBoard: managers.ScoreBoard;
  
      private _engineSound: createjs.AbstractSoundInstance;
      private _coin: objects.Coin;
  
      // Public Properties
  
      // Constructor
      constructor() {
        super();
  
        this.Start();
      }
  
      // Private Mathods
  
  
  
      // Public Methods
  
      // Initialize Game Variables and objects
      public Start(): void {
        this._ocean1 = new objects.Ocean1();
        this._plane1 = new objects.Plane1();
        managers.Game.plane1 = this._plane1;
  
        this._coin = new objects.Coin();
        this._island1 = new objects.Island1();
  
        // instantiate the cloud array
        this._clouds1 = new Array<objects.Cloud>();
        this._cloudNum = 2;
        // loop and add each cloud to the array
        for (let count = 0; count < this._cloudNum; count++) {
          this._clouds1[count] = new objects.Cloud();
        }
  
        this._engineSound = createjs.Sound.play("engine");
        this._engineSound.loop = -1; // play forever
        this._engineSound.volume = 0.3;
  
        // create the scoreboard UI for the Scene
        this._scoreBoard = new managers.ScoreBoard();
        managers.Game.scoreBoard = this._scoreBoard;
  
        this.Main();
      }
  
      // triggered every frame
      public Update(): void {
        this._ocean1.Update();
        this._plane1.Update();
  
        this._coin.x = this._island1.y;
        this._coin.y = this._island1.x;
        this._coin.Update();
  
        this._island1.Update();
  
        // check collision between plane and coin
        managers.Collision.Check(this._plane1, this._coin);
  
        this._clouds1.forEach(cloud => {
          cloud.Update();
          // check collision between plane and current cloud
          managers.Collision.Check(this._plane1, cloud);
        });
  
        // if lives fall below zero switch scenes to the game over scene
        if(this._scoreBoard.Lives <= 0) {
          this._engineSound.stop();
          managers.Game.currentScene = config.Scene.OVER;
        }
  
      }
  
      // This is where the fun happens
      public Main(): void {
        // add the ocean to the scene
        this.addChild(this._ocean1);
  
        // add the island to the scene
        this.addChild(this._island1);
  
        // add the coin to the scene
        this.addChild(this._coin);
  
        // add the plane to the scene
        this.addChild(this._plane1);
        this.addChild(this._plane1.planeFlash); // add the plane flashing effect
  
        // add clouds to the scene
  
        this._clouds1.forEach(cloud => {
          this.addChild(cloud);
        });
  
        // add scoreboard labels to the scene
        this.addChild(this._scoreBoard.LivesLabel);
        this.addChild(this._scoreBoard.ScoreLabel);
      }
    }
  }
  