"use client";

import "./globals.css";
import About from "../components/section/homepage/about/About";
import Villas from "../components/section/homepage/villas/Villas";
import Experience from "../components/section/homepage/experience/Experience";
import Journey from "../components/section/homepage/journey/Journey";
import HeroVideo from "../components/section/homepage/hero-video/HeroVideo";
import Culinary from "../components/section/homepage/culinary/Culinary";
import Map from "../components/section/homepage/map/Map";
import Hero from "../components/section/homepage/hero/Hero";
import Header from "../components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Reviews from "@/components/section/homepage/reviews/Reviews";
import Gallery from "@/components/section/homepage/gallery/Gallery";
import Schedule from "@/components/section/homepage/schedule/Schedule";
import Cta from "@/components/section/homepage/cta/Cta";
import Packages from "@/components/section/homepage/packages/Packages";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Villas />
      <Experience />
      <Packages />
      <Journey />
      <HeroVideo />
      <Culinary />
      <Map />
      <Reviews />
      <Gallery />
      <Schedule />
      <Cta />
      <Footer />
    </div>
  );
}