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
文字
var item1 = new cc.MenuItemFont("actionScence", this.actionScence, this);
图片
 this._aboutBtn = new cc.MenuItemImage("#welcome_aboutButton.png", "#welcome_aboutButton.png", this._about, this);
精灵
new cc.MenuItemSprite(sprite, null, null)	
切换
MenuItemToggle
