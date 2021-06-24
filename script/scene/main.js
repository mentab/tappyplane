import k from '../kaboom.js';
import addBackgrounds from './../helper/background.js';
import addButton from './../helper/button.js';
import c from './../const.js';

export default function Main()
{
	let started = false;

	k.gravity(0);

	k.layers([
		"background",
		"obj",
		"ui",
	], "obj");

	addBackgrounds();

	k.add([
		k.sprite("textGetReady"),
		k.pos(k.width() / 2, k.height() / 3),
		k.origin("center"),
		k.scale(.5),
		"starting",
		k.layer("ui")
	]);

	k.add([
		k.sprite("tapLeft"),
		k.pos(k.width() / 3 + k.width() / 5, k.height() / 2 + k.height() / 16),
		k.origin("center"),
		k.scale(.5),
		"starting",
		k.layer("ui")
	]);

	k.add([
		k.sprite("tapTick"),
		k.pos(k.width() / 3 + k.width() / 10, k.height() / 2 + k.height() / 12),
		k.origin("center"),
		k.scale(.5),
		"starting",
		k.layer("ui")
	]);

	k.add([
		k.sprite("puffLarge"),
		k.rotate(1.5),
		k.pos(k.width() / 3 + k.width() / 10, k.height() / 2),
		k.origin("center"),
		k.color(k.rgba(.5, .5, .5, .5)),
		k.scale(.5),
		"starting",
		k.layer("ui")
	]);

	k.add([
		k.sprite("plane"),
		k.pos(k.width() / 3 + k.width() / 10, k.height() / 2 - k.height() / 16),
		k.origin("center"),
		k.color(k.rgba(.5, .5, .5, .5)),
		k.scale(.5),
		"starting",
		k.layer("ui")
	]);

	const plane = k.add([
		k.sprite("plane"),
		k.pos(k.width() / 4, k.height() / 2),
		k.origin("center"),
		k.scale(.5),
		k.area(k.vec2(-15, -15), k.vec2(25, 20)),
		k.body(),
	]);

	plane.play("fly");

	k.keyPress("space", () =>
	{
		if (!started)
		{
			started = true;

			k.destroyAll("starting");

			k.gravity(2400);
		}

		plane.jump(700);

		k.play("wooosh");
	});

	function spawnRock()
	{
		const h1 = k.rand(80, k.height() - 240);
		const h2 = h1 + 160;

		k.add([
			k.sprite("rock"),
			k.origin("botleft"),
			k.area(k.vec2(35, 0), k.vec2(45, -240)),
			k.pos(k.width(), h1),
			"rock",
			"dead"
		]);

		k.add([
			k.sprite("rock"),
			k.origin("botleft"),
			k.area(k.vec2(35, 0), k.vec2(45, -240)),
			k.scale(1, -1),
			k.pos(k.width(), h2),
			"rock",
			"dead",
			{ passed: false }
		]);
	}

	plane.collides("dead", () =>
	{
		k.go("death", score.value);
		k.play("hit");
	});

	k.action("rock", (p) =>
	{
		p.move(-c.SPEED, 0);

		if (p.pos.x + p.width <= plane.pos.x && p.passed === false)
		{
			addScore();
			p.passed = true;
		}

		if (p.pos.x < -k.width() / 2)
		{
			k.destroy(p);
		}
	});

	k.loop(1, () =>
	{
		if (started)
		{
			spawnRock();
		}
	});

	// TODO add image for score instead of text
	const score = k.add([
		k.text("0", 28),
		k.layer("ui"),
		k.pos(k.width() / 2, k.height() / 6),
		{
			value: 0,
		},
	]);

	function addScore()
	{
		score.value++;
		score.text = score.value;
		k.play("score");
	}

	k.keyDown("up", () =>
	{
		k.camScale(k.camScale().k.add(k.vec2(k.dt())));
	});

	k.keyDown("down", () =>
	{
		k.camScale(k.camScale().k.sub(k.vec2(k.dt())));
	});
};