export const site = {
  name: "Riggs HD",
  legalName: "Riggs HD Professionals Inc.",
  email: "riggshdpros@gmail.com",
  location: "Illinois, USA",
  donateUrl: "https://givebutter.com/2025-26-career-exploration-and-sponsorship-copy-wjza1h",
  youtube: "https://www.youtube.com/@riggshdprofessionals3016",
  instagram: "https://www.instagram.com/riggshdprosinc/",
  facebook: "https://www.facebook.com/destined2bgreat",
};

export const currentProgram = {
  year: "2026",
  title: "Pathways to Purpose",
  type: "Career Exploration Program",
  tagline: "Explore. Grow. Achieve. Get rewarded.",
  applicationDeadline: "Sunday, September 6",
  description: "Students explore their interests, strengthen professional skills, and connect their passions to future career goals through a guided program built around growth and follow-through.",
  reward: "Participants who complete the program activities can earn an Indiana Pacers game experience.",
  formUrl: "https://forms.gle/FzfSuPugSC7dZY6L9",
  flyerImage: "/images/original/pathways-to-purpose-2026.webp",
};

export const navItems = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/events", label: "Events" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export const pathway = ["Sport", "Relationship", "Guidance", "Opportunity", "Future"];

export type Program = {
  id: string;
  index: string;
  name: string;
  eyebrow: string;
  summary: string;
  details: string;
  status: string;
  actionLabel: string;
  actionUrl: string;
  image: string;
  alt: string;
  marker: string;
};

export const programs: Program[] = [
  {
    id: "basketball-development",
    index: "01",
    name: "Basketball Development",
    eyebrow: "Sport builds the first bridge",
    summary: "Skill work, competition, and accountability create a setting where young people can be seen, challenged, and supported.",
    details: "For students seeking basketball development within a broader culture of mentorship and life preparation.",
    status: "Interest form available",
    actionLabel: "Share your interest",
    actionUrl: "https://forms.gle/eGV4oK3ENqSD9fyx5",
    image: "/images/original/about-program.png",
    alt: "Coach Riggs speaking with young basketball players in a gym",
    marker: "SPORT",
  },
  {
    id: "pre-college",
    index: "02",
    name: "Pre-College Planning",
    eyebrow: "A plan turns potential into progress",
    summary: "Students and families get practical guidance around academic choices, college readiness, scholarships, and the decisions ahead.",
    details: "Consultations are tailored to the student’s current stage and next meaningful decision.",
    status: "Consultation requests open",
    actionLabel: "Request a consultation",
    actionUrl: "https://forms.gle/whL95bPX4szgmpnw9",
    image: "/images/original/founder-graduation.jpg",
    alt: "Graduates and supporters posing together after commencement",
    marker: "GUIDANCE",
  },
  {
    id: "career-exploration",
    index: "03",
    name: "Career Exploration",
    eyebrow: "Exposure expands the possible",
    summary: "Career conversations and workplace exposure help students connect interests, education, and real paths into professional life.",
    details: "Applications are now open for the 2026 Pathways to Purpose program, a guided career-exploration experience connecting student interests to professional skills and future goals.",
    status: "2026 applications open through September 6",
    actionLabel: "Apply for Pathways to Purpose",
    actionUrl: currentProgram.formUrl,
    image: "/images/original/home-action-3.jpg",
    alt: "Students and mentors gathered at a professional basketball venue",
    marker: "OPPORTUNITY",
  },
  {
    id: "speaking-workshops",
    index: "04",
    name: "Speaking & Workshops",
    eyebrow: "A message built from lived experience",
    summary: "Coach Riggs brings practical sessions on leadership, student development, identity, transition, and purpose to teams and communities.",
    details: "Designed for schools, teams, youth organizations, and professional-development audiences.",
    status: "Requests open",
    actionLabel: "Request a speaker",
    actionUrl: "https://forms.gle/jNHbHj6Z2CnRKKYz8",
    image: "/images/original/home-program-strip.webp",
    alt: "Coach Riggs addressing a group of students seated in a gym",
    marker: "FUTURE",
  },
];

export const values = [
  { label: "Accountability", copy: "We name the standard, own our choices, and follow through." },
  { label: "Respect", copy: "Every young person enters with dignity, voice, and possibility." },
  { label: "Innovation", copy: "We meet students where they are and build what the moment requires." },
  { label: "Compassion", copy: "Care is not separate from development; it is how trust begins." },
  { label: "Collaboration", copy: "Families, educators, coaches, and communities move further together." },
];

export const pastEvents = [
  {
    date: "SUMMER 2025",
    title: "Summer Hoops University",
    type: "Past program",
    copy: "A summer basketball and development experience. This listing is preserved as program history; 2026 dates have not been announced.",
    image: "/images/original/summer-hoops-2025.jpg",
  },
  {
    date: "2024–25",
    title: "Career Exploration Program",
    type: "Past cohort",
    copy: "The prior career-exploration cohort connected students to professional possibilities and helped shape the current Pathways to Purpose program.",
    image: "/images/original/home-action-2.jpg",
  },
  {
    date: "PROGRAM ARCHIVE",
    title: "Pacers Learning & Leadership",
    type: "Past experience",
    copy: "A youth learning experience that combined exposure, relationship, and leadership development beyond the court.",
    image: "/images/original/home-action-3.jpg",
  },
];
