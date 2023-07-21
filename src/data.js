// images
import Logo from "../src/assets/img/header/lg.png";
import Logo2 from "../src/assets/img/header/lg2.png";
import p1 from "../src/assets/img/workouts/p1.jpeg";
import p2 from "../src/assets/img/workouts/p2.jpeg";
import p3 from "../src/assets/img/workouts/p3.jpeg";
import p4 from "../src/assets/img/workouts/p4.jpeg";
import p5 from "../src/assets/img/workouts/p5.jpeg";
import p6 from "../src/assets/img/workouts/p6.jpeg";
import p7 from "../src/assets/img/workouts/p7.jpeg";
import p8 from "../src/assets/img/workouts/p8.jpeg";
import p9 from "../src/assets/img/workouts/p9.jpeg";
import p10 from "../src/assets/img/workouts/p10.jpeg";

import CommunityImg1 from "../src/assets/img/community/img1.png";
import CommunityImg2 from "../src/assets/img/community/img2.png";
import CommunityImg3 from "../src/assets/img/community/img3.png";
import CommunityImg4 from "../src/assets/img/community/img4.png";
// icons
import UsersIcn from "../src/assets/img/about/icons/users-icn.svg";
import PriceIcn from "../src/assets/img/pricing/icons/price.svg";
import CommunityIcn from "../src/assets/img/community/icons/community-icn.svg";
import QuestionMarkIcn from "../src/assets/img/faq/icons/question-mark.svg";

export const header = {
  logo: Logo,
  logo2: Logo2,
  btnLoginText: "Log in",
  btnSignupText: "Sign Up",
};

export const nav = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export const about = {
  icon: UsersIcn,
  title: "Our misson",
  subtitle1:
    "We are distinguished by our unsurpassed motivating atmosphere, knowledgeable staff, and premier exercise equipment, which supports our members in meeting their individual fitness goals.",
  subtitle2:
    "The strength of our heart-felt identity is utilized to inspire every person that steps foot into our gyms to better themselves.",
  link: "Join Now",
};

export const workouts = {
  title: "Images",
  programs: [
    {
      image: p1,
    },
    {
      image: p2,
    },
    {
      image: p3,
    },
    {
      image: p4,
    },
    {
      image: p5,
    },
    {
      image: p6,
    },
    {
      image: p7,
    },
    {
      image: p8,
    },
    {
      image: p9,
    },
    {
      image: p10,
    },
  ],
};

export const pricing = {
  icon: PriceIcn,
  title: "Pricing plan",
  plans: [
    {
      name: "Basic",
      price: "20",
      list: [
        { name: "unlimited gym access" },
        { name: "1 training programs" },
        { name: "free fitness consultation" },
      ],
      delay: 200,
    },
    {
      name: "Premium",
      price: "35",
      list: [
        { name: "unlimited gym access" },
        { name: "5 training programs" },
        { name: "free fitness consultation" },
        { name: "personal trainer" },
      ],
      delay: 300,
    },
    {
      name: "Elite",
      price: "49",
      list: [
        { name: "unlimited gym access" },
        { name: "all training programs" },
        { name: "free fitness consultation" },
        { name: "personal trainer" },
        { name: "50% off drinks" },
      ],
      delay: 400,
    },
  ],
};

export const community = {
  icon: CommunityIcn,
  title: "Community",
  testimonials: [
    {
      image: CommunityImg1,
      name: "Mark A.",
      message:
        "“Great location, great price and great, helpful people. What to want more?”",
    },
    {
      image: CommunityImg2,
      name: "Lauren K.",
      message:
        "“Gymme changed my life. Not only physically but mentally as well. I’m a better mother, and all around better human being because of this gym.”",
    },
    {
      image: CommunityImg3,
      name: "Jhon D.",
      message:
        "“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”",
    },
    {
      image: CommunityImg4,
      name: "Anne R.",
      message:
        "“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”",
    },
  ],
};

export const faq = {
  icon: QuestionMarkIcn,
  title: "FAQ",
  accordions: [
    {
      question: "What do pigs eat??",
      answer:
        "Pigs are omnivorous animals and have a diverse diet. They eat grains, such as corn, wheat, and barley, as well as protein sources like soybean meal. Additionally, they consume vegetables, fruits, and sometimes kitchen waste. Proper nutrition is crucial for their growth and health.",
    },
    {
      question: "How are pigs bred and raised in a piggery?",
      answer:
        "Pigs are usually bred through controlled mating. Once born, piglets are raised in specific pens or farrowing houses until they are old enough to be moved to grower or finisher pens.",
    },
    {
      question: "How are pig health and welfare maintained in a piggery?",
      answer:
        "Maintaining pig health and welfare is essential for a successful piggery operation. This involves regular health checks, vaccination programs, proper nutrition, providing clean and adequate living conditions, and preventing the spread of diseases.",
    },
    {
      question: "What are some common pig diseases and how are they managed?",
      answer:
        "Common pig diseases include swine fever, respiratory infections, and gastrointestinal disorders. They are managed through vaccinations, quarantine protocols, proper hygiene, and timely treatment by qualified veterinarians.",
    },
  ],
};



export const footer = {
  logo: Logo2,
  copyrightText: "All rights reserved.  2023.",
};
