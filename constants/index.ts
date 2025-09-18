const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  // {
  //   name: "Skills",
  //   link: "#skills",
  // },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Coding" },
  { value: 15, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "Technologies used" },
  { value: 100, suffix: "%", label: "Commitment to Learning" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "I implement robust code practices, conduct thorough testing, and review every detail to ensure pixel-perfect UI and bug-free functionality. Quality isn't an afterthought—it's integrated from the first line of code to the final deploy.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "You'll always know the status of your project. I provide regular updates, proactively address feedback, and ensure alignment through clear and timely communication—via your preferred channels (Slack, Email, Notion, etc.).",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Using agile planning and efficient workflows (like Trello, Linear, or Jira), I consistently meet deadlines without sacrificing quality. Your time is valuable, and I treat it that way—with disciplined execution and realistic timelines.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "In my third year, I focused on applying everything I’ve learned — from developing production-grade applications to working on real hardware. I also completed an internship and built my diploma thesis project Sjednica.ba, a real-world SaaS platform.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/PTF.png",
    title: "Software Engineering Student – Year 3",
    date: "October 2024 – September 2025",
    responsibilities: [
      "Built and deployed full-stack web applications with React and Appwrite.",
      "Developed mobile apps and explored cross-platform tools like React Native.",
      "Configured system and network environments in Linux-based systems.",
      "Studied embedded systems and programmed low-level hardware logic.",
      "Practiced QA methodologies, test case creation, and issue tracking.",
      "Completed 30-day internship at Itineris.ba – collaborated on internal systems.",
      "Developed my diploma thesis project – Sjednica.ba: A municipal session management platform.",
      "Worked on software architecture, authentication, and real-time data features in Sjednica.ba.",
    ],
  },
  {
    review:
      "Second year was focused on practical skills: data structures, databases, OOP, and software analysis. I began building full applications and understanding how systems scale.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/PTF.png",
    title: "Software Engineering Student – Year 2",
    date: "October 2023 – September 2024",
    responsibilities: [
      "Built deeper understanding of algorithms, complexity, and data structures.",
      "Developed object-oriented applications in C++ and Java.",
      "Designed and queried relational databases (SQL) with normalization principles.",
      "Studied web design basics, including layout, HTML/CSS and JavaScript.",
      "Explored telecommunications and secure data transmission.",
      "Worked on software analysis and design methodologies (UML, requirements).",
      "Learned about computer graphics and image rendering basics.",
      "Introduced to advanced database systems and system-level data handling.",
    ],
  },
  {
    review:
      "My first year laid the foundation in programming, discrete math, and computer architecture. It was all about building strong core skills.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/PTF.png",
    title: "Software Engineering Student – Year 1",
    date: "October 2022 – September 2023",
    responsibilities: [
      "Mastered programming fundamentals in C++ and procedural thinking.",
      "Studied Discrete Mathematics, Computer Architecture, and Networks.",
      "Built first console-based applications and explored Linux basics.",
      "Completed courses like Engineering Math, Operating Systems, and Programming Techniques.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/_nedimspahic_/",
    imgPath: "/images/insta.png",
  },
  {
    name: "x",
    url: "https://x.com/spahicnedim3",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/nedimspahic",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
