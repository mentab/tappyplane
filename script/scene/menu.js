import k from '../kaboom.js';
import addBackgrounds from './../helper/background.js';
import addButton from './../helper/button.js';

export default function Menu()
{
	k.layers([
		"background",
		"obj",
		"ui",
	], "obj");

	addBackgrounds();

	addButton("START", k.vec2(k.width() / 2 - k.width() / 4, k.height() / 1.5), () => { k.go("main"); });
	addButton("SCORES", k.vec2(k.width() / 2 + k.width() / 4, k.height() / 1.5), () => { k.go("score"); });

	const plane = k.add([
		k.sprite("plane"),
		k.pos(k.width() / 4, k.height() / 2),
		k.origin("center"),
		k.scale(.5)
	]);

	plane.play("fly");

	// TODO add title
	k.add([
		k.sprite("textGetReady"),
		k.pos(k.width() / 2, k.height() / 3),
		k.origin("center"),
		k.scale(.5),
		"starting",
		k.layer("ui")
	]);
};