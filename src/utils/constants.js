import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";

export const RESUME_LINK =
  "https://drive.google.com/file/d/1Kc-GIVbFg7jnsSGZlI8plkuIwdDjBviD/view?usp=sharing";

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
];
