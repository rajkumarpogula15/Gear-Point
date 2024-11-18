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
      id: "bikes",
      title: "Bikes",
    },
    {
      id: "accessories",
      title: "Accessories",
    },
    {
      id: "reviews",
      title: "Reviews",
    },
    {
      id:"contact",
      title:"Contact"
    }
  ];
  
  export const UserNavLinks = [
    {
      id: "/user/bikes",
      title: "Bikes",
    },
    {
      id: "/user/accessories",
      title: "Accessories",
    },
    {
      id: "/user/reviews",
      title: "Reviews",
    },
    // {
    //   id:"/user/contact",
    //   title:"Contact"
    // },
    {
      id:"/user/myorders",
      title:"MyOrders"
    }
  ];

  const services = [
      { 
        title: "TVS", 
        icon: "https://bikes.tractorjunction.com/_next/image?url=https%3A%2F%2Fimages.tractorjunction.com%2Ftvs_logo_8b0bbb2b7a.webp%3Fformat%3Dwebp&w=128&q=75" 
      },
      { 
        title: "Royal Enfield", 
        icon: "https://bikes.tractorjunction.com/_next/image?url=https%3A%2F%2Fimages.tractorjunction.com%2Froyal_enfield_logo_631655f217.webp%3Fformat%3Dwebp&w=128&q=75" 
      },
      { 
        title: "YAMAHA", 
        icon: "https://bikes.tractorjunction.com/_next/image?url=https%3A%2F%2Fimages.tractorjunction.com%2Fyamaha_logo_fc48575aaf.webp%3Fformat%3Dwebp&w=128&q=75" 
      },
      { 
        title: "BAJAJ", 
        icon: "https://bikes.tractorjunction.com/_next/image?url=https%3A%2F%2Fimages.tractorjunction.com%2Fbajaj_logo_90f8c408ec.webp%3Fformat%3Dwebp&w=128&q=75" 
      },
      { 
        title: "Honda", 
        icon: "https://bikes.tractorjunction.com/_next/image?url=https%3A%2F%2Fimages.tractorjunction.com%2Fhonda_logo_35da40bf6a.webp%3Fformat%3Dwebp&w=128&q=75s" 
      },
      { 
        title: "KTM", 
        icon: "https://bikes.tractorjunction.com/_next/image?url=https%3A%2F%2Fimages.tractorjunction.com%2Fktm_logo_0e091d1a54.webp%3Fformat%3Dwebp&w=128&q=75" 
      },
      { 
        title: "Suzuki", 
        icon: "https://bikes.tractorjunction.com/_next/image?url=https%3A%2F%2Fimages.tractorjunction.com%2Fsuzuki_logo_04f3a7e33c.webp%3Fformat%3Dwebp&w=128&q=75" 
      },
      { 
        title: "BMW", 
        icon: "https://bikes.tractorjunction.com/_next/image?url=https%3A%2F%2Fimages.tractorjunction.com%2Fbmw_logo_c1fdb44d9f.webp%3Fformat%3Dwebp&w=128&q=75" 
      },
      { 
        title: "Indian", 
        icon: "https://bikes.tractorjunction.com/_next/image?url=https%3A%2F%2Fimages.tractorjunction.com%2Findia_motorcycles_logo_00b60c00f2.webp%3Fformat%3Dwebp&w=128&q=75" 
      },
      { 
        title: "Jawa", 
        icon: "https://bikes.tractorjunction.com/_next/image?url=https%3A%2F%2Fimages.tractorjunction.com%2Fjawa_logo_1de4a10bb8.webp%3Fformat%3Dwebp&w=128&q=75" 
      },
      { 
        title: "Hero", 
        icon: "https://bikes.tractorjunction.com/_next/image?url=https%3A%2F%2Fimages.tractorjunction.com%2Fhero_logo_eab5263cf7.webp%3Fformat%3Dwebp&w=128&q=75" 
      },
      { 
        title: "Keeway", 
        icon: "https://bikes.tractorjunction.com/_next/image?url=https%3A%2F%2Fimages.tractorjunction.com%2Fkeeway_logo_c2eb04d614.webp%3Fformat%3Dwebp&w=128&q=75" 
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [

    {
      title: "Meher Prakash",
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



      {
        title: "CFO",
        company_name: "Acme Co",
        icon: "https://randomuser.me/api/portraits/women/4.jpg",
        iconBg: "#E6DEDD",
        date: "Date Not Provided", // Add specific dates if available
        points: [
          "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        ],
      },
      {
        title: "COO",
        company_name: "DEF Corp",
        icon: "https://randomuser.me/api/portraits/men/5.jpg",
        iconBg: "#E6DEDD",
        date: "Date Not Provided", // Add specific dates if available
        points: [
          "I've never met a web developer who truly cares about their clients' success like Rick does.",
        ],
      },
      {
        title: "CTO",
        company_name: "456 Enterprises",
        icon: "https://randomuser.me/api/portraits/women/6.jpg",
        iconBg: "#E6DEDD",
        date: "Date Not Provided", // Add specific dates if available
        points: [
          "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        ],
      },
    
  ];

  
  const testimonials = [
    {
      testimonial:
        "GearPoint transformed my biking experience! Their range of bikes and accessories is unmatched, and the customer service is outstanding..",
      name: "Vaishali",
      designation: "",
      company: "Hyderabad",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Managing our inventory has never been easier. GearPoint's admin tools are a game-changer for small business owners like me.",
      name: "Aman",
      designation: "",
      company: "Delhi",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "I loved how easy it was to find and purchase the perfect bike. The smooth process and quick delivery were top-notch!",
      name: "Jyothi",
      designation: "",
      company: "Bangaluru",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

  const Reviewsinfo = [
    {
      testimonial:
        "",
      name: "Prabhas",
      designation: "",
      company: "Mogalthur",
      image: "https://wallpapercave.com/wp/wp8981362.jpg",
    },
    {
      testimonial:
        "",
      name: "Ram charan",
      designation: "",
      company: "DEF Corp",
      image: "https://www.bing.com/images/blob?bcid=S3SdfVCTycIHrTjlFvpMYNmBITA7.....zg",
    },
    {
      testimonial:
        "",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      testimonial:
        "",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
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
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects,Reviewsinfo };