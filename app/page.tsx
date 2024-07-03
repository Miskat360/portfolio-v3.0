import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FlotingNavbar";
import Grid from "@/components/Grid";
import React from "react";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";

const navItems = [
  {
    name: "About",
    link: "/",
  },
  {
    name: "Projects",
    link: "/",
  },
  {
    name: "Testimonials",
    link: "/",
  },
];
const page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        <Testimonials />
      </div>
    </main>
  );
};

export default page;
