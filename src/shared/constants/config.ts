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

const FEBRUARY_DAYS: any[] = [
	// Row 1: Top Layer
	{ id: 2, pts: "M90,140 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0", cx: 120, cy: 145, rotate: 5 },
	{ id: 28, pts: "M370,390 a12,12 0 1,1 50,0 a12,12 0 1,1 -50,0", cx: 390, cy: 390, rotate: -10 },
	{ id: 1, pts: "M45,210 a30,30 0 1,1 60,0 a30,30 0 1,1 -60,0", cx: 75, cy: 210, rotate: 5 },
	{ id: 3, pts: "M305,210 a30,30 0 1,1 60,0 a30,30 0 1,1 -60,0", cx: 335, cy: 215, rotate: 5 },

	// // Row 2: Large Squares
	{ id: 4, pts: "M180,150 h70 v50 h-70 Z", cx: 215, cy: 180, rotate: 55 },
	{ id: 5, pts: "M370,220 h50 v50 h-50 Z", cx: 395, cy: 245, rotate: -6 },
	{ id: 6, pts: "M250,215 h50 v70 h-50 Z", cx: 275, cy: 260, rotate: 0 },
	{ id: 7, pts: "M310,255 h50 v50 h-50 Z", cx: 335, cy: 280, rotate: -3 },
	{ id: 8, pts: "M390,285 h70 v70 h-70 Z", cx: 425, cy: 325, rotate: 25 },

	// // Row 3: Horizontal Ovals
	{ id: 9, pts: "M115,205 a35,18 0 1,1 80,0 a35,18 0 1,1 -80,0", cx: 150, cy: 210, rotate: 5 },
	{ id: 27, pts: "M155,320 a35,18 0 1,1 90,0 a35,18 0 1,1 -90,0", cx: 200, cy: 330, rotate: -15 },
	{ id: 21, pts: "M255,295 h50 v50 h-50 Z", cx: 280, cy: 320, rotate: -5 },
	{ id: 11, pts: "M320,345 a35,18 0 1,1 70,0 a35,18 0 1,1 -70,0", cx: 355, cy: 350, rotate: 80 },
	{ id: 12, pts: "M50,295 a35,18 0 1,1 90,0 a35,18 0 1,1 -90,0", cx: 100, cy: 300, rotate: 60 },

	// // Row 4: Mid Squares & Large Circles
	{ id: 13, pts: "M125,235 h60 v60 h-60 Z", cx: 155, cy: 270, rotate: 0 },
	{ id: 26, pts: "M192,490 a25,25 0 1,1 50,0 a25,25 0 1,1 -50,0", cx: 215, cy: 490, rotate: -9 },
	{ id: 23, pts: "M105,350 h70 v50 h-70 Z", cx: 140, cy: 380, rotate: 50 },
	{ id: 25, pts: "M280,350 h50 v50 h-50 Z", cx: 305, cy: 380, rotate: -4 },
	{ id: 10, pts: "M425,215 a25,25 0 1,1 50,0 a25,25 0 1,1 -50,0", cx: 450, cy: 220, rotate: 11 },
	{ id: 16, pts: "M320,395 h50 v50 h-50 Z", cx: 340, cy: 420, rotate: 55 },

	// // Row 5: Bottom V-Shape
	{ id: 24, pts: "M250,470 a30,15 0 1,1 65,0 a30,15 0 1,1 -65,0", cx: 280, cy: 475, rotate: -25 },
	{ id: 18, pts: "M425,260 a30,15 0 1,1 60,0 a30,15 0 1,1 -60,0", cx: 453, cy: 263, rotate: 5 },
	{ id: 19, pts: "M145,445 a30,15 0 1,1 60,0 a30,15 0 1,1 -60,0", cx: 175, cy: 445, rotate: 50 },
	{ id: 22, pts: "M245,425 a25,25 0 1,1 50,0 a25,25 0 1,1 -50,0", cx: 270, cy: 435, rotate: 0 },

	// // Fillers
	{ id: 20, pts: "M192,430 a25,25 0 1,1 50,0 a25,25 0 1,1 -50,0", cx: 210, cy: 430, rotate: 15 },
	{ id: 15, pts: "M375,190 a25,25 0 1,1 50,0 a25,25 0 1,1 -50,0", cx: 400, cy: 190, rotate: -15 },
	{ id: 14, pts: "M193,230 h50 v50 h-50 Z", cx: 215, cy: 260, rotate: 5 },
	{ id: 17, pts: "M200,345 h50 v50 h-50 Z", cx: 225, cy: 375, rotate: -15 }
];

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
	'December': DECEMBER_DAYS,
	'February': FEBRUARY_DAYS
}