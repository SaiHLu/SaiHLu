export const resume: ResumeJson = {
	avatarUrl: "/SaiHLu/profile/profile.jpg",
	name: "Sai Hlaing Lu",
	positionAppliedFor: "Software Engineer",

	// NOTE: Ideal character count is `550` characters.
	biography: `Hi, I'm a software engineer passionate about enhancing systems to be more flexible, reliable, and scalable. With over 5 years of experience in software development, I collaborate effectively with professionals across various domains and have a strong eagerness to learn new technologies. In my free time, I enjoy playing video games and exploring tech content on YouTube.`,

	personalInfo: {
		dateOfBirth: "08, 11, 1997",
		nationality: "Myanmar",
		religion: "Buddhism",
		maritalStatus: "married",
		address: "Sukhumvit 113, Samrong Nuea, Mueang Samut Prakan District, Samut Prakan 10270.",
	},

	contactInfo: {
		phone: ["+66993383740"],
		email: ["saisailuhlaing@gmail.com"],
		links: [
			{
				label: "https://saihlu.github.io/SaiHLu/",
				url: "https://saihlu.github.io/SaiHLu/",
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
		"Python",
		"FastAPI",
		"MySQL",
		"Postgres",
		"MongoDB",
		"",
		"Vite.JS",
		"PostCSS",
		"",
		"Git",
		"GitHub",
		"Github Actions",
		"GitLab",
		"BitBucket",
		"Jira",
		"ClickUp",
		"",
		"Digital Ocean",
		"Linode",
		"AWS EC2",
		"AWS S3",
		"AWS Cloudfront",
		"AWS Fargate",
		"AWS MSK",
		"AWS Codepipelines",
		"Vercel",
		"Netlify",
		"Docker",
		"Kubernetes",
		"Firebase",
		"GRPC",
		"LLM",
		"Langchain",
		"Langgraph"
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
			toDate: "May 2025",
			links: ["https://klink.cloud"],
			descriptions: [
				"Developed a SAAS product featuring a contact center, omni-channel support, and additional services.",
				"As a Senior Software Engineer, I played a key role in leading the migration of the backend architecture from a single-database system to a multi-database SaaS architecture using NestJS, Golang, and AWS, while working closely with cross-functional teams to deliver new features efficiently.",
				"Established standards for backend development, including the adoption of NestJS, TypeScript, and Golang.",
				"Conducted pre-planning and proof-of-concept evaluations for new technologies to support upcoming features.",
				"Integrated Yeastar Telephone Server with Golang to process websocket data, publishing critical information to Apache Kafka.",
				"Technologies used: HTML, CSS, JavaScript, TailwindCSS, React.js, Node.js, NestJS, Golang, Apache Kafka, AWS S3, AWS EC2, AWS CloudFront, AWS MSK, AWS CodePipeline, Git/GitHub, PostgreSQL.",
			],
		},

		{
			companyName: "Atom Myanmar",
			companyUrl: "https://www.atom.com.mm/en",
			assignedPosition: "Web Developer",
			fromDate: "March 2024",
			toDate: "April 2024",
			links: ["https://broadband-atom-com-mm.vercel.app/"],
			descriptions: [
				"Outsource",
				"Collaborate with UI/UX team and implemented a broadband information website.",
				"Technologies used: HTML, CSS, Javascript, Tailwindcss, Vue, Nuxt.js, Vercel, Git/Github.",
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
				"Developed a survey application using React.js, enabling users to provide feedback and rate their satisfaction with banking services.",
				"Technologies used: HTML, CSS, Javascript, TailwindCss, React.js, Remix.js, Node.js, Nest.js, AWS S3, AWS Ec2, AWS Cloudfront, AWS Lambda, Git/Github, OracleDB.",
			],
		},

		{
			companyName: "FutureHub Myanmar",
			companyUrl: "https://futurehubmyanmar.com/",
			assignedPosition: "Senior Web Developer",
			fromDate: "March 2020",
			toDate: "July 2022",
			links: ["https://futurehubmyanmar.com/"],
			descriptions: [
				"Maintained a 'Case Management System' for the government to process and review application forms submitted by various organizations. Ministries could review and forward applications to relevant departments for approval or rejection.",
				"Developed a 'Game Portal System' for a Billiards game, featuring coin transactions and user activity tracking during gameplay.",
				"Created a 'Line Work Notification Reminder System' based on 'Time King' attendance records, automatically notifying employees and their supervisors/managers at 4:50 PM on workdays to apply for lateness if needed. Supervisors and managers receive notifications to approve or reject requests.",
				"Built a 'Membership System' for managing hotel bookings.",
				"Developed a 'Real Estate System' enabling users to search for rental and purchase properties across Myanmar.",
				"Designed a 'Mini POS System' with basic functionalities, including receipt printing, product categorization, and stock management.",
				"Mentored and trained junior developers.",
				"Technologies used: HTML, CSS, Javascript, TailwindCss, Vue.js, PHP, Laravel, AWS S3, AWS Ec2, Git/Gitlab, Postgres.",
			],
		},

		{
			companyName: "Nanyan",
			companyUrl: "https://www.nanyan.com.mm/",
			assignedPosition: "Web Developer",
			fromDate: "Oct 2021",
			toDate: "Feb 2022",
			links: ["https://www.nanyan.com.mm/"],
			descriptions: [
				"Outsource",
				"Developed e-commerce dashboard for Nanyan Company.",
				"Technologies used: HTML, CSS, Javascript, TailwindCss, React.js, Node.js, Nest.js, MongoDB, AWS S3, Digital Ocean, Git/Github.",
			],
		},

		{
			companyName: "Huawei",
			companyUrl: "https://www.huawei.com/en/",
			assignedPosition: "Internship",
			fromDate: "May 2019",
			toDate: "July 2019",
			links: ["https://www.huawei.com/en/"],
			descriptions: [
				"Developed an internal automation system using UiPath to streamline document uploads for the team.",
				"The system automates document uploads to the server on workdays, with Python extracting data to calculate product prices and quantities. It also notifies supervisors via email when discrepancies in price or quantity are detected.",
				"Technologies used: Python, UiPath.",
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
