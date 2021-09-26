import k from './../kaboom.js';

export default function addButton(txt, p, f)
{
	const btn = k.add([
		k.sprite("buttonLarge"),
		k.pos(p),
		k.scale(.5),
		k.origin("center")
	]);

	k.add([
		k.text(txt, 28),
		k.pos(p),
		k.scale(.5),
		k.origin("center"),
		k.color(1, 1, 1)
	]);

	btn.action(() =>
	{
		if (btn.isHovered())
		{
			btn.color = k.rgb(0.8, 0.8, 0.8);

			if (k.mouseIsClicked())
			{
				f();
			}
		}
		else
		{
			btn.color = k.rgb(1, 1, 1);
		}
	});
}