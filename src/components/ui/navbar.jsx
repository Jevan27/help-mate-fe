  import React, { useState, useEffect, useRef } from "react";
  import logo from "../../assets/images/helpmate_logo.png";
  import { Button } from "@/components/ui/button";
  import { useGSAP } from "@gsap/react";
  import gsap, { Power1, Sine } from "gsap";
  
  

  export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [role, setRole] = useState("Choose your role");
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setOpen(!open);

    const chooseRole = (newRole) => {
      setRole(newRole);
      setOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
      function handleClickOutside(event) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    useGSAP(()=>{
      gsap.fromTo('#logo',{
        x:-100,
        autoAlpha: 0
      },{
        x: 0,
        duration: 1.5,
        autoAlpha: 1

      })

      gsap.from('.stagger',{
        y: -180,
        stagger:{
          amount: 1,
          grid: [3,1],
          axis: "y",
          ease: Power1.inOut
        }
      })





    }, []);

    return (
      <nav className="flex justify-between items-center px-6 py-3 bg-white shadow-md rounded-b-2xl">
        {/* Left: Logo */}
        <div id="logo" className="flex items-center space-x-2 cursor-pointer">
          <img
            src={logo}
            alt="HelpMate Logo"
            className="h-20 w-48"
          />
        </div>

        {/* Right: Menu */}
        <div className="flex items-center space-x-6">
          <a
            href="#"
            className="stagger text-sky-700 font-medium hover:text-sky-900 transition"
          >
            Help Centre
          </a>

          {/* Dropdown */}
          <div className="stagger relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className=" px-4 py-2 rounded-full bg-white border border-sky-300 text-sky-700 font-semibold shadow hover:border-sky-500 transition flex items-center space-x-2"
            >
              <span>{role}</span>
              <span className="text-sky-500">{open ? "▲" : "▼"}</span>
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-sky-200 rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => chooseRole("A Helper")}
                  className="block w-full text-left px-4 py-2 hover:bg-sky-100 text-sky-700"
                >
                  A Helper
                </button>
                <button
                  onClick={() => chooseRole("A Neighbor")}
                  className="block w-full text-left px-4 py-2 hover:bg-sky-100 text-sky-700"
                >
                  A Neighbor
                </button>
              </div>
            )}
          </div>

          {/* Go button (at end) */}
          <div className="stagger">
          <Button className="px-4 py-2 bg-sky-400 text-white font-semibold rounded-full shadow hover:bg-sky-500 transition">
            Go
          </Button>
          </div>
        </div>
      </nav>
    );
  }
