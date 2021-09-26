import k from './kaboom.js';

import Menu from './scene/menu.js';
import Score from './scene/score.js';
import Death from './scene/death.js';
import Main from './scene/main.js';

k.loadSprite("background", "img/background.png");
k.loadSprite("ground", "img/ground.png");
k.loadSprite("plane", "img/plane.png", {
	sliceX: 4,
	sliceY: 1,
	anims:
	{
		fly:
		{
			from: 0,
			to: 3
		}
	}
});

k.loadSprite("rock", "img/rock.png");
k.loadSprite("tap", "img/tap.png");
k.loadSprite("tapLeft", "img/tapLeft.png");
k.loadSprite("tapRight", "img/tapRight.png");
k.loadSprite("tapTick", "img/tapTick.png");
k.loadSprite("textGameOver", "img/textGameOver.png");
k.loadSprite("textGetReady", "img/textGetReady.png");
k.loadSprite("textMainTitle", "img/textMainTitle.png");
k.loadSprite("medalBronze", "img/medalBronze.png");
k.loadSprite("medalSilver", "img/medalSilver.png");
k.loadSprite("medalGold", "img/medalGold.png");
k.loadSprite("buttonSmall", "img/buttonSmall.png");
k.loadSprite("buttonLarge", "img/buttonLarge.png");
k.loadSprite("puffSmall", "img/puffSmall.png");
k.loadSprite("puffLarge", "img/puffLarge.png");
k.loadSprite("UIbg", "img/UIbg.png");
k.loadSprite("number0", "img/number0.png");
k.loadSprite("number1", "img/number1.png");
k.loadSprite("number2", "img/number2.png");
k.loadSprite("number3", "img/number3.png");
k.loadSprite("number4", "img/number4.png");
k.loadSprite("number5", "img/number5.png");
k.loadSprite("number6", "img/number6.png");
k.loadSprite("number7", "img/number7.png");
k.loadSprite("number8", "img/number8.png");
k.loadSprite("number9", "img/number9.png");

k.loadSound("score", "sound/sfx_coin_single6.wav");
k.loadSound("hit", "sound/sfx_exp_short_hard14.wav");
k.loadSound("wooosh", "sound/sfx_movement_jump8.wav");

k.loadFont("kenvector_future", "font/kenvector_future.png");

k.scene("menu", Menu);
k.scene("score", Score);
k.scene("death", Death);
k.scene("main", Main);

k.start("menu");