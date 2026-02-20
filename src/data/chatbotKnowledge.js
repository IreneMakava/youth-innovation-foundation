/**
 * Knowledge base for Youth Innovation Foundation chatbot.
 * Used to answer questions about the organization.
 */

export const WELCOME =
  "Hi! I'm the Youth Innovation Foundation assistant. I can tell you about our mission, vision, programs, events, how to get involved, contact details, and more. What would you like to know?";

export const knowledge = [
  {
    keywords: ["vision", "what is your vision", "yif vision"],
    answer:
      "Our vision is to be the leading platform for advancing science and technology innovations that drive sustainable community development.",
  },
  {
    keywords: ["mission", "what is your mission", "what do you do", "yif mission"],
    answer:
      "Our mission is to identify, support, and scale impactful youth-led science and technology solutions that address community needs through innovation, partnerships, and capacity building.",
  },
  {
    keywords: ["about", "who are you", "what is yif", "youth innovation foundation"],
    answer:
      "Youth Innovation Foundation identifies, supports, and scales youth-led science and technology solutions for community development. We empower young innovators to create real impact in their communities.",
  },
  {
    keywords: ["contact", "email", "phone", "address", "reach", "get in touch", "where"],
    answer:
      "You can reach us at: Website — youthinnovationfoundation.or.tz | Email — info@youthinnovationfoundation.or.tz | Phone — +255 775 878 751 | Address — P.O. Box 90258, Samora Avenue, Holland House 4th Floor, DSM, Tanzania.",
  },
  {
    keywords: ["program", "programs", "what programs", "initiatives"],
    answer:
      "We run several programs: (1) Innovation Challenges — competitions and hackathons for young innovators. (2) Mentorship Programs — pairing youth with industry experts. (3) Training & Workshops — hands-on sessions in coding, design, entrepreneurship. (4) Funding Support — grants and seed funding for youth-led projects. Visit our Programs page for details.",
  },
  {
    keywords: ["event", "events", "upcoming", "when is the next"],
    answer:
      "We host community and partnership events. Check the Events section on our website for upcoming events and past highlights. You can also click 'See upcoming events' on the home page.",
  },
  {
    keywords: ["join", "get involved", "apply", "register", "membership", "how to join"],
    answer:
      "To get involved, click 'Apply Now' in the menu to register. You'll complete a short application and pay a membership fee to receive your Youth Innovation Foundation membership ID. You can use it for events and programs.",
  },
  {
    keywords: ["innovation", "innovations", "projects", "smart incubator"],
    answer:
      "We support youth-led innovations and projects. Our featured work includes initiatives like the Smart Incubator and other community tech solutions. Visit the Innovations page to explore.",
  },
  {
    keywords: ["testimonial", "testimonies", "stories", "what youth say"],
    answer:
      "Youth from our programs share their experiences in the Testimonies section. You can read how YIF helped them build skills and launch community solutions.",
  },
  {
    keywords: ["fee", "cost", "pay", "membership fee", "price"],
    answer:
      "Membership involves a one-time fee. You can choose from options like TZS 25,000, 50,000, 100,000, or 200,000 when you complete registration. Pay once to receive your membership ID.",
  },
  {
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening"],
    answer: WELCOME,
  },
  {
    keywords: ["help", "what can you do", "options"],
    answer: WELCOME,
  },
];

export const FALLBACK =
  "I'm not sure about that. I can help with: our mission and vision, programs, events, how to apply or get involved, contact info, and innovations. Try asking something like 'What is your mission?' or 'How can I contact you?'";
