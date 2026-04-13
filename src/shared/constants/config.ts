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

const JANUARY_DAYS: any[] = _generateFrostSeeds();

const JULY_DAYS: any[] = Array.from({ length: 31 }, (_, i) => {
	const row = Math.floor(i / 5);
	const col = i % 5;
	const xSpacing = 52;
	const ySpacing = 45;
	const xOffset = (row % 2 !== 0) ? xSpacing / 2 : 0;

	return {
		id: i + 1,
		x: col * xSpacing + xOffset,
		y: row * ySpacing,
		color: '#fff'
	};
});

const JUNE_DAYS: any[] = [
	// Row 1
	{ id: 1, x: 250, y: 90, d: "M250,30 L210,80 L250,100 L290,80 Z" },
	// Row 2
	{ id: 2, x: 240, y: 105, d: "M220,80 L170,160 L280,155 L250,100 Z" },
	{ id: 3, x: 255, y: 107, d: "M250,100 L240,155 L280,155 L290,80 Z" },
	{ id: 4, x: 300, y: 137, d: "M290,80 L280,155 L330,140 L370,80 Z" },
	// Row 3
	{ id: 5, x: 205, y: 220, d: "M150,160 L130,210 L190,380 L220,155 Z" },
	{ id: 6, x: 218, y: 223, d: "M220,155 L190,380 L250,240 L280,155 Z" },
	{ id: 7, x: 303, y: 153, d: "M280,155 L250,240 L310,225 L310,140 Z" },
	{ id: 8, x: 314, y: 160, d: "M310,40 L310,225 L370,210 L410,140 Z" },
	// Row 4
	{ id: 9, x: 150, y: 290, d: "M150,200 L90,280 L160,330 L180,220 Z" },
	{ id: 10, x: 167, y: 292, d: "M180,220 L150,310 L320,250 L250,240 Z" },
	{ id: 11, x: 270, y: 297, d: "M250,240 L160,310 L280,320 L310,225 Z" },
	{ id: 12, x: 290, y: 295, d: "M280,232 L280,310 L340,295 L345,210 Z" },
	{ id: 13, x: 333, y: 290, d: "M345,210 L320,300 L410,295 L450,210 Z" },
	// Row 5
	{ id: 14, x: 90, y: 350, d: "M90,290 L60,350 L130,365 L140,295 Z" },
	{ id: 15, x: 170, y: 355, d: "M140,295 L130,345 L180,380 L220,310 Z" },
	{ id: 16, x: 190, y: 368, d: "M200,307 L170,390 L250,395 L240,310 Z" },
	{ id: 17, x: 300, y: 375, d: "M240,310 L250,395 L310,380 L320,300 Z" },
	{ id: 18, x: 320, y: 370, d: "M320,300 L310,380 L370,365 L370,290 Z" },
	{ id: 19, x: 376, y: 356, d: "M350,294 L370,365 L440,350 L415,280 Z" },
	// Row 6
	{ id: 20, x: 80, y: 365, d: "M60,350 L40,430 L110,435 L130,365 Z" },
	{ id: 21, x: 137, y: 350, d: "M132,335 L110,435 L170,438 L190,380 Z" },
	{ id: 22, x: 195, y: 390, d: "M190,380 L170,438 L230,440 L250,395 Z" },
	{ id: 23, x: 292, y: 394, d: "M250,395 L230,440 L280,440 L310,380 Z" },
	{ id: 24, x: 316, y: 388, d: "M310,380 L280,440 L340,438 L370,365 Z" },
	{ id: 25, x: 377, y: 372, d: "M370,365 L340,438 L400,435 L440,350 Z" },
	{ id: 26, x: 440, y: 401, d: "M440,350 L400,435 L460,430 L490,350 Z" },
	// Row 7 
	{ id: 27, x: 160, y: 442, d: "M110,430 L170,435 L190,470 L100,440 Z" },
	{ id: 28, x: 178, y: 443, d: "M170,435 L235,440 L220,480 L170,460 Z" },
	{ id: 29, x: 237, y: 447, d: "M230,440 L260,435 L300,465 L220,490 Z" },
	{ id: 30, x: 285, y: 445, d: "M260,435 L310,440 L390,480 L330,490 Z" },
	{ id: 31, x: 333, y: 445, d: "M305,440 L470,420 L480,490 L420,490 Z" }
];

const SEPTEMBER_DAYS = _generateFallingLeaves();

export const JUNE_CONFIG = {
	wedgePath: "M 250,30 L 470,440 Q 250,570 30,440 Z",
	rindPathBase: "M 470,440 Q 250,570 30,440",
	rindPathMid: "M 465,445 Q 250,565 35,445",
	rindPathOuter: "M 460,455 Q 250,560 40,455",
}

const OCTOBER_DAYS: any[] = _generateFacets();

const NOVEMBER_DAYS: any[] = Array.from({ length: 30 }, (_, i) => ({
	date: i + 1,
	color: '#fff'
}));

