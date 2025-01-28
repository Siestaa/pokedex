export const calculateCoordinate = (
	event: MouseEvent,
	bounds: DOMRect,
	div: React.RefObject<HTMLDivElement>,
	glow: React.RefObject<HTMLDivElement>
) => {
	const mouseX = event.clientX
	const mouseY = event.clientY
	const leftX = mouseX - bounds.x
	const topY = mouseY - bounds.y
	const center = {
		x: leftX - bounds.width / 2,
		y: topY - bounds.height / 2,
	}
	const distance = Math.sqrt(center.x ** 2 + center.y ** 2)

	if (div.current) {
		div.current.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2.4}deg
      )
    `
	}

	if (glow.current) {
		glow.current.style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x * 2 + bounds.width / 2}px
        ${center.y * 2 + bounds.height / 2}px,
        #eefbdb83,
        #0000000f
      )
    `
	}
}
