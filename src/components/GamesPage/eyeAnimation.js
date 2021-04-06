export const moveEye = (number, current) => {
	return number === 0
		? `translate( -${9 - current}px,-${9 - current}px) scale(${
				current === 1 ? 1 : 0.9
		  })`
		: number === 1
		? `translate(${8 - current}px, -${9 - current}px)  scale(${
				current === 1 ? 1 : 0.9
		  })`
		: number === 2
		? `translate(-${9 - current}px, ${7 - current}px)  scale(${
				current === 1 ? 1 : 0.9
		  })`
		: `translate(${9 - current}px, ${6 - current}px)  scale(${
				current === 1 ? 1 : 0.9
		  })`
}
export const setBorder = (firstCard, secondCard, current) =>
	current === firstCard || current === secondCard
		? 'none'
		: '10px solid #e74c2b'
