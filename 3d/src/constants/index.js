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
        "Top-Notch Bike Selection!GearPoint offers a fantastic variety of sports, electric, and petrol bikes. The staff is knowledgeable and helped me find the perfect bike for my needs. Highly recommend!",
      name: "Prabhas",
      designation: "",
      company: "Mogalthur",
      image: "https://wallpapercave.com/wp/wp8981362.jpg",
    },
    {
      testimonial:
        "Great Bikes, Smooth Process!The range of bikes at GearPoint is impressive. I purchased an electric bike, and the whole process was smooth, from browsing to delivery. Love my new ride! ",
      name: "Ram charan",
      designation: "",
      company: "Jagitial",
      image: "https://m.media-amazon.com/images/M/MV5BMmNkNGIyMjEtZDJkNy00ZTBkLTg3MWUtMDBjM2ZmZGMyYTVlXkEyXkFqcGdeQXVyNDI3NjU1NzQ@._V1_.jpg",
    },
    {
      testimonial:
        "Amazing Store for Bike Lovers!   Whether you're into sports bikes or eco-friendly electric options, GearPoint has it all. Their customer support team is helpful, and the quality of bikes is outstanding",
      name: "Allu Arjun",
      designation: "",
      company: "warangal",
      image: "https://th.bing.com/th/id/OIP.Th19Zzch381gYZkNuoUYcQHaKQ?rs=1&pid=ImgDetMain",
    },
    {
      testimonial:
        "High-Quality Bikes, Great Service!   Bought a petrol bike from GearPoint, and it’s been an incredible experience. The bike runs perfectly, and the team ensured I got all the details before purchasing.  ",
      name: "Pawan Kalyan",
      designation: "",
      company: "Vishakpatnam",
      image: "https://th.bing.com/th/id/OIP.-naKkSbY1j8j5mWS2zIf6QHaKX?rs=1&pid=ImgDetMain",
    },
    {
      testimonial:
        "GearPoint Delivers Excellence!   From sleek sports bikes to powerful petrol ones, GearPoint’s collection is unmatched. I got my dream bike here and couldn’t be happier with the performance!",
      name: "Naomi Scott",
      designation: "",
      company: "England",
      image: "https://m.media-amazon.com/images/M/MV5BY2EzOTA5OGItNjljZi00YWQ2LWFlMWEtNzE0NDFlMzVjYzE5XkEyXkFqcGdeQXVyNDU1NjUxOTc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      testimonial:
        "Hero Optima HX:-A budget-friendly electric scooter with an 82 km range and simple design. Ideal for short commutes but lacks advanced features.",
      name: "NTR Jr",
      designation: "",
      company: "Manglore",
      image: "https://th.bing.com/th/id/OIP.ZjKrnodPLNWNFf3odrr4MwHaLH?rs=1&pid=ImgDetMain",
    },
    {
      testimonial:
        "Suzuki Burgman Electric:-Spacious and comfortable with a maxi-scooter feel, promising a long range and premium design. Availability might be limited in some regions.",
      name: "RDJ",
      designation: "",
      company: "New York",
      image: "https://th.bing.com/th/id/OIP.kgjrMHqK871PeFba8BuTwwHaLH?rs=1&pid=ImgDetMain",
    },
    {
      testimonial:
        "Bajaj Chetak Electric:-A premium electric scooter with a durable metal body, 108 km range, and advanced features like regenerative braking. Slightly expensive but worth it for its quality.  ",
      name: "Siddu",
      designation: "",
      company: "Medchal",
      image: "https://images.filmibeat.com/ph-big/2024/01/siddu-jonnalagadda_1704428390150.jpg",
    },
    {
      testimonial:
        "Yamaha Fascino 125 Fi Hybrid:-Stylish and fuel-efficient, the hybrid engine offers great mileage and smooth performance. Lightweight and easy to handle but lacks power on inclines.",
      name: "Tom Crusie",
      designation: "",
      company: "Paris",
      image: "https://image.tmdb.org/t/p/original/2Dkx4uuGoWFrPSitxdikv9z5azR.jpg",
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