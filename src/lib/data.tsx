import { Github, Linkedin, BookOpenCheck } from "lucide-react";

import LogoAndroid from "/public/images/logos/icon-android.svg";
import LogoFlutter from "/public/images/logos/icon-flutter.svg";
import LogoCompose from "/public/images/logos/icon-compose.svg";
import LogoFirebase from "/public/images/logos/icon-firebase.svg";
import LogoKotlin from "/public/images/logos/icon-kotlin.svg";
import LogoNode from "/public/images/logos/icon-nodejs.svg";
import LogoExpress from "/public/images/logos/icon-express.svg";
import LogoExpressLight from "/public/images/logos/icon-express-light.svg";
import LogoJavascript from "/public/images/logos/icon-javscript.svg";
import LogoJava from "/public/images/logos/icon-java.svg";
import LogoRealm from "/public/images/logos/icon-realm.svg";
import LogoAWS from "/public/images/logos/icon-aws-dark.svg";
import LogoAWSDark from "/public/images/logos/icon-aws.svg";
import LogoGCloud from "/public/images/logos/icon-gcloud.svg";
import LogoPostman from "/public/images/logos/icon-postman.svg";
import LogoCICD from "/public/images/logos/icon-ga.svg";
import LogoNextJs from "/public/images/logos/icon-nextjs.svg";
import LogoGit from "/public/images/logos/icon-git.svg";

import LogoMBB from "/public/images/logos/logo-mybillbook.svg";
import LogoMBBDark from "/public/images/logos/logo-mybillbook-dark.svg";
import LogoInternshala from "/public/images/logos/logo-is.svg";
import LogoInternshalaDark from "/public/images/logos/logo-is-dark.svg";

import ProjectMoneyMinder from "/public/images/project-money-minder.png";
import ProjectSmartchef from "/public/images/project-smartchef.png";
import ProjectIsClone from "/public/images/project-is-clone.webp";
import ProjectSSCBS from "/public/images/project-sscbs.webp";
import ProjectShiksha from "/public/images/project-shiksha.webp";

