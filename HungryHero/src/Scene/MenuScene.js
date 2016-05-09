var MenuScene = cc.Scene.extend({
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
    }





});