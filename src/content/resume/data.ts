export const resume: ResumeJson = {
	avatarUrl: "/sai-hlaing/profile/profile.jpg",
	name: "Sai Hlaing Lu",
	positionAppliedFor: "Software Engineer",

	// NOTE: Ideal character count is `550` characters.
	biography: `Hi, I'm a software engineer who is always trying to improve systems to make them more flexible, reliable and scalable. I have more than 4+ years of experience in software development. I can work with professionals in various fields and am willing to learn new things. I like playing video games and watching technology-related videos on YouTube. I'm currently interested in GoLang and learning Data structures and algorithms using Golang.`,

	personalInfo: {
		dateOfBirth: "08, 11, 1997",
		nationality: "Myanmar",
		religion: "Buddhism",
		maritalStatus: "married",
		address: "Yangon, Myanmar",
	},

	contactInfo: {
		phone: ["+95961282967"],
		email: ["saisailuhlaing@gmail.com"],
		links: [
			{
				label: "https://saihlu.github.io/sai-hlaing/",
				url: "https://saihlu.github.io/sai-hlaing/",
			},
			{
				icon: "fa-brands fa-github",
				label: "https://github.com/SaiHLu",
				url: "https://github.com/SaiHLu",
			},
			{
				icon: "fa-brands fa-linkedin",
				label: "https://www.linkedin.com/in/sai-hlaing-lu-320711144/",
				url: "https://www.linkedin.com/in/sai-hlaing-lu-320711144/",
			},
		],
	},

	skills: [
		"HTML",
		"CSS",
		"TailwindCss",
		"JavaScript",
		"TypeScript",
		"React.JS",
		"Vue.JS",
		"Next.JS",
		"Nuxt.JS",
		"Remix.JS",
		"",
		"Node.JS",
		"Express.JS",
		"Nest.JS",
		"GoLang",
		"Laravel",
		"MySQL",
		"Postgres",
		"MongoDB",
		"",
		"Vite.JS",
		"PostCSS",
		"",
		"Git",
		"GitHub",
		"GitLab",
		"BitBucket",
		"Jira",
		"ClickUp",
		"",
		"Digital Ocean",
		"Linode",
		"AWS EC2",
		"AWS S3",
		"AWS Fargate",
		"Vercel",
		"Netlify",
		"Docker",
		"Firebase",
	],

	educationHistory: [
		{
			schoolName: "University of Computer Studies, Yangon",
			history: [
				{
					educationTitle: "B.C.Sc (Bachelor of Computer Science)",
					fromYear: "2014",
					toYear: "2019",
				},
			],
		},
	],

	spokenLanguage: [
		{
			label: "Myanmar",
			proficiency: "First Language",
		},
		{
			label: "English",
			proficiency: "Intermediate",
		},
		{
			label: "Chinese",
			proficiency: "Intermediate",
		},
	],

	references: [
		{
			personName: "Kyaw Naing Tun",
			position: "CTO",
			company: "KLink Myanmar",
			email: "kyaw@klink.cloud",
		},
	],

	workExperiences: [
		{
			companyName: "KLink Myanmar",
			companyUrl: "https://www.klink.cloud",
			assignedPosition: "Senior Software Enginner",
			fromDate: "Oct 2023",
			toDate: "Present",
			links: ["https://klink.cloud"],
			descriptions: [
				"SAAS Product includes contact center, omni channels and more.",
				"Revamp Backend Service from all-in-one service to multiple services",
				"Standardize the Backend Development decisions such as using Nest.JS, TypeScript and Golang.",
				"Pre-plan and run Proof-of-Concepts of new technologies for the upcoming features.",
				"Listen to Yeastar Telephone Server websocket using golang, processing data and publish the critical data to Apache Kafka",
			],
		},

		{
			companyName: "KBZ Bank",
			companyUrl: "https://kbzbank.com",
			assignedPosition: "FrontEnd Software Enginner",
			fromDate: "Aug 2022",
			toDate: "Sep 2023",
			links: ["https://selfservice.kbzbank.com"],
			descriptions: [
				"Actively participated in migration from JavaScript to Typescript with React.JS for the whole KBZBank Frontend Development Team.",
				"Developed Self Service Banking Portal using React.JS in which customers can open new bank accounts via online.",
				"Implemented a Cash Management System using React.JS , Nest.JS , OracleDB which controls all the cash flow of all the KBZBank Branches.",
				"Also implemented a Survey project using React.JS which users can answers survey for their satisfaction level for the service they get from the bank and the feedback.",
			],
		},

		{
			companyName: "Future Hub Myanmar",
			companyUrl: "https://futurehubmyanmar.com/",
			assignedPosition: "Senior Web Developer",
			fromDate: "March 2020",
			toDate: "July 2022",
			links: ["https://futurehubmyanmar.com/"],
			descriptions: [
				"A 'case management system' was maintained for the government (before the coup) to check application forms submitted by different organizations. Ministries could check the application forms and forward them internally to the relevant departments whether to approve/reject.",
				"Developed a 'Game Portal System' for Billiard game. Buy/Sell coins and check user activities during the game.",
				"Developed a 'Line Work Notification Reminder System' based on the “Time King” attendance record, which automatically notifies employees and their supervisors/managers at 04:50 pm on working days whether they need to apply for lateness. Supervisors and managers will also be notified to approve/reject the request.",
				"Developed a 'Membership System' for hotel bookings.",
				"Developed a 'Real Estate System' which includes the functionality to search for houses for rent and purchase across Myanmar.",
				"Developed a 'Mini POS System' that includes simple functions such as printing receipts, product categories and product quantities in store.",
				"Helped and trained juniors.",
			],
		},

		{
			companyName: "Nanyan",
			companyUrl: "https://www.nanyan.com.mm/",
			assignedPosition: "Web Developer",
			fromDate: "Oct 2021",
			toDate: "Feb 2022",
			links: ["https://www.nanyan.com.mm/"],
			descriptions: ["Developed e-commerce dashboard for Nanyan Company.", "Outsource"],
		},

		{
			companyName: "Huawei",
			companyUrl: "https://www.huawei.com/en/",
			assignedPosition: "Internship",
			fromDate: "May 2019",
			toDate: "July 2019",
			links: ["https://www.huawei.com/en/"],
			descriptions: [
				"Developed an automation system for internal team using Ui-Path.",
				"The product helps employees upload their documents to the server automatically on working days. Before uploading, I used Python to extract data from the documents and calculate the product price and quantity provided by the employee. The product also sends an email to the employee's supervisor when the product price or quantity does not match expectations.",
			],
		},
	],

	achievements: [
		"SAAS product with multi-tenant knowledge. Learn and apply Golang at KLink Myanmar.",
		"Collaborate with UI/UX Team and participate in standardize the Design System for the KBZBank.",
		"Participated in the movement of migrating JavaScript projects to TypeScript for the whole KBZBank Frontend Development Team.",
		"Decision maker for product scalable, flexible, and reliable backend systems.",
		"Volunteered as Tech Organizer at 2019 ITCamp UCSY.",
		"Participated in and developed the UCSY Student Union website, mainly responsible for the frontend part at 2019.",
		"Volunteered at 2018 BarCamp Yangon.",
	],
}
