import React from "react";
import { Activity } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar({ onNavigate, currentPage }) {
  const handleNavigation = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div 
          className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform duration-300" 
          onClick={() => handleNavigation('home')}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#005BEA] to-[#00C6FB] hover:shadow-lg transition-shadow">
            <Activity className="h-6 w-6 text-white" />
          </div>
          <span className="bg-gradient-to-r from-[#005BEA] to-[#00C6FB] bg-clip-text text-transparent">
            MediPredict
          </span>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="ghost"
            onClick={() => handleNavigation('home')}
            className={`transition-all duration-300 cursor-pointer hover:scale-105 ${currentPage === 'home' ? 'text-[#005BEA]' : 'text-gray-600 hover:text-[#005BEA]'}`}
          >
            Home
          </Button>
          <Button 
            variant="ghost"
            onClick={() => handleNavigation('about')}
            className={`transition-all duration-300 cursor-pointer hover:scale-105 ${currentPage === 'about' ? 'text-[#005BEA]' : 'text-gray-600 hover:text-[#005BEA]'}`}
          >
            About
          </Button>
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost"
              onClick={() => handleNavigation('auth')}
              className="cursor-pointer hover:scale-105 transition-all duration-300"
            >
              Login
            </Button>
            <Button 
              className="bg-gradient-to-r from-[#005BEA] to-[#00C6FB] hover:opacity-90 hover:scale-105 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
              onClick={() => handleNavigation('auth')}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

