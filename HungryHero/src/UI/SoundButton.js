var SoundButton = cc.MenuItemToggle.extend({
    ctor: function () {

        var sprite = new cc.Sprite("#soundOn0000.png");
        var animation = new cc.Animation();
        animation.addSpriteFrame(cc.spriteFrameCache.getSpriteFrame("soundOn0000.png"));
        animation.addSpriteFrame(cc.spriteFrameCache.getSpriteFrame("soundOn0001.png"));
        animation.addSpriteFrame(cc.spriteFrameCache.getSpriteFrame("soundOn0002.png"));
        animation.setDelayPerUnit(1 / 3);
        //var action = cc.animate(animation).repeatForever();
        var action = new cc.Animate(animation).repeatForever();
        sprite.runAction(action);

        this._super(new cc.MenuItemSprite(sprite, null, null), new cc.MenuItemImage("#soundOff.png"));
        //这里不支持android,ios ，null在这里不支持
        this.setCallback(this._soundOnOff, this);



    },

    _soundOnOff: function () {
        console.log("sound");
        //Sound.toggleOnOff();
    }
    






});