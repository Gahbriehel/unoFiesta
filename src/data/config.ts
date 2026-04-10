export const config = {
  theme: {
    // Allows easy swapping of accent colors if needed
    accent: "blue",
  },
  hero: {
    title: "Denzel Olayiwola",
    subtitle: "Join us at our home as we celebrate",
    date: "May 3rd, 2026",
    backgroundImage: "/images/luxury_baby_hero_1775635960459.png",
  },
  details: {
    date: "Sunday, May 3rd",
    time: "2:00 PM - 7:00 PM",
    venue: "24 Portland Rd\nB16 9HU",
    rsvpDate: "April 20th",
    rsvp: [
      {
        name: "Mom",
        phone: "+44 7769005187",
        whatsapp: "https://wa.me/447769005187"
      },
      {
        name: "Dad",
        phone: "+44 7769690367",
        whatsapp: "https://wa.me/447769690367"
      }
    ],
  },
  security: {
    enabled: true,
    password: "denzel@one",
  },
  story: {
    heading: "A Year of Joy",
    paragraph: "Our little Denzel has brought so much light and love into our lives over the past year. From his first bright-eyed smile to his wobbly first steps, every moment has been a treasure. We cannot wait to celebrate this beautiful milestone surrounded by our closest family and friends.",
    milestones: [
      { title: "First Smile", date: "May 4, 2025" },
      { title: "First Word (Dada)", date: "March 5, 2026" },
      { title: "First Steps", date: "April 7, 2026" },
    ]
  },
  photos: {
    // Grid photos for the memory section
    featured: [
      "/images/image19.jpeg",
      "/images/image0.jpeg",
      "/images/image29.jpeg",
      "/images/image15.jpeg",
      "/images/image37.jpeg"
    ],
    // Gallery modal photos
    gallery: [
      "/images/baby_birthday_setup_1775635977821.png",
      "/images/baby_cake_smash_1775635996141.png",
      "/images/luxury_baby_hero_1775635960459.png",
      "/images/baby_birthday_setup_1775635977821.png",
      "/images/baby_cake_smash_1775635996141.png",
    ]
  },
  footer: {
    message: "We can't wait to celebrate with you!",
  }
};
