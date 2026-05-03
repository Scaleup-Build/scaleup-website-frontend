import teamBg from "../assets/images/team-bg.jpg";
import franklin from "../assets/images/franklin.jpg";
import angel from "../assets/images/angel.jpg";
import benedicta from "../assets/images/benedicta.jpg";
import adesola from "../assets/images/Adesola.jpeg";
import james from "../assets/images/james.jpg";
import TeamCard from "./TeamCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const teamMembers = [
  {
    name: "Franklin Archibong",
    role: "Chief Product Visionary",
    description:
      "Franklin defines the long-term product vision, ensuring ScaleUp builds meaningful solutions that solve real market problems.",
    image: franklin,
  },
  {
    name: "James Victor",
    role: "Product Visionary",
    description:
      "James partners in defining forward-thinking product ideas and validating opportunities that drive sustainable growth.",
    image: james,
  },
  {
    name: "Benedicta Atagamen",
    role: "Lead, UI/UX Design",
    description:
      "Benedicta leads the design vision, ensuring every product interaction is purposeful, usable, and aligned with business goals.",
    image: benedicta,
  },
  {
    name: "Adesola Busari",
    role: "Lead, Software Development",
    description:
      "Adesola leads the development team, ensuring high quality code, efficient processes, and timely delivery of innovative software solutions.",
    image: adesola,
  },
  {
    name: "Angel Egerega",
    role: " Lead, Quality Assurance",
    description:
      "Angel safeguards product quality by identifying risks early, strengthening testing processes, and delivering a seamless user experience.",
    image: angel,
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen flex flex-col font-[Poppins]">
      <Navbar />
      <header
        className="relative w-full h-[320px] md:h-[420px] lg:h-[480px] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${teamBg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-bold font-inter text-primary text-4xl lg:text-6xl mb-2">
            Our Team
          </h1>
          <p className="font-medium text-primary text-lg lg:text-xl">
            Meet our community members
          </p>
        </div>
      </header>
      <main className="p-4 flex-1">
        <section className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              name={member.name}
              role={member.role}
              description={member.description}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
