"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ShareModal from "../components/ShareModal";
import ScrollReveal from "../components/ScrollReveal";

export default function Home() {
    const [isShareOpen, setIsShareOpen] = useState(false);

    return (
        <>
            <div className="bg-gradient"></div>
            <div className="glass-overlay"></div>

            <Navbar onOpenShare={() => setIsShareOpen(true)} />
            
            <main>
                <Hero onOpenShare={() => setIsShareOpen(true)} />
                <About />
                <Skills />
                <Projects />
                <Resume />
                <Contact />
            </main>

            <Footer onOpenShare={() => setIsShareOpen(true)} />
            
            <ShareModal
                isOpen={isShareOpen}
                onClose={() => setIsShareOpen(false)}
            />

            <ScrollReveal />
        </>
    );
}
