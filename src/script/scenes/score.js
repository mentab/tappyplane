import k from './../kaboom.js';
import addBackgrounds from './../helpers/background.js';
import addButton from './../helpers/button.js';

export default function Score()
{
	k.layers([
		"background",
		"obj",
		"ui",
	], "obj");

	addBackgrounds();

	k.add([
		k.sprite("UIbg"),
		k.pos(k.width() / 2, k.height() / 2),
		k.origin("center"),
		k.layer("ui")
	]);

	let heightSub	=	110;

	k.add([
		k.text('SCORES', 18),
		k.pos(k.width() / 2 - 120, k.height() / 2 - heightSub),
		k.layer("ui")
	]);

	let scores	=	JSON.parse(localStorage.getItem('scores')).sort((a, b) => a - b).reverse().slice(0, 3);

	// TODO add Medal
	for (const score of scores)
	{
		heightSub	=	heightSub - 40;

		k.add([
			k.text(score, 18),
			k.pos(k.width() / 2 - 120, k.height() / 2 - heightSub),
			k.layer("ui")
		]);
	}

	addButton("OK", k.vec2(k.width() / 2 - 80, k.height() / 2 + 180), () => { k.go("menu"); });
};