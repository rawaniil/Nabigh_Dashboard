import FrontEnd from "../assets/frontend_Pic.png";
import BackEnd from "../assets/backend.png";
import FullStack from "../assets/fullStack.png";
import DataScience from "../assets/Data Science.png";
import MachineLearning from "../assets/ML.png";
import MobileApp from "../assets/mobileApp.png";
import Cybersecurity from "../assets/Cybersecurity.png";
import CloudComuting from "../assets/cloudComputing.png";
import Devops from "../assets/Devops.png";
import UIUX from "../assets/uiux design.png";
import Instr1 from "../assets/instructor1.svg";
import Instr2 from "../assets/instructor2.svg";
import Instr3 from "../assets/instructor3.svg";
import Instr4 from "../assets/instructor4.svg";
import Instr5 from "../assets/instructor5.svg";
import Instr6 from "../assets/instructor6.svg";
import Instr7 from "../assets/instructor7.svg";
import Instr8 from "../assets/instructor8.svg";
import Instr9 from "../assets/instructor9.svg";
import Instr10 from "../assets/instructor10.svg";

export const CoursesData = [
    {
        id: 1,
        name: "Frontend",
        Track: "Web Development",
        price: "190",
        Enrolled: "120",
        active: true,
        Image:FrontEnd,
    },
    {
        id: 2,
        name: "Backend",
        Track: "Web Development",
        price: "210",
        Enrolled: "95",
        active: true,
        Image:BackEnd,
    },
    {
        id: 3,
        name: "Full Stack",
        Track: "Web Development",
        price: "250",
        Enrolled: "150",
        active: true,
        Image:FullStack,
    },
    {
        id: 4,
        name: "Data Science",
        Track: "Data Analysis",
        price: "300",
        Enrolled: "80",
        active: true,
        Image:DataScience,
    },
    {
        id: 5,
        name: "Machine Learning",
        Track: "AI",
        price: "350",
        Enrolled: "60",
        active: false,
        Image:MachineLearning,
    },
    {
        id: 6,
        name: "Mobile App Development",
        Track: "App Development",
        price: "220",
        Enrolled: "110",
        active: false,
        Image:MobileApp,
    },
    {
        id: 7,
        name: "Cybersecurity",
        Track: "Security",
        price: "280",
        Enrolled: "70",
        active: true,
        Image:Cybersecurity,
    },
    {
        id: 8,
        name: "Cloud Computing",
        Track: "Infrastructure",
        price: "320",
        Enrolled: "85",
        active: true,
        Image:CloudComuting,
    },
    {
        id: 9,
        name: "DevOps",
        Track: "Operations",
        price: "260",
        Enrolled: "100",
        active: true,
        Image:Devops,
    },
    {
        id: 10,
        name: "UI/UX Design",
        Track: "Design",
        price: "180",
        Enrolled: "140",
        active: true,
        Image:UIUX,
    },
];


export const StudentsData = [
    {
        id: 1,
        course_id: "Frontend",
        progress: "40%",
        active: true,
    },
    {
        id: 2,
        course_id: "Backend",
        progress: "60%",
        active: true,
    },
    {
        id: 3,
        course_id: "Full Stack",
        progress: "100%",
        active: false,
    },
    {
        id: 4,
        course_id: "Data Science",
        progress: "30%",
        active: true,
    },
    {
        id: 5,
        course_id: "Machine Learning",
        progress: "100%",
        active: false,
    },
    {
        id: 6,
        course_id: "Mobile App Development",
        progress: "85%",
        active: true,
    },
    {
        id: 7,
        course_id: "Cybersecurity",
        progress: "20%",
        active: true,
    },
    {
        id: 8,
        course_id: "Cloud Computing",
        progress: "100%",
        active: false,
    },
    {
        id: 9,
        course_id: "DevOps",
        progress: "65%",
        active: true,
    },
    {
        id: 10,
        course_id: "UI/UX Design",
        progress: "55%",
        active: true,
    },
];


export const InstructorsData = [
  {
    id: 1,
    name: "Amal Ahmed",
    specialty: "Full Stack Developer",
    bio: "Expert in Python and React development.",
    coursesCount: 5,
    image: Instr1,
    rating: 4.9
  },
  {
    id: 2,
    name: "Fatima Hassan",
    specialty: "Backend Developer",
    bio: "Specialized in Node.js and database design.",
    coursesCount: 4,
    image: Instr2,
    rating: 4.8
  },
  {
    id: 3,
    name: "Omar Ali",
    specialty: "Full Stack Developer",
    bio: "Expert in MERN stack and cloud deployment.",
    coursesCount: 6,
    image: Instr3,
    rating: 4.9
  },
  {
    id: 4,
    name: "Aisha Khan",
    specialty: "Data Science",
    bio: "Specialized in machine learning and analytics.",
    coursesCount: 5,
    image: Instr4,
    rating: 4.7
  },
  {
    id: 5,
    name: "Mohammed Saleh",
    specialty: "AI/Machine Learning",
    bio: "Expert in deep learning and neural networks.",
    coursesCount: 3,
    image: Instr5,
    rating: 4.8
  },
  {
    id: 6,
    name: "Noor Ibrahim",
    specialty: "Mobile Developer",
    bio: "Specialized in React Native and Flutter.",
    coursesCount: 4,
    image: Instr6,
    rating: 4.6
  },
  {
    id: 7,
    name: "Sara Youssef",
    specialty: "Cybersecurity",
    bio: "Expert in network security and penetration testing.",
    coursesCount: 4,
    image: Instr7,
    rating: 4.8
  },
  {
    id: 8,
    name: "Khalid Hassan",
    specialty: "DevOps/Cloud",
    bio: "Specialized in AWS, Docker, and Kubernetes.",
    coursesCount: 5,
    image: Instr8,
    rating: 4.9
  },
  {
    id: 9,
    name: "Leila Mohamed",
    specialty: "DevOps Engineer",
    bio: "Expert in CI/CD pipelines and infrastructure automation.",
    coursesCount: 4,
    image: Instr9,
    rating: 4.7
  },
  {
    id: 10,
    name: "Hassan Ahmed",
    specialty: "UI/UX Designer",
    bio: "Expert in design systems and user experience.",
    coursesCount: 5,
    image: Instr10,
    rating: 4.9
  }
];