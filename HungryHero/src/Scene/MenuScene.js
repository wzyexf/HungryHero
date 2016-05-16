var MenuScene = cc.Scene.extend({
    _playBtn:null,
    _aboutBtn:null,
    ctor: function () {

        this._super();
        var layer = new cc.Layer();
        this.addChild(layer);

        var winSize = cc.winSize;

        var bgWelcome = new cc.Sprite(res.welcomeBG);
        bgWelcome.x = winSize.width / 2;
        bgWelcome.y = winSize.height / 2;
        layer.addChild(bgWelcome);


        var title = new cc.Sprite("#welcome_title.png");
        title.x = 800;
        title.y = 500;
        layer.addChild(title);

        var hero = new cc.Sprite("#welcome_hero.png");
        hero.x = 300;
        hero.y = 400;
        layer.addChild(hero);


        this._playBtn = new cc.MenuItemImage("#welcome_playButton.png", "#welcome_playButton.png", this._play);
        this._playBtn.x = 700;
        this._playBtn.y = 350;
        this._aboutBtn = new cc.MenuItemImage("#welcome_aboutButton.png", "#welcome_aboutButton.png", this._about, this);
        this._aboutBtn.x = 500;
        this._aboutBtn.y = 250;

       // this._playBtn = new cc.MenuItemImage(
	   // 		"#welcome_playButton.png",
	   // 		"#welcome_playButton.png",
	   // 	      this._play 	
       //       );
       // this._playBtn.x = 700;
       // this._playBtn.y = 350;
       // //this.addChild(_playBtn);

       // this._aboutBtn = new cc.MenuItemImage(
       //        "#welcome_aboutButton.png",
       //        "#welcome_aboutButton.png",
       //       this._about
       // );
       // this._aboutBtn.x = 500;
       // this._aboutBtn.y = 250;
       //// this.addChild(_aboutBtn);
        var soundButton = new SoundButton();
        soundButton.x = 45;
        soundButton.y = winSize.height - 45;
        var menu = new cc.Menu(this._aboutBtn, this._playBtn, soundButton);
        layer.addChild(menu);
        menu.x = menu.y = 0;
        
        
    },
    _play: function () {

    },
    _about: function () {

    }





});