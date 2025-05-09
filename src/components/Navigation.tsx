
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Book, BookOpen, Video, Search, Mail, User } from "lucide-react";
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md py-4 sticky top-0 w-full z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-display font-bold text-missionpurple-700">
            Mission All One
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavLink href="#resources" text="Resources" />
          <NavLink href="#videos" text="Videos" />
          <NavLink href="#books" text="Books" />
          <NavLink href="#blog" text="Blog" />
          <NavLink href="#about" text="About Us" />
          <Button className="btn-primary">Contact Us</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            className="p-2 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20 px-4">
          <div className="flex flex-col space-y-6 text-center text-lg">
            <MobileNavLink href="#resources" text="Resources" icon={<Search size={20} />} onClick={() => setIsOpen(false)} />
            <MobileNavLink href="#videos" text="Videos" icon={<Video size={20} />} onClick={() => setIsOpen(false)} />
            <MobileNavLink href="#books" text="Books" icon={<Book size={20} />} onClick={() => setIsOpen(false)} />
            <MobileNavLink href="#blog" text="Blog" icon={<BookOpen size={20} />} onClick={() => setIsOpen(false)} />
            <MobileNavLink href="#about" text="About Us" icon={<User size={20} />} onClick={() => setIsOpen(false)} />
            <MobileNavLink href="#contact" text="Contact Us" icon={<Mail size={20} />} onClick={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  text: string;
}

const NavLink = ({ href, text }: NavLinkProps) => (
  <a 
    href={href} 
    className="text-foreground hover:text-missionpurple-500 transition-colors font-medium"
  >
    {text}
  </a>
);

interface MobileNavLinkProps {
  href: string;
  text: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const MobileNavLink = ({ href, text, icon, onClick }: MobileNavLinkProps) => (
  <a 
    href={href} 
    className="flex items-center justify-center space-x-2 py-2 hover:text-missionpurple-500 transition-colors"
    onClick={onClick}
  >
    {icon}
    <span>{text}</span>
  </a>
);

export default Navigation;
