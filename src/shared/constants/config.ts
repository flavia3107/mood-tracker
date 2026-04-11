const APRIL_DAYS: any[] = Array.from({ length: 30 }, (_, i) => {
	const day = i + 1;
	const totalPathLength = 350;
	const getPointOnPath = (index: number) => {
		const distance = (index / 30) * totalPathLength;
		let x, y;

		if (distance <= 100) {
			// Left Section (Equal steps along the 100-unit curve)
			const localT = distance / 100;
			x = 25 + (100 * localT);
			y = 280 + (35 * localT);
		} else if (distance <= 250) {
			// Middle Section (Equal steps along the 150-unit flat)
			const localT = (distance - 100) / 150;
			x = 125 + (150 * localT);
			y = 315;
		} else {
			// Right Section (Equal steps along the 100-unit curve)
			const localT = (distance - 250) / 100;
			x = 275 + (100 * localT);
			y = 310 - (35 * localT);
		}
		return { x, y };
	};

	const p1 = getPointOnPath(i);
	const p2 = getPointOnPath(i + 1);

	// 2. Top Ridge - Distributed equally to match bottom
	const tx1 = 180 + (i * (40 / 30));
	const tx2 = 180 + ((i + 1) * (40 / 30));
	const topY = 70;

	// 3. High-Curve Control Point Logic
	const getControlX = (topX: number, bottomX: number) => {
		const midX = (topX + bottomX) / 2;
		// Pushes the curve outward based on center distance
		const offset = ((midX - 200) / 200) * 145; // curveIntensity
		return midX + offset;
	};

	const cx1 = getControlX(tx1, p1.x);
	const cx2 = getControlX(tx2, p2.x);

	return {
		day,
		path: `M${tx1},${topY} 
           Q${cx1},90 ${p1.x.toFixed(1)},${p1.y.toFixed(1)} 
           L${p2.x.toFixed(1)},${p2.y.toFixed(1)} 
           Q${cx2},90 ${tx2},${topY} Z`,
		label: {
			x: ((p1.x + p2.x) / 2).toFixed(1),
			y: (((p1.y + p2.y) / 2) - 20).toFixed(1),
		},
		color: '#fff'
	};
});

const AUGUST_DAYS: any[] = Array.from({ length: 31 }, (_, i) => {
	const angle = (i * 360) / 31;
	return {
		label: i + 1,
		groupTransform: `rotate(${angle}, 125, 125)`,
		textTransform: `rotate(${-angle}, 125, 48)`,
		color: '#fff',
		stroke: '#3E2723'
	};
});

const DECEMBER_DAYS: any[] = _getDecemberConfig();


function _getDecemberConfig() {
	const decs: { x: number, y: number, color: string }[] = [];
	const topY = 35;
	const bottomY = 195;
	const height = bottomY - topY;
	const trunkX = 100;
	const redLineX = 70;
	const minDistance = 11.5;

	for (let i = 0; i < 31; i++) {
		let placed = false;
		let attempts = 0;
		let currentY = topY + (i * (height / 31));

		while (!placed && attempts < 50) {
			const progress = (currentY - topY) / height;
			const baseRadius = 5 + (70 * progress);
			const currentRadius = progress < 0.8 ? baseRadius : baseRadius * (1 - (progress - 0.8) * 2.5);
			const angle = (progress * Math.PI * 14) + Math.PI;
			let x = trunkX + Math.cos(angle) * currentRadius;

			// 3. Red Line Boundary
			if (x < redLineX) {
				x = redLineX + 6;
			}

			// 4. OVERLAP CHECK
			const hasOverlap = decs.some(other => {
				const dx = x - other.x;
				const dy = currentY - other.y;
				const distance = Math.sqrt(dx * dx + dy * dy);
				return distance < minDistance;
			});

			if (!hasOverlap) {
				decs.push({ x, y: currentY, color: '#fff' });
				placed = true;
			} else {
				// If it overlaps, nudge the Y down slightly and try again
				currentY += 1.5;
				attempts++;
			}
		}
	}
	return decs;
}

export const MONTH_DAYS_CONFIG: { [key: string]: any } = {
	'April': APRIL_DAYS,
	'August': AUGUST_DAYS,
	'December': DECEMBER_DAYS
}