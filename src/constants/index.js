import {
	mobile,
	arm,
	backend,
	creator,
	web,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
	abbName,
	abb,
	omronName,
	omron,
	staubliName,
	staubli,
	kukaName,
	kuka,
	service,
	support,
	solution,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "O mě",
	},
	{
		id: "work",
		title: "Práce",
	},
	{
		id: "contact",
		title: "Kontakt",
	},
];

const services = [
	{
		title: "Programování robotů",
		icon: arm,
	},
	{
		title: "Řešení na míru",
		icon: solution,
	},
	{
		title: "Servis",
		icon: service,
	},
	{
		title: "Support",
		icon: support,
	},
];

const technologies = [
	{
		name: "abbName",
		icon: abbName,
	},
	{
		name: "abb",
		icon: abb,
	},
	{
		name: "omronName",
		icon: omronName,
	},
	{
		name: "omron",
		icon: omron,
	},
	{
		name: "staubliName",
		icon: staubliName,
	},
	{
		name: "staubli",
		icon: staubli,
	},
	{
		name: "kukaName",
		icon: kukaName,
	},
	{
		name: "kuka",
		icon: kuka,
	},
];

const experiences = [
	{
		title: "Návrh a Programování",
		company_name: "EPO machinery",
		icon: starbucks,
		iconBg: "#383E56",
		date: "March 2020 - April 2021",
		points: [
			"Vývoj a údržba webových aplikací pomocí React.js a dalších souvisejících technologií.",
			"Spolupráce s mezifunkčními týmy včetně designérů, produktových manažerů a dalších vývojářů na vytváření vysoce kvalitních produktů.",
			"Implementace responzivního designu a zajištění kompatibility napříč prohlížeči.",
			"Účast na kontrolách kódu a poskytování konstruktivní zpětné vazby ostatním vývojářům.",
		],
	},
	{
		title: "Návrh a Programování",
		company_name: "Philipino",
		icon: tesla,
		iconBg: "#E6DEDD",
		date: "Jan 2021 - Feb 2022",
		points: [
			"Vývoj a údržba webových aplikací pomocí React.js a dalších souvisejících technologií.",
			"Spolupráce s mezifunkčními týmy včetně designérů, produktových manažerů a dalších vývojářů na vytváření vysoce kvalitních produktů.",
			"Implementace responzivního designu a zajištění kompatibility napříč prohlížeči.",
			"Účast na kontrolách kódu a poskytování konstruktivní zpětné vazby ostatním vývojářům.",
		],
	},
	{
		title: "Návrh a Programování",
		company_name: "Shopify",
		icon: shopify,
		iconBg: "#383E56",
		date: "Jan 2022 - Jan 2023",
		points: [
			"Vývoj a údržba webových aplikací pomocí React.js a dalších souvisejících technologií.",
			"Spolupráce s mezifunkčními týmy včetně designérů, produktových manažerů a dalších vývojářů na vytváření vysoce kvalitních produktů.",
			"Implementace responzivního designu a zajištění kompatibility napříč prohlížeči.",
			"Účast na kontrolách kódu a poskytování konstruktivní zpětné vazby ostatním vývojářům.",
		],
	},
	{
		title: "Seřizovač",
		company_name: "Meta",
		icon: meta,
		iconBg: "#E6DEDD",
		date: "Jan 2023 - Present",
		points: [
			"Vývoj a údržba webových aplikací pomocí React.js a dalších souvisejících technologií.",
			"Spolupráce s mezifunkčními týmy včetně designérů, produktových manažerů a dalších vývojářů na vytváření vysoce kvalitních produktů.",
			"Implementace responzivního designu a zajištění kompatibility napříč prohlížeči.",
			"Účast na kontrolách kódu a poskytování konstruktivní zpětné vazby ostatním vývojářům.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "ABB Robot-sváření",
		description:
			"ABB Robot-svářeníABB Robot-svářeníABB Robot-svářeníABB Robot-svářeníABB Robot-svářeníABB Robot-svářeníABB Robot-svářeníABB Robot-svářeníABB Robot-svářeníABB Robot-svářeníABB Robot-sváření.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: carrent,
		source_code_link: "https://github.com/",
	},
	{
		name: "Kuka",
		description:
			"Kuka robotKuka robotKuka robotKuka robotKuka robotKuka robotKuka robotKuka robotKuka robotKuka robotKuka robotKuka robotKuka robotKuka robotKuka robotKuka robotKuka robot.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: jobit,
		source_code_link: "https://github.com/",
	},
	{
		name: "Omron Robot",
		description:
			"Omron RobotOmron RobotOmron RobotOmron RobotOmron RobotOmron RobotOmron RobotOmron RobotOmron RobotOmron RobotOmron RobotOmron RobotOmron RobotOmron Robot.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: tripguide,
		source_code_link: "https://github.com/",
	},
];

const bussines = ["Telefon", "Email", "LinkedIn"];
const bussinesInfo = ["775 665 990", "petrludvik16@gmail.com"];

const linkedInURL = "https://www.linkedin.com/in/petr-ludvik-a662a91a7/";

export {
	services,
	technologies,
	experiences,
	testimonials,
	projects,
	bussines,
	bussinesInfo,
	linkedInURL,
};
