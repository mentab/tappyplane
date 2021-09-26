import k from './kaboom.js';

import Menu from './scenes/menu.js';
import Score from './scenes/score.js';
import Death from './scenes/death.js';
import Main from './scenes/main.js';

k.loadSprite("background", "./src/assets/sprites/background.png");
k.loadSprite("ground", "./src/assets/sprites/ground.png");
k.loadSprite("plane", "./src/assets/sprites/plane.png", {
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

k.loadSprite("rock", "./src/assets/sprites/rock.png");
k.loadSprite("tap", "./src/assets/sprites/tap.png");
k.loadSprite("tapLeft", "./src/assets/sprites/tapLeft.png");
k.loadSprite("tapRight", "./src/assets/sprites/tapRight.png");
k.loadSprite("tapTick", "./src/assets/sprites/tapTick.png");
k.loadSprite("textGameOver", "./src/assets/sprites/textGameOver.png");
k.loadSprite("textGetReady", "./src/assets/sprites/textGetReady.png");
k.loadSprite("textMainTitle", "./src/assets/sprites/textMainTitle.png");
k.loadSprite("medalBronze", "./src/assets/sprites/medalBronze.png");
k.loadSprite("medalSilver", "./src/assets/sprites/medalSilver.png");
k.loadSprite("medalGold", "./src/assets/sprites/medalGold.png");
k.loadSprite("buttonSmall", "./src/assets/sprites/buttonSmall.png");
k.loadSprite("buttonLarge", "./src/assets/sprites/buttonLarge.png");
k.loadSprite("puffSmall", "./src/assets/sprites/puffSmall.png");
k.loadSprite("puffLarge", "./src/assets/sprites/puffLarge.png");
k.loadSprite("UIbg", "./src/assets/sprites/UIbg.png");
k.loadSprite("number0", "./src/assets/sprites/number0.png");
k.loadSprite("number1", "./src/assets/sprites/number1.png");
k.loadSprite("number2", "./src/assets/sprites/number2.png");
k.loadSprite("number3", "./src/assets/sprites/number3.png");
k.loadSprite("number4", "./src/assets/sprites/number4.png");
k.loadSprite("number5", "./src/assets/sprites/number5.png");
k.loadSprite("number6", "./src/assets/sprites/number6.png");
k.loadSprite("number7", "./src/assets/sprites/number7.png");
k.loadSprite("number8", "./src/assets/sprites/number8.png");
k.loadSprite("number9", "./src/assets/sprites/number9.png");

k.loadSound("score", "./src/assets/sounds/sfx_coin_single6.wav");
k.loadSound("hit", "./src/assets/sounds/sfx_exp_short_hard14.wav");
k.loadSound("wooosh", "./src/assets/sounds/sfx_movement_jump8.wav");

k.loadFont("kenvector_future", "./src/assets/fonts/kenvector_future.png");

k.scene("menu", Menu);
k.scene("score", Score);
k.scene("death", Death);
k.scene("main", Main);

k.start("menu");