import Wave from "../assets/svg/wave1.svg?react";

export default function OurServices() {
  return (
    <section className="relative min-h-screen">
      {/* SVG as inline React component */}
      <Wave className="absolute inset-0 w-full h-full object-cover" preserveAspectRatio="none" />


      {/* Content above it */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-3xl">Our Services</h1>
      </div>
    </section>
  );
}