function _generateFacets() {
	const facetData = [
		// --- TOP ROUNDED LOBES (Days 1-7) ---
		{ pts: "125,120 185,90 155,170", cx: 155, cy: 140 },
		{ pts: "185,90 250,85 220,170", cx: 220, cy: 135 },
		{ pts: "250,85 315,90 280,170", cx: 280, cy: 135 },
		{ pts: "315,90 375,120 345,170", cx: 346, cy: 145 },
		{ pts: "155,170 220,170 185,90", cx: 185, cy: 145 },
		{ pts: "315,90 345,170 280,170", cx: 315, cy: 145 },
		{ pts: "220,170 280,170 250,85", cx: 250, cy: 140 },

		// --- MID-SECTION CURVATURE - TIGHTER SIDES (Days 8-15) ---
		{ pts: "125,120 70,200 155,170", cx: 125, cy: 165 },
		{ pts: "375,120 430,200 345,170", cx: 375, cy: 165 },
		{ pts: "70,200 75,315 155,250", cx: 105, cy: 255 },
		{ pts: "430,200 425,315 345,250", cx: 395, cy: 255 },
		{ pts: "75,310 120,400 165,350", cx: 125, cy: 360 },
		{ pts: "425,310 380,400 335,350", cx: 370, cy: 360 },
		{ pts: "155,170 70,200 155,250", cx: 125, cy: 210 },
		{ pts: "345,170 430,200 345,250", cx: 380, cy: 210 },

		// --- CENTER CORE & FACE (Remains unchanged) ---
		{ pts: "155,170 255,170 200,220", cx: 205, cy: 190 },
		{ pts: "345,170 250,170 295,215", cx: 295, cy: 190 },
		{ pts: "155,250 250,250 165,350", cx: 190, cy: 280 },
		{ pts: "345,250 250,250 335,350", cx: 310, cy: 280 },
		{ pts: "155,170 155,250 255,250", cx: 220, cy: 240 },
		{ pts: "345,170 345,250 250,250", cx: 283, cy: 240 },
		{ pts: "250,170 205,210 250,250", cx: 233, cy: 215 },
		{ pts: "250,170 294,213 250,250", cx: 266, cy: 215 },
		{ pts: "155,250 79,312 165,350", cx: 130, cy: 310 },

		// --- BOTTOM ROUNDED CHIN - TIGHTER CHIN (Days 25-31) ---
		{ pts: "345,250 425,310 335,350", cx: 370, cy: 310 },
		{ pts: "165,350 335,350 250,250", cx: 250, cy: 342 },
		{ pts: "165,350 250,350 220,420", cx: 215, cy: 385 },
		{ pts: "335,350 250,350 280,420", cx: 285, cy: 385 },
		{ pts: "120,400 220,420 165,350", cx: 170, cy: 395 },
		{ pts: "380,400 280,420 335,350", cx: 330, cy: 395 },
		{ pts: "220,420 280,420 250,350", cx: 250, cy: 400 }
	];

	const newVal = facetData.map((data, i) => ({
		id: i + 1,
		color: '#fff',
		points: data.pts,
		centerX: data.cx,
		centerY: data.cy
	}));
	return newVal;
}

function _generateFrostSeeds() {
	const seeds: any[] = [];
	const maxAttempts = 200;
	const paddingBase = 20;

	for (let i = 0; i < 31; i++) {
		let placed = false;
		let attempts = 0;

		while (!placed && attempts < maxAttempts) {
			const newSeed = {
				x: Math.random() * 300,
				y: 20 + Math.random() * 150,
				rotation: Math.random() * 360,
				scale: 0.7 + Math.random() * 0.1,
			};

			const isOverlapping = seeds.some(existing => {
				const dx = existing.x - newSeed.x;
				const dy = existing.y - newSeed.y;
				const distance = Math.sqrt(dx * dx + dy * dy);
				const collisionThreshold = (existing.scale + newSeed.scale) * paddingBase;
				return distance < collisionThreshold;
			});

			if (!isOverlapping) {
				seeds.push(newSeed);
				placed = true;
			}
			attempts++;
		}
	}

	return seeds;
}

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

function _generateFallingLeaves() {
	const leafPath = "M20,0 L22,2 L28,0 L30,5 L38,2 L40,10 L45,15 L40,22 L42,30 L35,35 L30,42 L20,55 L10,42 L5,35 L-2,30 L0,22 L-5,15 L0,10 L2,5 L10,0 L18,2 Z";

	const newLeaves: any[] = [];
	const cols = 6;
	const cellWidth = 120;
	const cellHeight = 95;
	const startX = 100; // Left margin
	const startY = 70;  // Top margin

	for (let i = 1; i <= 30; i++) {
		const col = (i - 1) % cols;
		const row = Math.floor((i - 1) / cols);
		const stagger = (row % 2 === 0) ? 0 : 40;
		const jitterX = (Math.random() - 0.5) * 30;
		const jitterY = (Math.random() - 0.5) * 20;

		newLeaves.push({
			day: i,
			d: leafPath,
			x: startX + (col * cellWidth) + stagger + jitterX,
			y: startY + (row * cellHeight) + jitterY,
			color: '#fff',
			rotate: Math.random() * 360,
			scale: 0.85 + Math.random() * 0.25
		});
	}
	return newLeaves;
}

export const MONTH_DAYS_CONFIG: { [key: string]: any } = {
	'April': APRIL_DAYS,
	'August': AUGUST_DAYS,
	'December': DECEMBER_DAYS,
	'February': FEBRUARY_DAYS,
	'January': JANUARY_DAYS,
	'July': JULY_DAYS,
	'June': JUNE_DAYS,
	'September': SEPTEMBER_DAYS,
	'October': OCTOBER_DAYS,
	'November': NOVEMBER_DAYS
}