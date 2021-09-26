import k from './../kaboom.js';
import addBackgrounds from './../helpers/background.js';
import addButton from './../helpers/button.js';

export default function Death(score)
{
	if (!localStorage.getItem('scores'))
	{
		localStorage.setItem('scores', JSON.stringify([score]));
	}
	else
	{
		localStorage.setItem('scores', JSON.stringify(JSON.parse(localStorage.getItem('scores')).sort((a, b) => a - b).reverse().slice(0, 10).concat(score)));
	}

	k.layers([
		"background",
		"obj",
		"ui",
	], "obj");

	addBackgrounds();

	k.add([
		k.sprite("textGameOver"),
		k.pos(k.width() / 2, k.height() / 2 - 180),
		k.origin("center"),
		k.scale(.5),
		k.layer("ui")
	]);

	k.add([
		k.sprite("UIbg"),
		k.pos(k.width() / 2, k.height() / 2),
		k.origin("center"),
		k.layer("ui")
	]);

	k.add([
		k.text('MEDAL', 18),
		k.pos(k.width() / 2 - 120, k.height() / 2 - 110),
		k.layer("ui")
	]);

	let spriteMedal = "";

	if (score > 100)
	{
		spriteMedal = "medalGold";
	}
	else if (score > 50)
	{
		spriteMedal = "medalSilver";
	}
	else if (score > 25)
	{
		spriteMedal	=	"medalBronze";
	}

	if (spriteMedal)
	{
		k.add([
			k.sprite(spriteMedal),
			k.pos(k.width() / 2 - 105, k.height() / 2 - 70),
			k.scale(.5),
			k.layer("ui")
		]);
	}

	k.add([
		k.text('SCORE', 18),
		k.pos(k.width() / 2 + 10, k.height() / 2 - 110),
		k.layer("ui")
	]);

	k.add([
		k.text(score, 36),
		k.pos(k.width() / 2 + 10, k.height() / 2 - 70),
		k.layer("ui")
	]);

	k.add([
		k.text('BEST', 18),
		k.pos(k.width() / 2 + 10, k.height() / 2),
		k.layer("ui")
	]);

	k.add([
		k.text(JSON.parse(localStorage.getItem('scores')).sort((a, b) => a - b).reverse().slice(0, 1), 36),
		k.pos(k.width() / 2 + 10, k.height() / 2 + 40),
		k.layer("ui")
	]);

	addButton("OK", k.vec2(k.width() / 2 - 80, k.height() / 2 + 180), () => { k.go("menu"); });
};
