import { FaFacebook, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { SiGmail, SiGithub } from "react-icons/si";

const projectsData = [
  {
    id: "1",
    title: "guess the number",
    desc: "A simple game where you guess a number between 1 and 10 and you have three attempts and if you do not guess the correct number then the correct number will appear to you",
    image: "./images/guess the number.jpg",
    tech: ["html", "css", "javaScript"],
    category: "game",
    url: "https://guess-the-numbers-game.vercel.app/",
  },
  {
    id: "2",
    title: "live dinner",
    desc: "A one-page website that is responsive to all screens and has many modern technologies in display",
    image: "./images/live dinner.jpg",
    tech: ["html", "css", "javaScript"],
    category: "website",
    url: "https://live-dinner.vercel.app/",
  },
  {
    id: "3",
    title: "trillo eight",
    desc: "A one-page website that is responsive to all screens and has many modern technologies in display",
    image: "./images/trillo eight.jpg",
    tech: ["html", "css"],
    category: "website",
    url: "https://trillo-eight.vercel.app/",
  },
  {
    id: "4",
    title: "add book",
    desc: "A simple application for adding and deleting books. It is also equipped with a local storage feature, so that you will not lose your data after updating the web page.",
    image: "./images/add book.jpg",
    tech: ["html", "css", "javaScript"],
    category: "app",
    url: "https://add-book-project.vercel.app/",
  },
  {
    id: "5",
    title: "bankist",
    desc: "A wonderful application that simulates banking transactions where you can perform banking operations such as transferring money and borrowing or deleting the account (To use the application use fake accounts)",
    image: "./images/bankist.jpg",
    tech: ["html", "css", "javaScript"],
    category: "app",
    url: "https://bankist.vercel.app/",
  },
  {
    id: "6",
    title: "phone ivory",
    desc: "A one-page website that is responsive to all screens and has many modern technologies in display",
    image: "./images/phone ivory.jpg",
    tech: ["html", "css", "javaScript"],
    category: "website",
    url: "https://phone-ivory.vercel.app/",
  },
  {
    id: "7",
    title: "pig game",
    desc: "A nice game that you can play with your friend, where you throw the dice and then press hold to add you points. But if you keep playing and get a point, it deletes your points and the dice moves to your friend",
    image: "./images/pig game.jpg",
    tech: ["html", "css", "javaScript"],
    category: "game",
    url: "https://pig-game-ochre.vercel.app/",
  },
  {
    id: "8",
    title: "forkify",
    desc: "Search for the meals you love, and this application will show you their recipes, and you can also add new recipes. The program has many features and modern technologies that you can distinguish by simply accessing it.",
    image: "./images/forkify.jpg",
    tech: ["html", "css", "javaScript"],
    category: "app",
    url: "https://forkify-v2.vercel.app/",
  },
  {
    id: "9",
    title: "github finder",
    desc: "Search for users in github and browse their work and information about the number of followers and activities",
    image: "./images/github finder.jpg",
    tech: ["html", "css", "javaScript"],
    category: "app",
    url: "https://api-github-project.vercel.app/",
  },
  {
    id: "10",
    title: "khoomi",
    desc: "A one-page site that responds to all screens, contains many modern technologies on display, and is multilingual",
    image: "./images/khoomi.jpg",
    tech: ["html", "sass", "javaScript"],
    category: "website",
    url: "https://khoomi.vercel.app/",
  },
  {
    id: "11",
    title: "natours",
    desc: "A one-page website that is responsive to all screens and has many modern technologies in display",
    image: "./images/natours.jpg",
    tech: ["html", "css", "javaScript"],
    category: "website",
    url: "https://natours-pi.vercel.app/",
  },
  {
    id: "12",
    title: "nexter",
    desc: "A one-page website that is responsive to all screens and has many modern technologies in display",
    image: "./images/nexter.jpg",
    tech: ["html", "sass", "javaScript"],
    category: "website",
    url: "https://nexter-pi.vercel.app/",
  },
  {
    id: "13",
    title: "subolaays",
    desc: "A multi-page site that responds to all screens, contains many modern technologies displayed, and is multilingual",
    image: "./images/subolaays.jpg",
    tech: ["html", "sass", "javaScript", "jquery", "semantic UI"],
    category: "website",
    url: "https://subolaays-psi.vercel.app/",
  },
  {
    id: "14",
    title: "red store",
    desc: "The e-commerce site, which is multi-page responsive to all screens and has all the functions required to purchase the product",
    image: "./images/red store.jpg",
    tech: ["html", "css", "javaScript"],
    category: "e-commerce",
    url: "https://red-store.vercel.app/",
  },
  {
    id: "15",
    title: "more store",
    desc: "The e-commerce site, which is to navigate between pages as if you are on the same page responds to all screens and has all the functions required to purchase the product",
    image: "./images/more store.jpg",
    tech: ["html", "sass", "javaScript", "react", "redux", "bootstrap 5"],
    category: "e-commerce",
    url: "https://more-store.vercel.app/",
  },
];

const contactLinks = [
  {
    id: 1,
    icon: FaFacebook,
    url: "https://www.facebook.com/profile.php?id=100005340273136",
  },
  {
    id: 2,
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/momen-nasser-ba88ba1b1/",
  },
  {
    id: 3,
    icon: FaTwitter,
    url: "https://twitter.com/Momen_AlTayer",
  },
  {
    id: 4,
    icon: SiGmail,
    url: "mailto:momenfc55@gmail.com",
  },
  {
    id: 5,
    icon: SiGithub,
    url: "https://github.com/momenfc",
  },
];

export { projectsData, contactLinks };
