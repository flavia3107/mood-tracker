export const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const JANUARY_MOOD_COLORS = [
	{ label: 'happy', color: '#ebeff2' },
	{ label: 'neutral', color: '#c0d4dc' },
	{ label: 'stressed', color: '#94b7c5' },
	{ label: 'tired', color: '#5f8e9d' },
	{ label: 'moody', color: '#3a6675' },
	{ label: 'sad', color: '#2e4d57' }
];
const FEBRUARY_MOOD_COLORS = [
	{ label: 'happy', color: '#FCF8E8' },   // White
	{ label: 'neutral', color: '#D4A373' }, // Caramel
	{ label: 'stressed', color: '#8B5E3C' },// Milk
	{ label: 'tired', color: '#6F4E37' },   // Mocha
	{ label: 'moody', color: '#3D2B1F' },   // Dark
	{ label: 'sad', color: '#1A0F0A' }     // Black Cocoa
];
const MARCH_MOOD_COLORS = [
	{ label: 'happy', color: '#ecef7e' },
	{ label: 'neutral', color: '#d9e261' },
	{ label: 'stressed', color: '#c8ce50' },
	{ label: 'tired', color: '#d2dd77' },
	{ label: 'moody', color: '#b6bd5f' },
	{ label: 'sad', color: '#adc054' }
];
const APRIL_MOOD_COLORS = [
	{ label: 'happy', color: '#ECEFF1' },
	{ label: 'neutral', color: '#CFD8DC' },
	{ label: 'stressed', color: '#B0BEC5' },
	{ label: 'tired', color: '#90A4AE' },
	{ label: 'moody', color: '#78909C' },
	{ label: 'sad', color: '#607D8B' }
];
const MAY_MOOD_COLORS = [
	{ label: 'happy', color: '#feeef0' },
	{ label: 'neutral', color: '#FDD7E4' },
	{ label: 'stressed', color: '#eea2bc' },
	{ label: 'tired', color: '#F8B1CA' },
	{ label: 'moody', color: '#F36D9B' },
	{ label: 'sad', color: '#D94773' }
];
const JUNE_MOOD_COLORS = [
	{ label: 'happy', color: '#ffeaeb' },
	{ label: 'neutral', color: '#ffb5b9' },
	{ label: 'stressed', color: '#f27c82' },
	{ label: 'tired', color: '#e0464f' },
	{ label: 'moody', color: '#af142e' },
	{ label: 'sad', color: '#840627' }
];
const JULY_MOOD_COLORS = [
	{ label: 'happy', color: '#FFD54F' },
	{ label: 'neutral', color: '#FFB300' },
	{ label: 'stressed', color: '#E68910' },
	{ label: 'tired', color: '#C66900' },
	{ label: 'moody', color: '#8D6E63' },
	{ label: 'sad', color: '#4E342E' }
];
const AUGUST_MOOD_COLORS = [
	{ label: 'happy', color: '#FFF59D' },
	{ label: 'neutral', color: '#FFEB3B' },
	{ label: 'stressed', color: '#FBC02D' },
	{ label: 'tired', color: '#FFA000' },
	{ label: 'moody', color: '#F57C00' },
	{ label: 'sad', color: '#BF360C' }
];
const SEPTEMBER_MOOD_COLORS = [
	{ label: 'happy', color: '#D4E157' },
	{ label: 'neutral', color: '#9fc03b' },
	{ label: 'stressed', color: '#70a240' },
	{ label: 'tired', color: '#566e2e' },
	{ label: 'moody', color: '#386b37' },
	{ label: 'sad', color: '#203016' }
];
const OCTOBER_MOOD_COLORS = [
	{ label: 'happy', color: '#FFD54F' },
	{ label: 'neutral', color: '#FFA726' },
	{ label: 'stressed', color: '#FB8C00' },
	{ label: 'tired', color: '#E65100' },
	{ label: 'moody', color: '#BF360C' },
	{ label: 'sad', color: '#5D4037' }
];
const NOVEMBER_MOOD_COLORS = [
	{ label: 'happy', color: '#ead6ca' },
	{ label: 'neutral', color: '#ddb892' },
	{ label: 'stressed', color: '#b08968' },
	{ label: 'tired', color: '#8b5e3c' },
	{ label: 'moody', color: '#5f4033' },
	{ label: 'sad', color: '#3c2a21' }
];
const DECEMBER_MOOD_COLORS = [
	{ label: 'happy', color: '#ffeaeb' },
	{ label: 'neutral', color: '#ffb5b9' },
	{ label: 'stressed', color: '#f27c82' },
	{ label: 'tired', color: '#e0464f' },
	{ label: 'moody', color: '#af142e' },
	{ label: 'sad', color: '#840627' }
];

export const MONTHLY_MOOD_CONFIG: { [key: string]: any } = {
	'January': JANUARY_MOOD_COLORS,
	'February': FEBRUARY_MOOD_COLORS,
	'March': MARCH_MOOD_COLORS,
	'April': APRIL_MOOD_COLORS,
	'May': MAY_MOOD_COLORS,
	'June': JUNE_MOOD_COLORS,
	'July': JULY_MOOD_COLORS,
	'August': AUGUST_MOOD_COLORS,
	'September': SEPTEMBER_MOOD_COLORS,
	'October': OCTOBER_MOOD_COLORS,
	'November': NOVEMBER_MOOD_COLORS,
	'December': DECEMBER_MOOD_COLORS,
};