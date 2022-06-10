import React from 'react';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import Particles from "react-tsparticles";
import particlesOptions from "../particlesHome.json";
//import ProjectsSection from '../components/ProjectsSection';
//import TestimonialsSection from '../components/TestimonialsSection';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';

export default function Home() {
  // pageConfigs
  var config = {
    enableParticles: true
  }

  return (
    <div>
      {config.enableParticles && <Particles options={particlesOptions}/>}
      <HeroSection />
       <AboutSection />
      <ServicesSection />
      {/*<ProjectsSection />*/}
      {/* <TestimonialsSection /> */}
      <ContactBanner />
    </div>
  );
}