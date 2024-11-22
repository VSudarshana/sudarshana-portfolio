import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";

export const RESUME_LINK =
  "https://drive.google.com/file/d/1Iw9XgbsPf3WExJy_OfN1OGF2YSk0i0I-/view?usp=sharing";

export const projects = [
  {
    title: "TrendWay-ECommerce",
    id: 1,
    image: project1,
    techStack: ["HTML5", "CSS3", "JS"],
    overView:
      "Shop the latest trends effortlessly at Trendway's fashion site, designed with HTML, CSS, and JS. Enjoy seamless navigation, dynamic interactions, and efficient search functionality for a stylish shopping experience.",
    webUrl: "https://vsudarshana.github.io/TrendWay-ECommerce/",
    gitHubCode: "https://github.com/VSudarshana/TrendWay-ECommerce",
  },
  {
    title: "Solar Electronics and Furniture",
    id: 2,
    image: project2,
    techStack: ["HTML5", "Tailwind CSS", "JS"],
    overView:
      "Designed a static, mobile-responsive website with animations for my uncle's electronics and furniture shop using HTML, Tailwind CSS, and JavaScript. Integrated company details and contact information for enhanced accessibility.",
    webUrl: "https://solar-electronics-furniture.netlify.app/",
    gitHubCode: "https://github.com/VSudarshana/Solar-Electronics-Furniture",
  },
  {
    title: "React Weather Report App",
    id: 3,
    image: project3,
    techStack: ["React Js", "Tailwind CSS"],
    overView:
      "Developed using React, this web application utilizes the OpenWeatherMap API to fetch real-time weather data, offering users a seamless experience for accessing weather information.",
    webUrl: "https://weather-react-smoky-one.vercel.app/",
    gitHubCode: "https://github.com/VSudarshana/weather-react",
  },
  {
    title: "TODO-App using MERN Stack",
    id: 4,
    image: project4,
    techStack: ["React Js", "Bootstrap", "NodeJS", "Express", "MongoDb"],
    overView: `Developed a full-stack MERN application with robust RESTful APIs for creating, retrieving, updating, and deleting items, ensuring seamless backend functionality using Express.js and MongoDB.  
Designed a dynamic React.js frontend with Bootstrap, enabling user-friendly interfaces for item management, including real-time listing and updates.  
Resolved CORS policy issues, implemented error handling, and ensured secure CRUD operations for a reliable and responsive application.`,
    webUrl: "https://github.com/VSudarshana/todo-mern",
    gitHubCode: "https://github.com/VSudarshana/todo-mern",
  },
  {
    title: "Bike service Application sing MERN",
    id: 5,
    image: project5,
    techStack: ["React Js", "Bootstrap", "NodeJS", "Express", "MongoDb"],
    overView: `MERN-Bike-App is a full-stack web application for managing bike services and bookings, built using the MERN (MongoDB, Express.js, React, Node.js) stack.
    This project is a bike service station management app with an admin interface for managing bookings and service statuses and a user interface for customer registration, login, and bike service bookings.`,
    webUrl: "https://github.com/VSudarshana/bikerService-MERN",
    gitHubCode: "https://github.com/VSudarshana/bikerService-MERN",
  },
];
