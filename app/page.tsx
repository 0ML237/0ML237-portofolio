import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Education from "@/components/Education";
import SocialLinks from "@/components/SocialLinks";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary selection:text-background">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Project />
      <Education />
      <SocialLinks />
      <Footer />
    </main>
  );
}
