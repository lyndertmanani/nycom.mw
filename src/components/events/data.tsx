export type Event = {
    id: string
    title: string
    description: string
    image: string
    date: string
    location: string
  }
  
  export const events: Event[] = [
    {
      id: "1",
      title: "National Youth Summit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sed tempore odio, repellendus aliquam.",
      image: "/assets/img/grant.jpg",
      date: "June 15, 2025",
      location: "Mzimba youth center",
    },
    {
      id: "2",
      title: "Youth Leadership Conference",
      description:
        "A gathering of young leaders to discuss important issues affecting youth today and develop solutions.",
      image: "/assets/img/grant.jpg",
      date: "July 22, 2025",
      location: "Cross Roads Hotel",
    },
    {
      id: "3",
      title: "Tech Innovation Workshop",
      description: "Learn about the latest technologies and how to apply them to solve real-world problems.",
      image: "/assets/img/grant.jpg",
      date: "August 10, 2025",
      location: "BICC Lilongwe",
    },
    {
      id: "4",
      title: "Environmental Sustainability Forum",
      description: "Join discussions on environmental challenges and sustainable practices for a better future.",
      image: "/assets/img/grant.jpg",
      date: "September 5, 2025",
      location: "Zomba",
    },
  ]
  
  