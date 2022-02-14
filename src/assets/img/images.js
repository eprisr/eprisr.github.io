import FaceIcon from '@material-ui/icons/Face'
import FireplaceIcon from '@material-ui/icons/Fireplace'
import LocalDiningIcon from '@material-ui/icons/LocalDining'
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball'

export const Feat = [
	{ id: 'memfeat', cName: 'feat', src: require('./memory-game-feat.png'),
		title: 'Dessert for Memory', description: 'Personal Project' },
	{ id: 'ed520', cName: 'feat', src: require('./Ed-Dining-520x400.jpg'),
		title: 'Educational Dining', description: 'Continental Services' },
	{ id: 'cont520', cName: 'feat', src: require('./Cont-Client-520x400.png'),
		title: 'Client Movie', description: 'Continental Services' },
	{ id: 'ap520', cName: 'feat', src: require('./Andre-Port-520x400.png'),
		title: 'Portfolio Magazine', description: 'Andre Morton' },
];

export const Images = [
	{ id: 'sweet', cName: 'proj', src: require('./SoSweet_Thumb.jpg'),
		title: 'So Sweet: Case Study', description: 'Brand Strategy' },
	{ id: 'mem', cName: 'proj', src: require('./memory-game.png'),
		title: 'Memory Game', description: 'Javascript' },
	{ id: 'maps', cName: 'proj', src: require('./neighborhood-maps.png'),
		title: 'Neighborhood Map', description: 'React.JS' },
	{ id: 'reads', cName: 'proj', src: require('./my-reads.png'),
		title: 'My Reads', description: 'React.JS' },
	{ id: 'gm305', cName: 'proj', src: require('./GM-Power-305x320.png'),
		title: 'GM Powertrain', description: 'Greeter Board Mini' },
	{ id: 'bala305', cName: 'proj', src: require('./Balaboosta-305x320.png'),
		title: 'Balaboosta', description: 'POS Flyer & Motion Graphic' },
	{ id: 'ed305', cName: 'proj', src: require('./Ed-Dining-305x320.png'),
		title: 'Educational Dining', description: 'Stationery Collateral' },
	{ id: 'cont305', cName: 'proj', src: require('./Cont-Client-305x320.png'),
		title: 'Client Movie', description: 'Continental | Showcase' },
	{ id: 'luc305', cName: 'proj', src: require('./Lucca-305x320.png'),
		title: 'Lucca | Italian Street Food', description: 'Motion Graphic Promo' },
	{ id: 'rof305', cName: 'proj', src: require('./Rise-of-Fall-305x320.png'),
		title: 'The Rise of Fall Pasta', description: 'Point of Sales Flyer' },
	{ id: 'ap305', cName: 'proj', src: require('./Andre-Port-305x320.png'),
		title: 'Portfolio Magazine', description: 'Assisting Art Director' },
]

export const Proj = [
	{ id: 'ap04', cName: 'proj', src: require('./projects/AP_04.jpg'),
		title: 'Portfolio Magazine', description: 'Assisting Art Director' },
	{ id: 'ap05', cName: 'proj', src: require('./projects/AP_05.jpg'),
		title: 'Portfolio Magazine', description: 'Assisting Art Director' },
	{ id: 'ap07', cName: 'proj', src: require('./projects/AP_07.jpg'),
		title: 'Portfolio Magazine', description: 'Assisting Art Director' },
	{ id: 'ap08', cName: 'proj', src: require('./projects/AP_08.jpg'),
		title: 'Portfolio Magazine', description: 'Assisting Art Director' },
	{ id: 'ap10', cName: 'proj', src: require('./projects/AP_10.jpg'),
		title: 'Portfolio Magazine', description: 'Assisting Art Director' },
	{ id: 'ap11', cName: 'proj', src: require('./projects/AP_11.jpg'),
		title: 'Portfolio Magazine', description: 'Assisting Art Director' },
	{ id: 'bala', cName: 'proj', src: require('./projects/Balaboosta.png'),
		title: 'Balaboosta', description: 'Point of Sales Flyer & Motion Graphic' },
	{ id: 'ebroch', cName: 'proj', src: require('./projects/ed-dining-brochure.png'),
		title: 'Educational Dining', description: 'Stationery Collateral' },
	{ id: 'efold', cName: 'proj', src: require('./projects/ed-dining-folder.png'),
		title: 'Educational Dining', description: 'Stationery Collateral' },
	{ id: 'epos', cName: 'proj', src: require('./projects/ed-dining-pos.png'),
		title: 'Educational Dining', description: 'Stationery Collateral' },
	{ id: 'greet', cName: 'proj', src: require('./projects/GMGreeter_1.mp4'),
		title: 'GM Powertrain', description: 'Greeter Board Mini' },
	{ id: 'lucca', cName: 'proj', src: require('./projects/Lucca.mp4'),
		title: 'Lucca | Italian Street Food', description: 'Motion Graphic Promo' },
	{ id: 'rofpos', cName: 'proj', src: require('./projects/rise-of-fall.png'),
		title: 'The Rise of Fall Pasta', description: 'Point of Sales Flyer' },
];

export const Jobs = [
	{ id: 'brooks', cName: 'logo', src: require('./brooks-logo.png'),
		title: 'Brooks', description: 'Logo', icon: <FireplaceIcon />, company: "Brooks Equipment", jobTitle: "Web Developer & Graphic Designer" },
	{ id: 'bradley', cName: 'logo', src: require('./bradley-logo.png'),
		title: 'Bradley', description: 'Logo', icon: <FaceIcon />, company: "Bradley Co.", jobTitle: "Graphic Designer" },
	{ id: 'continental', cName: 'logo', src: require('./continental-logo.png'), title: 'Continental', description: 'Logo', icon: <LocalDiningIcon />, company: "Continental Services", jobTitle: "Graphic & Motion Designer" },
	{ id: 'palace', cName: 'logo', src: require('./palace-logo.png'),
		title: 'Palace Sports & Entertainment', description: 'Logo', icon: <SportsBasketballIcon />, company: "Palace Sports & Entertainment", jobTitle: "Graphic Design Intern" }
]

export const themeIcons = [
	{ id: 'primary', cName: 'theme', src: require('../icons/ColorSelectorDefault.png'), title: 'Default Theme', description: 'Theme' },
	{ id: 'secondary', cName: 'theme', src: require('../icons/ColorSelectorSecondary.png'), title: 'Secondary Theme', description: 'Theme' },
	{ id: 'dark', cName: 'theme', src: require('../icons/ColorSelectorDark.png'), title: 'Dark Theme', description: 'Theme' }
]