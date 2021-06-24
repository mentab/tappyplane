import k from './../kaboom.js';
import c from './../const.js';

export default function addBackgrounds()
{
	addBackground(0, 0);
	addBackground(799, 0);

	k.action("backround", (bg) =>
	{
		bg.move(-c.SPEED / 6, 0)

		if (bg.pos.x <= -799)
		{
			bg.pos.x = 799;
		}
	});

	addGround(0, 0, 1, -1);
	addGround(0, k.height(), 1, 1);
	addGround(807, 0, 1, -1);
	addGround(807, k.height(), 1, 1);

	k.action("ground", (gr) =>
	{
		gr.move(-c.SPEED / 4, 0)

		if (gr.pos.x <= -807)
		{
			gr.pos.x = 807;
		}
	});
}

function addGround(posX, posY, scaleX, scaleY)
{
	k.add([
		k.sprite("ground"),
		k.layer("obj"),
		k.origin("botleft"),
		k.area(k.vec2(0, 0), k.vec2(808, -20)),
		k.pos(posX, posY),
		k.scale(scaleX, scaleY),
		"ground",
		"dead"
	]);
}

function addBackground(posX, posY)
{
	k.add([
		k.sprite("background"),
		k.pos(posX, posY),
		k.layer("background"),
		"backround"
	]);
}