import { ExperienceDetails, ProjectDetails, TechDetails } from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/Prashant-123",
  MEDIUM: "https://medium.com/@dev-prashant",
  INSTAGRAM: "https://www.instagram.com/prashant_21._/"
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about"
  },
  {
    label: "Work",
    href: "#work"
  },
  {
    label: "Contact",
    href: "#contact"
  }
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/Prashant-123"
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/dev-prashant/"
  },
  {
    icon: BookOpenCheck,
    url: "https://medium.com/@dev-prashant"
  }
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Android",
    logo: LogoAndroid,
    url: "https://developer.android.com/"
  },
  {
    label: "Flutter",
    logo: LogoFlutter,
    url: "https://flutter.dev/"
  },
  {
    label: "Compose",
    logo: LogoCompose,
    url: "https://developer.android.com/jetpack/compose"
  },
  {
    label: "Firebase",
    logo: LogoFirebase,
    url: "https://firebase.google.com/"
  },
  {
    label: "Kotlin",
    logo: LogoKotlin,
    url: "https://kotlinlang.org/"
  },
  {
    label: "Node.js",
    logo: LogoNode,
    url: "https://nodejs.org/en"
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/"
  },
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    label: "Java",
    logo: LogoJava,
    url: "https://www.java.com/en/"
  },
  {
    label: "Realm",
    logo: LogoRealm,
    url: "https://realm.io/"
  },
  {
    label: "AWS",
    logo: LogoAWSDark,
    darkModeLogo: LogoAWS,
    url: "https://aws.amazon.com/"
  },
  {
    label: "Google Cloud",
    logo: LogoGCloud,
    url: "https://cloud.google.com/"
  },
  {
    label: "Postman",
    logo: LogoPostman,
    url: "https://www.postman.com/"
  },
  {
    label: "CI/CD",
    logo: LogoCICD,
    url: "https://github.com/features/actions"
  },
  {
    label: "Next.js",
    logo: LogoNextJs,
    url: "https://nextjs.org/"
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/"
  }
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoMBB,
    darkModeLogo: LogoMBBDark,
    logoAlt: "MyBillBook logo",
    position: "Software Developer 2",
    startDate: new Date(2021, 11),
    currentlyWorkHere: true,
    summary: [
      "Developed poster making app in Flutter where SMBs can share the posters and greetings to their customers",
      "Proactively resolve production issues on the Android app",
      "Wrote a full-fledged CI/CD pipeline to generate on-demand builds using Slack & GitHub Actions",
      "Delivered product roadmap tasks like item batching, godown management, serialization, etc"
    ]
  },
  {
    logo: LogoInternshala,
    darkModeLogo: LogoInternshalaDark,
    logoAlt: "Internshala logo",
    position: "Android Developer",
    startDate: new Date(2019, 6),
    endDate: new Date(2021, 11),
    summary: [
      "Developed notification scheduling CMS, dynamic notifications and user level delivery tracking",
      "Revamped the whole app, integrated student help center, added offline compatibility",
      "Shrinked Internshala app size from 9 MB to 6.2MB by optimizing proguard, gradle and assets.",
      "Maintained the consistency in crash-free users of 99.8% throughout a year",
      "Handled sprint planning & task distribution."
    ]
  }
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "Money Minder",
    description:
      "Introducing Money-Minder, your ultimate financial companion designed to simplify the way you manage your money.",
    url: "https://moneyminder.in/",
    previewImage: ProjectMoneyMinder,
    technologies: [
      "Android",
      "Kotlin",
      "Compose",
      "Firebase",
      "Material 3",
      "Room DB",
      "Hilt",
      "Work Manager",
      "NextJS",
      "Express.js",
      "Nginx"
    ]
  },
  {
    name: "Smartchef",
    description:
      "An indian recipe app that helps you to cook delicious food with simple steps. It had a collection of 1000+ recipes. You can also search for recipes by ingredients. It also has a feature to save your favorite recipes.",
    url: "https://smartchef.tech/",
    previewImage: ProjectSmartchef,
    technologies: [
      "Android",
      "Kotlin",
      "Firebase",
      "Material Design",
      "Room DB",
      "Hilt",
      "Pagination",
      "Retrofit",
      "Express.js",
      "SQL",
      "AWS",
      "Sequelize"
    ]
  },
  {
    name: "Internshala Clone - Kotlin Multiplatform",
    description:
      "A clone of Internshala app built using Kotlin Multiplatform Mobile. It uses Ktor for networking, SQLDelight for database, and Koin for dependency injection. It also uses Jetpack Compose for UI.",
    url: "https://proandroiddev.com/koin-ktor-paging-in-kmm-1800b9fad7f3",
    previewImage: ProjectIsClone,
    technologies: [
      "Compose Multiplatform (CMP)",
      "Android",
      "iOS",
      "Ktor",
      "SQLDelight",
      "Koin",
      "Jetpack Compose"
    ]
  },
  {
    name: "SSCBS - College App",
    description:
      "My first Android project. It was a college app for Shaheed Sukhdev College College of Business Studies, and has features multiple login (Admin, Teacher and Student), like attendance, events, timetable, notes, etc. It uses Google Sheets API for data storage.",
    url: "https://github.com/Prashant-123/SSCBS",
    previewImage: ProjectSSCBS,
    technologies: ["Android", "Java", "Firebase", "Google Sheets API"]
  },
  {
    name: "Shiksha - Freelance Project",
    description:
      "A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.",
    url: "https://github.com/Prashant-123/Shiksha",
    previewImage: ProjectShiksha,
    technologies: [
      "Android",
      "Java",
      "Firebase",
      "Retrofit",
      "Nginx",
      "SQL",
      "AWS",
      "PHP",
      "HTML",
      "CSS",
      "JS"
    ]
  }
];
