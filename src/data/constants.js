import airbnbImg from "../assets/airbnb.svg";
import amazonImg from "../assets/amazon.svg";
import paypalImg from "../assets/paypal.svg";
import slackImg from "../assets/slack.svg";
import spotifyImg from "../assets/spotify.svg";

export const NAVBARLINKS = [
  {
    item: "Home",
    url: "/",
  },
  {
    item: "Products",
    url: "/",
  },
  {
    item: "Pages",
    url: "/",
  },
  {
    item: "App",
    url: "/",
  },
  {
    item: "Docs",
    url: "/",
  },
];

export const AWARDS = [
  {
    companyImage: airbnbImg,
    stars: 4.95,
    reviews: 23,
    isRating: true,
    awardText: "",
    redirectUrl: "",
  },
  {
    companyImage: amazonImg,
    stars: 4.95,
    reviews: 23,
    isRating: false,
    awardText: "They build modern-looking websites easily using Tabs.",
    redirectUrl: "",
  },
  {
    companyImage: slackImg,
    stars: 4.95,
    reviews: 23,
    isRating: false,
    awardText: "They build modern-looking websites easily using Tabs.",
    redirectUrl: "",
  },

  {
    companyImage: spotifyImg,
    stars: 4.95,
    reviews: 23,
    isRating: true,
    awardText: "",
    redirectUrl: "",
  },

  {
    companyImage: paypalImg,
    stars: 4.95,
    reviews: 23,
    isRating: false,
    awardText: "They build modern-looking websites easily using Tabs.",
    redirectUrl: "",
  },
];

export const FAQs = [
  {
    question: "Which license do I need?",
  },
  {
    question: "How do I get access to my database?",
  },
  {
    question: "How do I see previous orders?",
  },
];
