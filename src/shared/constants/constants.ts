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
	{ label: 'happy', color: '#ffef9c' },
	{ label: 'neutral', color: '#ffe09d' },
	{ label: 'stressed', color: '#fecb7b' },
	{ label: 'tired', color: '#febe64' },
	{ label: 'moody', color: '#ed934f' },
	{ label: 'sad', color: '#b87242' }
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
	{ label: 'happy', color: '#F1CF5E' },
	{ label: 'neutral', color: '#E7B54E' },
	{ label: 'stressed', color: '#DD9A3E' },
	{ label: 'tired', color: '#D4802D' },
	{ label: 'moody', color: '#CA651D' },
	{ label: 'sad', color: '#C04B0D' }
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

export const MONTHLY_BACKGROUNDS: { [key: string]: string } = {
	'January': 'frost.png',
	'February': 'valentine.png',
	'March': 'st-patrick.png',
	'April': 'rain.png',
	'May': 'sakura-tree.png',
	'June': 'watermelon.png',
	'July': 'bee.png',
	'August': 'sunflower.png',
	'September': 'leaves.png',
	'October': 'pumpkin.png',
	'November': 'knit.png',
	'December': 'tree.png',
};

export const MONTHLY_BACKGROUNDS_COLORS: { [key: string]: string } = {
	'January': 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
	'February': 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
	'March': 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
	'April': 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
	'May': 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
	'June': 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
	'July': 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
	'August': 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
	'September': 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
	'October': 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
	'November': 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
	'December': 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
};



export type Mood = 'happy' | 'neutral' | 'stressed' | 'tired' | 'moody' | 'sad';

export const MOOD_MESSAGES: Record<Mood, { label: string, icon: string, value: number }> = {
	happy: { label: "Happy - Riding high and loving life! Let's keep this amazing energy rolling.", icon: 'happy.png', value: 6 },
	neutral: { label: "Neutral - Just cruising along in steady waters. A perfectly balanced, peaceful day.", icon: 'neutral.png', value: 5 },
	stressed: { label: "Stressed - Deep breaths. Things feel overwhelming right now, but you can handle this piece by piece.", icon: 'stressed.png', value: 4 },
	tired: { label: "Tired - Battery low. Time to unplug, step away from the screens, and get some well-deserved rest.", icon: 'tired.png', value: 3 },
	moody: { label: "Moody - A bit of a rollercoaster right now? Totally valid. Give yourself some space to just feel it out.", icon: 'moody.png', value: 2 },
	sad: { label: "Sad - It's okay not to be okay. Sending you a gentle reminder that it's perfectly fine to take it easy today.", icon: 'sad.png', value: 1 }
};

export interface MoodConfig {
	min: number;
	max: number;
	message: string;
}

export const MOOD_RANGES: MoodConfig[] = [
	{
		min: 9,
		max: 10,
		message: 'An absolutely incredible month! You hit the absolute peak of positivity, radiating vibrant energy and making the most of every single moment. Take a moment to celebrate this beautiful chapter and carry this brilliant momentum forward into the weeks ahead.'
	},
	{
		min: 8,
		max: 9,
		message: 'This month was highly positive, joyful, and full of wonderful energy. Your bright outlook really shined through, helping you navigate your days with a genuine sense of appreciation and happiness. Keep nurturing whatever habits or mindsets brought you this much fulfillment.'
	},
	{
		min: 7,
		max: 8,
		message: 'Good vibes overall! You successfully maintained a bright and sunny outlook, striking a wonderful balance between active joy and steady contentment. It is a beautiful thing to look back and see a month defined by such consistent warmth and light.'
	},
	{
		min: 6,
		max: 7,
		message: 'A remarkably solid month. Things went smoothly and mostly in your favor, allowing you to move through your days with comfort and ease. It might not have been a non-stop highlight reel, but it was a genuinely good, supportive period of time.'
	},
	{
		min: 5,
		max: 6,
		message: 'A beautifully balanced and steady month. Cruising on an even, calm keel allowed you to find a peaceful, grounded rhythm amidst the usual daily hustle. There is profound magic in a quiet, stable month where you can simply exist without heavy pressures.'
	},
	{
		min: 4,
		max: 5,
		message: 'Things felt a bit overwhelming and chaotic at times. It is completely normal to have months that test your resolve, so please remember to pause and breathe deeply. Give yourself immense credit for navigating the stormy patches and making it through to the other side.'
	},
	{
		min: 3,
		max: 4,
		message: 'Your overall energy levels ran quite low this month. If you have been feeling physically drained or emotionally spent, consider this a clear gentle signal to prioritize deep, restorative rest. Be fiercely protective of your peace and focus on slowly refilling your own cup.'
	},
	{
		min: 2,
		max: 3,
		message: 'Your emotions fluctuated quite a bit over the last few weeks, making things feel like a bit of a rollercoaster. Please be gentle and endlessly patient with yourself as you navigate these complex internal tides. Healing and growing are never linear, and every feeling you had was completely valid.'
	},
	{
		min: 1,
		max: 2,
		message: 'It has been an incredibly heavy and difficult month for you. Please extend the utmost grace to yourself right now, and remember that you never have to carry the weight of hard times completely alone. Lean on your loved ones and reach out to your support system whenever you feel ready.'
	},
	{
		min: 0,
		max: 0,
		message: 'No mood tracking data has been recorded for this month just yet. Every blank canvas is a fresh opportunity, so don\'t feel any pressure about missing days. We will be right here to help you reflect and track your journey whenever you feel ready to start logging again.'
	}
];