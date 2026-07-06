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
	{ label: 'happy', color: '#FCF8E8' },
	{ label: 'neutral', color: '#D4A373' },
	{ label: 'stressed', color: '#8B5E3C' },
	{ label: 'tired', color: '#6F4E37' },
	{ label: 'moody', color: '#3D2B1F' },
	{ label: 'sad', color: '#1A0F0A' }
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

export const QUOTE_MOODS: { [key: string]: string[] } = {
	happy: ['happiness', 'love', 'humor'],
	neutral: ['life', 'time', 'nature'],
	stressed: ['success', 'leadership', 'freedom'],
	tired: ['wisdom', 'philosophy', 'writing'],
	moody: ['courage', 'truth', 'faith'],
	sad: ['relationships', 'inspirational', 'art']
};

export const MOOD_ENTRIES: { [key: string]: string[] } = {
	happy: [
		"Woke up today feeling incredibly refreshed. Had a perfect cup of coffee and the weather is amazing. Ready to tackle my next feature!",
		"Had a great call with friends tonight. It's nice when everything just flows naturally and feels easy. Feeling deeply grateful.",
		"Finally hit a major breakthrough on the project layout. It's a huge weight off my chest and I can't stop smiling about how clean it looks.",
		"Everything is clicking into place today. The code is running smoothly, and I feel completely in my element.",
		"Had an amazing workout earlier and the post-exercise high is completely carrying my mood this evening.",
		"Spent some time listening to my favorite music while working, and it completely turned my day around. Just pure good vibes.",
		"It's a beautiful afternoon. Took my laptop outside for a bit and just felt genuinely happy with where things are going.",
		"Received some incredibly kind feedback on a design I've been working on. It's a fantastic reminder of why I love doing this.",
		"Found an old playlist I used to love and spent the whole afternoon coding with a huge smile on my face.",
		"The sunset this evening was absolutely breathtaking. I had to step out onto the balcony just to appreciate the view.",
		"Finally cleared a bug that had been bothering me for three days straight. The feeling of absolute triumph is unmatched!",
		"Had a really productive coding session this morning. It feels amazing to watch a concept in your head come to life on screen.",
		"The morning light coming through the window was perfect today. Starting the day in a clean, bright room changes everything.",
		"Met up with someone for lunch and laughed until my stomach hurt. Exactly the kind of positive energy I needed today.",
		"Everything felt effortless today. I'm hitting a fantastic rhythm with my current project and feeling super optimistic about the future."
	],
	neutral: [
		"Just a routine day. Spent the afternoon cleaning up my file structure and dealing with some light reading. Nothing crazy to report.",
		"Did some grocery shopping, prepped dinner, and went for a brief walk. Keeping things steady and simple today.",
		"The day went by relatively quickly. Mostly just ambient focus and ticking off basic checkboxes on my to-do list.",
		"Not a particularly exciting day, but an incredibly balanced one. Just moving at an easy, comfortable pace.",
		"Cooked a basic dinner and caught up on a few articles. It's nice to have a quiet, uneventful evening every once in a while.",
		"Spent the morning organizing my workspace. A clean desk helps keep the mind clear, even on ordinary days.",
		"Nothing major happened today—just consistent, quiet work. Sometimes a lack of drama is exactly what you need.",
		"Weather was pretty overcast today. Kept things low-key and just focused on getting through the baseline tasks.",
		"Just an ordinary day. Responded to some emails, did a bit of formatting, and kept the momentum steady.",
		"No highs, no lows today. Just a completely level-headed afternoon of focusing on standard code maintenance.",
		"Took a longer lunch break than usual today just to clear my head, then got back to a quiet evening of studying.",
		"Spent a few hours reviewing some basic programming logic. It's good to keep the foundational skills sharp on quiet days.",
		"The afternoon was incredibly quiet. Just watched the rain from the window while working through my backlog.",
		"Ran some errands, did the laundry, and handled the basic life stuff. Glad to have a completely predictable day.",
		"Finished my tasks right on time today. No emergencies, no crazy breakthroughs—just solid, standard progress."
	],
	stressed: [
		"There are way too many tasks piled up and I feel like I'm drowning in lines of code. I need to break this down before I burn out.",
		"The deadline is looming closer and things aren't compiling the way they should. Taking a deep breath, but my mind is racing.",
		"Struggled with state management bugs for hours. My head is spinning a bit. I need to step away from the keyboard and reset.",
		"My inbox and to-do list are both completely overflowing. Every time I clear one problem, two more seem to take its place.",
		"Felt the pressure building up in my chest all afternoon. Trying hard not to let panic take over, but it's tough right now.",
		"Too much noise and too many distractions today. I feel pulled in ten different directions and can't seem to find my focus.",
		"An unexpected bug completely wrecked my afternoon timeline. Trying to fix it under pressure is making my nerves fray.",
		"My mind is completely locked in overdrive. I know I should log off, but the anxiety of leaving things unfinished is keeping me glued here.",
		"Trying to learn a new framework under a time crunch is incredibly overwhelming. I feel like I'm completely out of my depth.",
		"Can't seem to get my thoughts organized today. My notes are a mess, my desk is a mess, and my brain feels just as cluttered.",
		"Had three different things go wrong with my layout at the same time. The frustration is really starting to get to me.",
		"My neck and shoulders are so tense from hunching over this keyboard all day. The physical stress is catching up to the mental stress.",
		"Every little problem feels magnified tenfold tonight. I know it's just stress talking, but it's incredibly hard to shake off.",
		"Too many open tabs in my browser and too many open loops in my head. I'm completely short-circuiting right now.",
		"Felt a wave of overwhelm during my afternoon review. I need to aggressively simplify my goals for the rest of the week."
	],
	tired: [
		"My eyes are burning from staring at this IDE. Completely drained of energy. Going to turn off all screens and sleep early.",
		"Brain feels like absolute mush. I tried reading over some logic but couldn't process a single sentence. I'm completely tapped out.",
		"Low energy day. Moved slowly, drank too much caffeine, and didn't accomplish half of what I wanted. Time to rest.",
		"I can feel the mental fatigue setting in heavily. Every single task feels like it's taking twice as long as it normally would.",
		"Completely exhausted, both physically and mentally. I think I've reached my absolute limit for the week.",
		"Struggled to stay awake during the afternoon slump. No amount of coffee seems to be overriding this level of exhaustion.",
		"Just going through the motions this evening. My battery is at 1% and I desperately need a solid night of uninterrupted sleep.",
		"Giving myself permission to just do nothing tonight. My brain is entirely out of fuel and needs a complete system shut down.",
		"Yawning constantly since 2:00 PM. I tried taking a quick power nap, but I still feel like a zombie walking through my tasks.",
		"The thought of writing even one more function makes me want to close my laptop and hide under the covers. Total burnout.",
		"My focus is completely gone. I've been staring at the exact same paragraph for twenty minutes without digesting a single word.",
		"Skipped my workout tonight because my legs feel like lead. Just going to heat up some leftovers and slide straight into bed.",
		"Heavy eyelids and a slow mind. Today was a marathon, and my brain is officially signing off for the night.",
		"Even simple decision-making feels impossible right now. I don't even have the energy to decide what to watch on TV.",
		"A completely exhausted evening. Turning off all notifications and prioritizing 8 hours of sleep above everything else."
	],
	moody: [
		"One minute I feel completely motivated, and the next I'm questioning why I am even building this. Just riding the emotional waves today.",
		"Felt a weird sense of restlessness all afternoon. Not quite sad, not quite happy, just deeply unfocused and searching for a change of pace.",
		"Uncertainty is kicking in. Trying to find the courage to keep moving forward, but my confidence keeps shifting back and forth.",
		"I can't quite pinpoint why, but everything is slightly irritating me today. Just in a strange, impatient head space.",
		"My motivation is bouncing all over the place. I want to build things, but the second I start, I instantly lose interest.",
		"Feeling a little out of sync with my usual routine today. Just a chaotic, indecisive mix of thoughts that won't settle down.",
		"One moment I think my designs are brilliant, and five minutes later I think they look terrible. Standard creative mood swings, I guess.",
		"A bit irritable this evening. Just going to put my headphones on, block out the world, and try to balance myself out.",
		"I keeps changing my mind every five minutes. Can't commit to a color palette, a font, or even what I want to eat.",
		"An strange mix of ambition and complete apathy today. I have the drive to work, but zero patience for any obstacles.",
		"Felt completely inspired this morning, but by the afternoon that energy totally evaporated, leaving me incredibly frustrated.",
		"Just feeling incredibly restless. I want to go out, but I also want to stay in. I can't seem to satisfy whatever my brain wants.",
		"The environment feels slightly claustrophobic today. I think I just need a massive shift in scenery to snap out of this funk.",
		"My emotional weather report for today is highly unpredictable. Just trying to stay quiet so I don't take it out on anyone else.",
		"Caught between wanting to crush my goals and wanting to throw my hands up and delete the whole repository. Creative turbulence at its finest."
	],
	sad: [
		"Everything feels heavy and exhausting today. Having a hard time finding motivation to even open up my project files.",
		"A bit of a rough day emotionally. Just feeling isolated and stuck in my own head. Hoping tomorrow brings a little more light.",
		"Disappointed with how things panned out today. It feels like an uphill battle where nothing is going right. Just a heavy evening.",
		"Feeling a strange, quiet loneliness today. It's hard to shake the feeling that I'm just running in place without getting anywhere.",
		"Didn't really have the heart to work on much today. Sometimes you just have to allow yourself to feel down and ride it out.",
		"A wave of self-doubt hit me pretty hard this afternoon. Wondering if I'm cut out for this or if I'm just spinning my wheels.",
		"It's just one of those low days where everything feels a bit dim and colorless. Trying not to judge myself for feeling this way.",
		"The evening feels quiet and heavy. Going to keep things gentle, wrap up in a blanket, and hope for a fresher perspective tomorrow.",
		"Had to step away from my work earlier because the negative thoughts were getting too loud. Taking a break to just breathe.",
		"Felt a sudden ache of nostalgia today looking through old photos. Miss how simple things used to be sometimes.",
		"It's hard when you put your heart into something and it doesn't get the result you expected. Feeling pretty discouraged tonight.",
		"Just a gray day overall. The energy in the room feels completely flat, and my mood is right there along with it.",
		"Spent the evening overthinking past mistakes. It's an exhausting loop to get stuck in, and it's draining the life out of my night.",
		"Felt entirely disconnected from my goals today. Just going to give myself some grace and treat tonight as a mental health pause.",
		"The house feels incredibly quiet tonight. Just listening to the background hum of the fridge and sitting with my thoughts."
	]
};

export type StatusType = 'no_update' | 'update';

export const ACTIVITY_STATUS: Record<StatusType, string> = {
	no_update: "There is no recent activity to display.",
	update: "Recent activity: Your mood has been updated for today!"
};