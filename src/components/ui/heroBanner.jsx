import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import hero1 from "../../assets/images/hero1.webp";
import hero2 from "../../assets/images/hero2.webp";
import hero3 from "../../assets/images/hero3.webp";
import hero4 from "../../assets/images/hero4.webp";
import hero5 from "../../assets/images/hero5.webp";

const slides = [
  {
    img: hero1,
    heading: "Find Trusted Help Near You",
    sub: "Connect with neighbors offering reliable side jobs."
  },
  {
    img: hero2,
    heading: "Save Time, Get Things Done",
    sub: "Hire help for cleaning, errands, and more."
  },
  {
    img: hero3,
    heading: "Support Local Skills",
    sub: "Empower your community by sharing tasks."
  },
  {
    img: hero4,
    heading: "Affordable & Flexible",
    sub: "Choose services that fit your budget and schedule."
  },
  {
    img: hero5,
    heading: "Your Neighborhood, Your Network",
    sub: "Discover trusted help just around the corner."
  }
];

export default function HeroBanner() {
  const [index, setIndex] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        slideRef.current,
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
      );
    });

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(timer);
      ctx.revert();
    };
  }, [index]);

  return (
    <div className="relative w-full h-screen overflow-hidden shadow-lg">
      <div
        ref={slideRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${slides[index].img})` }}
      >
        <div className="font-nunito absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            {slides[index].heading}
          </h1>
          <p className="font-inter text-lg md:text-xl text-gray-200 mt-3 mb-6">
            {slides[index].sub}
          </p>
          <Button size="lg" className="px-8 py-4 text-lg bg-sky-400 text-white font-semibold rounded-full shadow hover:bg-sky-500 transition">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}