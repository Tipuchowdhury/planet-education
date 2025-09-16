export interface Testimonial {
  id: number;
  name: string;
  course: string;
  quote: string;
  image: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Emma Johnson",
    course: "Graphic Design",
    quote:
      "The hands-on approach and industry connections at VCAD have been incredible. I've learned so much more than I ever expected.",
    image: "/lady-1.png",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Liam Williams",
    course: "Digital Marketing",
    quote:
      "VCAD gave me the creative freedom and technical skills I needed to launch my career in marketing.",
    image: "/lady-2.png",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Sophia Brown",
    course: "Fashion Design",
    quote:
      "The instructors are industry professionals who bring real-world experience into every class.",
    image: "/lady-1.png",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 4,
    name: "Noah Garcia",
    course: "Web Development",
    quote:
      "I love how VCAD focuses on practical skills that employers actually want.",
    image: "/lady-2.png",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 5,
    name: "Ava Miller",
    course: "Interior Design",
    quote:
      "The collaborative environment here has helped me grow both creatively and professionally.",
    image: "/lady-1.png",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];
