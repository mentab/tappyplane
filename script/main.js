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
k.loadSprite("medalBronze", "img/medalBronze.png");
k.loadSprite("medalSilver", "img/medalSilver.png");
k.loadSprite("medalGold", "img/medalGold.png");
k.loadSprite("buttonSmall", "img/buttonSmall.png");
k.loadSprite("buttonLarge", "img/buttonLarge.png");
k.loadSprite("puffSmall", "img/puffSmall.png");
k.loadSprite("puffLarge", "img/puffLarge.png");
k.loadSprite("UIbg", "img/UIbg.png");
k.loadSound("score", "sound/score.mp3");
k.loadSound("wooosh", "sound/wooosh.mp3");
k.loadSound("hit", "sound/hit.mp3");
k.loadFont("kenvector_future", "font/kenvector_future.png");

k.scene("menu", Menu);
k.scene("score", Score);
k.scene("death", Death);
k.scene("main", Main);

k.start("menu");