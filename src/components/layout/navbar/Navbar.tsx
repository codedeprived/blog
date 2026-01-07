import { useState } from "react";
import { Link } from "react-router-dom";
import { TypingBrand } from "./../../ui/TypingBrand";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center">
          <TypingBrand />
        </div>  


        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          {["Home", "Services", "Skills", "Blog", "About", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="relative hover:text-white transition
                        after:content-[''] after:absolute after:left-0 after:-bottom-1
                        after:h-[2px] after:w-0 after:bg-indigo-400
                        after:transition-all hover:after:w-full"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 px-6 pb-6">
          <div className="flex flex-col gap-4 text-gray-300">
            {["Home", "Services", "Skills", "Blog", "About", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-white transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export { Navbar };
