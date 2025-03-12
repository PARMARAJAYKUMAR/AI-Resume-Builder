import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { TiThMenu } from "react-icons/ti";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow-md bg-stone-900 text-[#eae7dc] m-1.5 rounded-sm">
      <nav className="flex justify-between items-center px-6 md:px-12 py-4">
        {/* Logo */}
        <div className="text-3xl font-bold flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="hover:text-stone-400 transition-colors">
              RE-GEN
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {[
              { path: "/", label: "Resume" },
              { path: "/ats-score", label: "ATS Score" },
              { path: "/about", label: "About Us" },
            ].map((item) => (
              <Link key={item.path} to={item.path}>
                <Button className="text-[#eae7dc] hover:bg-stone-600 px-5 py-5 rounded-sm transition-all duration-300">
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          <div className="flex gap-4">
            <Link to="/login">
              <Button className="border border-[#eae7dc] text-[#eae7dc] hover:bg-[#eae7dc] hover:text-stone-800 px-6 py-5 rounded-lg transition-all duration-300">
                Login
              </Button>
            </Link>
            <Link to="/sign-up">
              <Button className="bg-[#E85A4F] text-[#eae7dc] hover:bg-[#c44a42] px-6 py-5 rounded-lg transition-all duration-300">
                Get Started
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <TiThMenu
            className="cursor-pointer text-3xl hover:text-stone-400 transition-colors"
            onClick={toggleMenu}
          />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-stone-900 bg-opacity-95 z-50 flex flex-col items-center justify-center gap-6">
            <div className="flex flex-col gap-6 text-center w-10/12">
              {[
                { path: "/", label: "Resume" },
                { path: "/ats-score", label: "ATS Score" },
                { path: "/about", label: "About Us" },
              ].map((item) => (
                <Link key={item.path} to={item.path} onClick={toggleMenu}>
                  <Button className="w-full text-[#eae7dc] hover:bg-stone-600 px-6 py-3 rounded-lg transition-all duration-300">
                    {item.label}
                  </Button>
                </Link>
              ))}
              <div className="border-t border-stone-600 pt-6">
                <Link to="/login" onClick={toggleMenu}>
                  <Button className="w-full border border-[#eae7dc] text-[#eae7dc] hover:bg-[#eae7dc] hover:text-stone-800 px-6 py-3 rounded-lg transition-all duration-300">
                    Login
                  </Button>
                </Link>
              </div>
              <Link to="/sign-up" onClick={toggleMenu}>
                <Button className="w-full bg-[#E85A4F] text-[#eae7dc] hover:bg-[#c44a42] px-6 py-3 rounded-lg transition-all duration-300">
                  Get Started
                </Button>
              </Link>
            </div>
            <FiX
              className="absolute top-6 right-6 text-3xl cursor-pointer hover:text-stone-400 transition-colors"
              onClick={toggleMenu}
            />
          </div>
        )}
      </nav>
    </header>
  );
}

export default NavbarComponent;
