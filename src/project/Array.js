import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    
    
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const proj = [
    {
      name: "Flat Finder",
      description:
        "Implemented signup and login functionality separate for owner and buyer. owners can provide details of the flat. The details are mapped in the form of cards. Owners and Buyers can engage in one-on-one chat.",
      tags: [
        {
          name: reactjs,
          color: "#943712",
        },
        {
          name: mongodb,
          color: "green-text-gradient",
        },
        {
          name: nodejs,
          color: "pink-text-gradient",
        },
      ],
      video: "../videos/flatFinder.mp4",
      source_code_link: "https://github.com/",
    },
    {
      name: "Note Maker",
      description:
        "Implemented signup and login functionality for Users. Users can create, delete, and edit notes. Utilized MongoDB as the database to efficiently store and retrieve user-generated notes.",
      tags: [
      {
        name: reactjs,
        color: "#943712",
      },
      {
        name: mongodb,
        color: "green-text-gradient",
      },
      {
        name: nodejs,
        color: "pink-text-gradient",
      },
      ],
      video: "../videos/note_maker.mp4",
      source_code_link: "https://github.com/",
    },
    {
      name: "WhatsApp Clone",
      description:
        "Implemented log in Functionality.  A list of all the conversatione is displayed once they get logged  in. When a conversation is selected, data is fetched from database and they get engage in a chat.",
      tags: [
        {
          name: reactjs,
          color: "#943712",
        },
        {
          name: mongodb,
          color: "green-text-gradient",
        },
        {
          name: nodejs,
          color: "pink-text-gradient",
        },
      ],
      video: "../videos/ChatApp_Clone.mp4",
      source_code_link: "https://github.com/",
    },
    {
      name: "E-Commerce",
      description:
        "API data is fetched to display product information and images. Incorporated various sorting methods to enable users to sort products by price, alphabetically, and other  relevant criteria.  Utilized a cart reducer to handle shopping cart functionality, including adding and removing items.",
      tags: [
        {
          name: reactjs,
          color: "#943712",
        },
        {
          name: javascript,
          color: "pink-text-gradient",
        },
        {
          name: css,
          color: "green-text-gradient",
        },
      ],
      video: "../videos/e-commerce.mp4",
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, proj };