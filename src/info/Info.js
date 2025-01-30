import me from '../img/kiran.png';
import diary from '../img/diary.jpg'
import quiz from '../img/quiz.png'
import bot from '../img/ai_bot.png'
import chatbot from '../img/chatbot.avif'


//certification images and logos
import redhatLogo from '../assets/redhatlogo.jpeg';
import redhatBadge from '../assets/Red_hat_badge.png';
import awsLogo from '../assets/awslogo.jpg';
import awsBadge from '../assets/aws_badge.png';
import rpaLogo from '../assets/AAlogo-pathfinder.svg';
import rpaBadge from '../assets/AAadvanced.png';
import scrumLogo from '../assets/certiprof_logo.jpeg';
import scrumBadge from '../assets/scrumCerti.jpeg';


export let colors = ["rgb(128, 244, 244)", "rgb(61, 172, 203)"]; /* background colour of picture */

export let singlePage = false;

export const info = {
    firstName: "Sai",
    lastName: "Kiran",
    initials: "SAI KIRAN ",
    position: "an Aspiring  Full Stack Web Developer",
    selfPortrait: me, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [
        {
            "emoji": "💻",
            "text": "Tech Enthusiast"
        },
        {
            "emoji": "💼",
            "text": "Pre-Final Year Student at KL University, Hyderabad"
        },
        {
            "emoji": "⚙️",
            "text":"Skilled in building efficient modern web Applications"
        },
        {
            "emoji": "🚀",
            "text": "AI and Automation Fanatic"
        },
        {
            "emoji": "🌎",
            "text": "Based in India"
        }
    ],
    socials: [
        {
            link: "mailto:kiranlive8080@gmail.com",
            icon: "fa fa-envelope",  
            label: "Gmail"
        },
        {
            link: "https://www.instagram.com/kiranzz____/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/CodeByKiran",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/saikiransalani/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://t.me/kiranzz03",
            icon: "fa fa-telegram",
            label: 'Telegram'
        },

    ],
    bio: `Hi! I'm Sai Kiran, a 3rd-year student at KL University, Hyderabad 🎓.
          I'm passionate about full-stack development 💻 and data analysis 📊.
          I love working on projects that create real-world impact 🌍 or solve complex problems 🧩.
          Outside of academics, you'll find me experimenting with new technology 🚀, exploring nature 🌿, 
          playing sports 🏀, or diving into books 📚 or podcasts 🎙️.
          I'm eager to grow, learn, and contribute to innovative projects in the tech industry!`,
    skills:
    {
        proficientWith: ['C', 'Java', 'Python', 'javascript', 'react', 'Spring Boot', 'Flask', 'Django', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma', 'Tableau', 'nodejs', 'Angular', 'Docker'],
        exposedTo: ['adobe illustrator', 'adobe lightroom']
    }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'Sports',
            emoji: '⛹🏻‍♂'
        },
        {
            label: 'movies  & series',
            emoji: '🎥'
        },
        {
            label: 'Cooking',
            emoji: '🌶'
        },
        {
            label: 'Listening to Podcasts',
            emoji: '🎙️'
        }
    ],
    certifications: [
        {
            title: 'Red Hat Certified Enterprise Application Developer',
            organization: 'Red Hat',
            companyImage: redhatLogo,
            certificationImage: redhatBadge,
            description: 'Certification for mastering enterprise application development.',
            skills: ['Java', 'Enterprise Applications', 'Spring Framework'],
            date: 'September 28, 2024',
            expiryDate: 'September 28, 2027',
            link: 'https://www.credly.com/badges/7f7df437-1931-4fe4-804d-0be18301c0e3/public_url',
        },
        {
            title: 'Certified AWS Cloud Practitioner',
            organization: 'Amazon Web Services',
            companyImage: awsLogo,
            certificationImage: awsBadge,
            description: 'Validates cloud fluency and foundational AWS knowledge.',
            skills: ['Cloud Computing', 'AWS Services', 'Cloud Security'],
            date: 'July 13, 2024',
            expiryDate: 'July 13, 2027',
            link: 'https://www.credly.com/badges/7e179ff6-3786-4fd3-9ccd-fbeab4808142/public_url',
        },
        {
            title: 'RPA Certified Advanced Automation Certificate',
            organization: 'RPA',
            companyImage: rpaLogo,
            certificationImage: rpaBadge,
            description: 'Certification in advanced RPA tools and automation.',
            skills: ['Automation', 'UI Path', 'Process Optimization'],
            date: 'September 17, 2024',
            expiryDate: 'September 17, 2026',
            link: 'https://certificates.automationanywhere.com/358ea5a7-27d0-42b4-9ae9-becae12191ce#acc.3VNlK5dG',
        },
        {
            title: 'Certiprof Certified Scrum Master',
            organization: 'Certiprof',
            companyImage: scrumLogo,
            certificationImage: scrumBadge,
            description: 'Certification in Agile Scrum methodologies.',
            skills: ['Agile', 'Scrum Framework', 'Team Collaboration'],
            date: 'October 16, 2024',
            expiryDate: 'October 16, 2026',
            link: 'https://example.com/certification',
        },
    ],
    portfolio:[
        {
            title: "My-Diary",
            description: "A personal diary app to record daily activities and thoughts.",
            category: "Personal Project",
            role: "Full Stack Developer",
            tech: ["Flask", "Python", "Mysql",],
            features: [
                "User authentication",
                "Rich text editor",
                "Responsive design",
            ],
            source: "https://github.com/",
            image: diary,
            completionDate: "November 25, 2023",
            duration: "2  month",
            challenges: [
                "Optimizing database queries for performance",
                "Ensuring cross-browser compatibility"
            ],
            goals: "To build a simple and user-friendly digital diary.",
            status: "Completed"
        },
        {
            title: "Online Quiz System",
            description: "A web application for conducting quizzes.",
            category: "Academic Project",
            role: "Full Stack Developer",
            tech: ["JSP", "Servlets", "MySQL", "Apache Tomcat" , "Java"],
            features: [
                "User authentication",
                "Quiz management system",
                "Admin Dashboard",
                "Bulk Questions upload"
            ],
            source: "https://github.com/",
            image: quiz,
            completionDate: "November 28, 2024",
            duration: "3 months",
            challenges: [
                "Optimizing database queries for performance",
                "Excel/CSV Parsing : Reading and extracting questions from an uploaded excel or CSV",
                "Ensuring cross-browser compatibility"
            ],
            goals: "To create an online platform for university-level quizzes.",
            status: "In Progress"
        },
        {
            title: "AI-Interviewer",
            description: "An AI-powered app for subject-oriented virtual mock interviews.",
            category: "Academic Project",
            role: "Full Stack Developer",
            tech: ["React", "Spring Boot", "MySQL", "Google Vertex AI", "Google APIs"],
            features: [
                "User authentication",
                "AI-generated interview questions",
                "Responsive design",
                "Dark mode support",
                "Live Recording",
                "Customizable wide range of Subject oriented Mock interviews",
                "System Auto-generated emails"
            ],
            source: "https://github.com/CodeByKiran/Ai-interviewer.git",
            image: bot,
            completionDate: "December 9, 2024",
            duration: "3 months",
            challenges: [
                "Optimizing database queries for performance",
                "Integrating Google Vertex Service and parsing the Questions",
                "Integrating AI APIs effectively",
                "Automating Emails followed by user message"
            ],
            goals: "To provide users with a virtual platform for mock interviews.",
            status: "Completed"
        },
        {
            "title": "Personal ChatBot",
            "description": "A chatbot application powered by Google Gemini API and Streamlit, designed for interactive conversations and AI-driven responses.",
            "category": "Personal Project",
            "role": "Full Stack Developer",
            "tech": ["Python", "Streamlit", "Google Gemini API", "VS Code"],
            "features": [
                "Real-time AI-generated responses",
                "Lightweight and user-friendly UI",
                "Easy deployment with Streamlit",
                "Integration with Google Gemini API"
            ],
            "source": "https://github.com/CodeByKiran/CHAT_BOT.git",
            "image": chatbot,
            "completionDate": "January 2025",
            "duration": "1 month",
            "challenges": [
                "Optimizing response time from Google Gemini API",
                "Enhancing chatbot conversation flow",
                "Deploying the chatbot efficiently"
            ],
            "goals": "To create an AI-powered chatbot for seamless and engaging user interactions.",
            "status": "Completed"
        }
        
    ]
}    