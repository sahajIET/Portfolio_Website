import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaDribbble, FaInstagram, FaLinkedin, FaLinkedinIn, FaGithub, FaGoogle } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiExpress, SiGmail, SiJava, SiMongodb, SiTypescript } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import portfolio from "./assets/portfolio.jpg"
import work1 from "./assets/googlekeep.png";
import work2 from "./assets/secret.png";
import work3 from "./assets/weather.png";
import work4 from "./assets/expense.png";
import work5 from "./assets/video.png";
import work6 from "./assets/todolist.png";
import hicon from "./assets/html.png";
import cicon from "./assets/css.png";
import jsicon from "./assets/javascript.png";
import jicon from "./assets/java.png";
import micon from "./assets/mongodb.png";
import eicon from "./assets/express.png";
import ricon from "./assets/react.png";
import nicon from "./assets/node.png";
import vicon from "./assets/vscode.png";
import myicon from "./assets/mysql.png";
import picon from "./assets/postman.png";
import ecicon from "./assets/eclipse.png";
import oca from "./assets/oca.jpg";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]



export const socialIcons = [

  {
    id: 1,
    icon: <FaGithub />,
    url: "https://github.com/sahajIET"
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/sahaj-bagherwal-813300200/"
  },
  {
    id: 3,
    icon: <SiGmail />,
    url: "mailto:sahajbagherwal99@gmail.com"
  },
  {
    id: 4,
    icon: <FaInstagram />,
    url: "https://www.instagram.com/sencillo_sahaj/"
  }
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "SahajBagherwal"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+918602795520"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "sahajbagherwal99@gmail.com"
  }
]

export const icons = [
  {img:hicon}, 
  {img:cicon},
  {img:jsicon},
  {img:nicon},
  {img:jicon},
  {img:micon},
  {img:eicon},
  {img:ricon},
  {img:vicon},
  {img:picon},
  {img:myicon},
  {img:ecicon}
   ]

export const experiences = [
  {
    id: 1,
    year: "2022",
    position: "Senior Web Developer",
    company: "shop.com.mm"
  },
  {
    di: 2,
    year: "2021",
    position: "Junior Web Developer",
    company: "shop.com.mm"
  },
  {
    id: 3,
    year: "2019",
    position: "Intern Web Dveloper",
    company: "shop.com.mm"
  }
]
export const certificates=[
  {
    id:1,
    img:oca
  }
]

export const finishes = [
  // {
  //   id: 1,
  //   number: '6+',
  //   itemName: "Years Of Experience"
  // },
  // {
  //   id: 2,
  //   number: "150+",
  //   itemName: "Satisfied Customers"
  // },
  {
    id: 3,
    number: "45+",
    itemName: "Designed Items"
  },
  {
    id: 4,
    number: "7+",
    itemName: "Projects Assisted"
  }
]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web",
    hub:"https://github.com/sahajIET/GoogleKeepCustomizedClone",
    url:"https://google-keep-customized-clone.vercel.app/"
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web",
    hub:"https://github.com/sahajIET/Secrets",
    url:"https://secrets-mq5x.onrender.com/"
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web",
    hub:"https://github.com/sahajIET/Weather",
    url:"https://weather-sahajiet.vercel.app/"
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "web",
    hub:"https://github.com/sahajIET/OnlineExpenseTracker",
    url:"#"
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: "app",
    hub:"https://github.com/sahajIET/FaceFilm",
    url:"#"
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "web",
    hub:"https://github.com/sahajIET/todolist",
    url:"https://todolist-v24.onrender.com/"
  }
]


export const workNavs = [
  "All", "Web", "App"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Indore, India"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "sahajbagherwal99@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+91-8602795520"
  }
]
