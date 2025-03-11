import { useState, useEffect, useRef } from "react";
import { MdMenu } from "react-icons/md";
import { Link } from "react-scroll";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const NavbarMenu = [
    { id: 1, title: "Home", link: "home" },
    { id: 2, title: "About Us", link: "about" },
    { id: 3, title: "Service", link: "service" },
    { id: 4, title: "Our Team", link: "team" },
    { id: 5, title: "Events", link: "events" },
  ];

  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const menuButtonRef = useRef(null); // Ref for menu button

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) setOpen(false);
  }, [isMobile]);

  return (
    <>
      <nav className="relative text-sm mx-3">
        <div className="container mx-auto flex justify-between items-center py-4 lg:px-4">
          <div className="flex items-center gap-0 text-xs sm:text-sm md:space-x-1 md:text-lg font-bold uppercase">
            <p>Kambia District</p>
            <p className="text-primary">Students Association</p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6 md:gap-3 md:text-yellow-600">
              {NavbarMenu.map((menu) => (
                <li key={menu.id} className="text-md">
                  <Link
                    activeClass="active"
                    to={menu.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="inline-block py-1 px-4 md:px-2 cursor-pointer hover:shadow-[0_3px_0_-1px]"
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <MdMenu
              ref={menuButtonRef}
              className="text-2xl sm:text-4xl cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <ResponsiveMenu open={open} setOpen={setOpen} menuButtonRef={menuButtonRef} />
    </>
  );
};

export default Navbar;
