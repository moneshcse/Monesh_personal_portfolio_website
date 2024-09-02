import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Monesh Kumar Setturam',
  title: "Hi all, I'm Monesh ",
  description:
    "As a .NET Developer with a year of hands-on experience in a dynamic startup environment, I've honed my skills in .NET Core framework, API development, ERP integration, and SQL Server management.",
  resumeLink:
    'https://drive.google.com/file/d/1PxvqfoMYOPErr6X6VsW7NYvVewEe7GLp/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'moneshcse',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: '#',
  linkedin: 'https://www.linkedin.com/in/moneshsr/',
  github: 'https://github.com/moneshcse',
  instagram: 'https://www.instagram.com/monesh_krish_yadav/',
  facebook: 'https://www.facebook.com/',
  twitter: 'https://twitter.com/',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'dotnet',
          iconifyTag: 'skill-icons:dotnet',
        },
        {
          skillName: 'postgresql',
          iconifyTag: 'skill-icons:postgresql-dark',
        },
        {
          skillName: 'sql',
          iconifyTag: 'vscode-icons:file-type-sql',
        },
        {
          skillName: 'mysql',
          iconifyTag: 'logos:mysql',
        },
      
        {
          skillName: 'Github',
          iconifyTag: 'skill-icons:github-light',
        },
        
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Azure',
          iconifyTag: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          iconifyTag: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          iconifyTag: 'logos:cloudinary',
        },
        
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Desika Metric Higher secondery school',
    subHeader: 'S.S.L.C',
    duration: 'July 2016 - April 2018',
    desc: 'My school days were a journey of growth and learning.',
    grade: 'Grade A',
    descBullets: [
      'During my school days, I thrived in academics, consistently earning top grades',
      'I also actively participated in extracurricular activities, cultivating a well-rounded skill set.',
    ],
  },
  
  {
    schoolName: 'Arunai Engineering College',
    subHeader: 'Bachelor of computer science and Engineering ',
    duration: 'July 2019 - April 2023',
    desc: 'Developed a solid foundation in electronics principles, circuit design, and communication systems through rigorous coursework.',
    grade: 'Grade A',
    descBullets: [
      'Pursued a Bachelor of computer science and Engineering while concurrently developing skills in web development',
      'Collaborated on various projects, enhancing teamwork, problem-solving, and project management abilities while applying theoretical knowledge to real-world applications',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: '.Net Develoer',
    company: 'Neolysi Technologies',
    companyLogo: 'https://media.licdn.com/dms/image/v2/D560BAQHDNeykOe2SNA/company-logo_100_100/company-logo_100_100/0/1699635648310/neolysi_logo?e=1733356800&v=beta&t=Zf5L2KMQbFS3Yn_0cTuJtAJmSaUenACZb_w2y7z9BS8',
    date: 'Auguest 2023 – September 2023',
    desc: 'As a .NET Developer with a year of hands-on experience in a dynamic startup environment.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Designer portfolio Website',
    desc: 'Software Developer Portfolio Template built with a Basic HTML concept.',
    github: '#',
    link: '#',
  },
  {
    name: 'developer-portfolio',
    desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
    github: '#',
    link: '#',
  },
];

export const feedbacks: FeedbackType[] = [

  {
    name: 'Ajith Kumar Murugan @Software Engineer @complyance.io ',
    feedback:
      'Monesh kumar consistently demonstrates exceptional performance and a strong profile, showcasing a dynamic and versatile skill set in both technical and interpersonal domains.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Monesh Kumar',
  description:
    'A passionate .Net Developer',
  author: 'Monesh Kumar',
  image: 'https://media.licdn.com/dms/image/v2/D5635AQFI5kCgESGtNA/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1694504579582?e=1725883200&v=beta&t=9RxYXS6ULPDXkZYB6j-f-9BLQgjtgx1XuMl9XCVCJO0',
  url: '#',
  keywords: [
    'Monesh',
  ],
};
