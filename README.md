# HungryHero 开发简介
Hungry hero 功能描述：
##1.游戏有三个场景：
###1.1 游戏菜单场景
菜单场景上面元素： 背景元素、英雄元素、标题元素、声音控制元素、关于按钮元素、游戏开始按钮元素
###1.2 游戏玩场景
游戏玩场景： 英雄元素、食物元素、障碍物元素、声音控制元素、分数元素
###1.3 游戏关于场景
游戏关于场景：关于文字元素、返回按钮元素
##2.游戏规则：
略
#代码实现
##游戏菜单场景
###关联知识点
####按钮类型
文字
var item1 = new cc.MenuItemFont("actionScence", this.actionScence, this);   <br/>
图片 <br/>
 this._aboutBtn = new cc.MenuItemImage("#welcome_aboutButton.png", "#welcome_aboutButton.png", this._about, this); <br/>
精灵 <br/>
new cc.MenuItemSprite(sprite, null, null)	<br/>
切换
MenuItemToggle
####动画知识点
1、this.scheduleUpdate();  激活:update() 	<br/>

2、 var move = cc.moveTo(2, cc.p(this._hero.width / 2 + 100, this._hero.y)).easing(cc.easeOut(2));	<br/>
        this._hero.runAction(move);	<br/>

3、
var sprite = new cc.Sprite("#soundOn0000.png");	<br/>
        var animation = new cc.Animation();	<br/>
        animation.addSpriteFrame(cc.spriteFrameCache.getSpriteFrame("soundOn0000.png"));	<br/>
        animation.addSpriteFrame(cc.spriteFrameCache.getSpriteFrame("soundOn0001.png"));	<br/>
        animation.addSpriteFrame(cc.spriteFrameCache.getSpriteFrame("soundOn0002.png"));	<br/>
        animation.setDelayPerUnit(1 / 3);	<br/>
        //var action = cc.animate(animation).repeatForever();	<br/>
        var action = new cc.Animate(animation).repeatForever();	<br/>
        sprite.runAction(action);	<br/>
