// images
import Logo from '../src/assets/img/header/logo.svg';
import ResistanceImg from '../src/assets/img/workouts/resistance.png';
import BoxingImg from '../src/assets/img/workouts/boxing.png';
import BodyPumpImg from '../src/assets/img/workouts/body-pump.png';
import YogaImg from '../src/assets/img/workouts/yoga.png';
import FullBodyImg from '../src/assets/img/workouts/full-body.png';
import FitnessImg from '../src/assets/img/workouts/fitness.png';
import BattleRopeImg from '../src/assets/img/workouts/battle-rope.png';
import CommunityImg1 from '../src/assets/img/community/img1.png';
import CommunityImg2 from '../src/assets/img/community/img2.png';
import CommunityImg3 from '../src/assets/img/community/img3.png';
import CommunityImg4 from '../src/assets/img/community/img4.png';
import JoinImg from '../src/assets/img/join/woman.png';
// icons
import UsersIcn from '../src/assets/img/about/icons/users-icn.svg';
import CalendarIcn from '../src/assets/img/workouts/icons/calendar.svg';
import PriceIcn from '../src/assets/img/pricing/icons/price.svg';
import CommunityIcn from '../src/assets/img/community/icons/community-icn.svg';
import QuestionMarkIcn from '../src/assets/img/faq/icons/question-mark.svg';
import itemImg1 from "./item1.avif"
import itemImg2 from "./item2.avif"
import itemImg3 from "./item3.jpg"
import itemImg4 from "./item4.avif"
import itemImg5 from "./item5.avif"
import itemImg6 from "./item6.avif"
import itemImg7 from "./item7.avif"
import itemImg8 from "./item8.avif"
import itemImg9 from "./item9.avif"
import locationSVG from "./locationSVG.png"

export const header = {

  logo: Logo,
  btnLoginText: 'Log in',
  btnSignupText: 'Sign Up',
};

export const nav = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Workouts', href: '#workouts' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Community', href: '#community' },
  { name: 'FAQ', href: '#faq' },
  { name: "shop", href: "/shop"}
];

export const banner = {
  locationLogo:locationSVG,
  titlePart1: 'Get the best part of your day',
  titlePart2: '– you fit here.',
  subtitle:
    'We provide serious fitness but within a fun and friendly, safe space.',
  textBtn: 'Join Now',
  img: '',
};

export const about = {
  icon: UsersIcn,
  title: 'Our misson',
  subtitle1:
    'We are distinguished by our unsurpassed motivating atmosphere, knowledgeable staff, and premier exercise equipment, which supports our members in meeting their individual fitness goals.',
  subtitle2:
    'The strength of our heart-felt identity is utilized to inspire every person that steps foot into our gyms to better themselves.',
  link: 'Join Now',
};

export const workouts = {
  icon: CalendarIcn,
  title: 'Training programs',
  programs: [
    {
      image: ResistanceImg,
      name: 'Resistance',
    },
    {
      image: BoxingImg,
      name: 'Boxing',
    },
    {
      image: BodyPumpImg,
      name: 'Body Pump',
    },
    {
      image: YogaImg,
      name: 'Yoga',
    },
    {
      image: FullBodyImg,
      name: 'Full Body',
    },
    {
      image: FitnessImg,
      name: 'Fitness',
    },
    {
      image: BattleRopeImg,
      name: 'Battle Rope',
    },
  ],
};

export const pricing = {
  icon: PriceIcn,
  title: 'Pricing plan',
  plans: [
    {
      name: 'Basic plan',

      price: '1500',
      list: [
        { name: 'unlimited gym access' },
        { name: '1 training programs' },
        { name: 'free fitness consultation' },
      ],
      delay: 600,
      amount:1,
    },
    {
      name: 'Premium plan',
      price: '4000',
      list: [
        { name: 'unlimited gym access' },
        { name: '5 training programs' },
        { name: 'free fitness consultation' },
        { name: 'personal trainer' },
      ],
      delay: 800,
      amount:1,
    },
    {
      name: 'Elite plan',
      price: '6000',
      list: [
        { name: 'unlimited gym access' },
        { name: 'all training programs' },
        { name: 'free fitness consultation' },
        { name: 'personal trainer' },
        { name: '50% off drinks' },
      ],
      delay: 1000,
      amount:1,
    },
  ],
};

export const community = {
  icon: CommunityIcn,
  title: 'Community',
  testimonials: [
    {
      image: CommunityImg1,
      name: 'Mark A.',
      message:
        '“Great location, great price and great, helpful people. What to want more?”',
    },
    {
      image: CommunityImg2,
      name: 'Lauren K.',
      message:
        '“Gymme changed my life. Not only physically but mentally as well. I’m a better mother, and all around better human being because of this gym.”',
    },
    {
      image: CommunityImg3,
      name: 'Jhon D.',
      message:
        '“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”',
    },
    {
      image: CommunityImg4,
      name: 'Anne R.',
      message:
        '“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”',
    },
  ],
};

export const faq = {
  icon: QuestionMarkIcn,
  title: 'FAQ',
  accordions: [
    {
      question: 'How can I book a workout class?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Can I pay by cash for my membership?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'What age do I need to be to join?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Are there any lockers?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'How do I cancel my membership?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Is there water available at the gym?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
  ],
};

export const join = {
  image: JoinImg,
  title: 'Wanna join & have fun?',
  subtitle:
    'We’ll keep you updated on the things you need to know about Gymme. Nothing more, nothing less.',
  btnText: 'Join now',
};

export const footer = {
  logo: Logo,
  copyrightText: 'All rights reserved. Gymme 2022.',
};

export const shop = {
  // image: JoinImg,
  title: 'shop title',
  // btnText: 'Join now',
  items : [
    {
      key:1,
      name:"Treadmill",
      price: 20000, 
      url:itemImg1,
      discription:"good quality,easy exchange,fast delivary,1 year warrenty",
      amount:1,
    },

    {
      key:2,
      name:"Gym T-shirt",
      price:300,
      url:itemImg2,
      discription:"Men Recycled Polyester Gym T-Shirt - Black Print",
      amount:1,
    },

    {
      key:3,
      name:"Peanut Butter",
      price: 300,
      url:itemImg3,
      discription:"1. good quality",
      amount:1,
    },

    {
      key:4,
      name:"Gym Bag",
      price: 799,
      url:itemImg4,
      discription:"1. good quality",
      amount:1,
    },

    {
      key:5,
      name:"Gloves",
      price: 300,
      url:itemImg5,
      discription:"1. good quality",
      amount:1,
    },

    {
      key:6,
      name:"Dumbell",
      price: 3000,
      url:itemImg6,
      discription:"1. good quality",
      amount:1,
    },

    {
      key:7,
      name:"Gym Cycle",
      price: 7999,
      url:itemImg7,
      discription:"1. good quality",
      amount:1,
    },
    {
      key:8,
      name:"Bench Press",
      price: 7000,
      url:itemImg8,
      discription:"1. good quality",
      amount:1,
    },
    {
      key:9,
      name:"Cable Cross Machine",
      price: 9999,
      url:itemImg9,
      discription:"1. good quality",
      amount:1,
    },
  ]
};
