import Wave from "../assets/svg/wave1.svg?react";
import { Dividers } from "../components/ui/divider";
import BgSvg from "../components/ui/bgblob";
import img1 from "../assets/images/education.png"
import img2 from "../assets/images/home.png"
import img3 from "../assets/images/lifestyle.png"
import img4 from "../assets/images/tech.png"

export default function OurServices() {
  const services = [
    { image: img1, text: "Home & Personal Assistance" },
    { image: img2, text: "Tech & Digital Assistance" },
    { image: img3, text: "Lifestyle & Wellness" },
    { image: img4, text: "Education & Learning Support" },
  ];
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* SVG as inline React component */}
      <BgSvg/>
      {/* Content above it */}
       <h1 className="relative z-10 text-center text-6xl font-bold text-sky-300 mb-12 font-nunito pt-20">
        Our Services
      </h1>

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-10 "
          >
            <img src={service.image} alt={service.text} className="mb-4 w-48 h-48 object-cover" />
            <p className="font-inter text-2xl text-center font-bold text-sky-500">{service.text}</p>
          </div>
        ))}
      </div>
      {Dividers.wave}

    </section>
  );
}