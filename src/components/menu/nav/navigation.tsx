import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  // Tooltip,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import React from "react";
import { navLinks } from "./date"
import { NavLink } from "react-router-dom";
import Logo from "/assets/x-logo.png";
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full" className="bg-white/90 h-28 lg:px-24"> {/* removed bg-opacity-80 */}
      <NavbarContent>
       
        <NavbarBrand>
          <img src={Logo} className="rounded-none h-[75px] w-auto" alt="Main logo" />
        </NavbarBrand>
      </NavbarContent>

      {/* default link on desktop */}
      <NavbarContent className="hidden sm:flex font-normal  text-black gap-4 justify-end w-full" justify="end">
        {navLinks.map((link, index) => (
          <NavbarItem key={index}>
            <NavLink className="hover:text-nycom-blue transition text-lg duration-600 " to={link.path}>
              {link.label}
            </NavLink>
          </NavbarItem>
        ))}
      </NavbarContent>
 
       <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

      <NavbarMenu className="bg-white "  >
        <NavbarMenuItem>
          {/* default link on desktop */}
      <NavbarContent className="hidden sm:flex font-normal text-black gap-4 justify-end w-full" justify="end">
      {navLinks.map((link, index) => (
          <NavbarItem key={index}>
            <NavLink className="hover:text-nycom-blue transition text-md duration-600 " to={link.path}>
              {link.label}
            </NavLink>
          </NavbarItem>
        ))}
      </NavbarContent>
        </NavbarMenuItem>

      </NavbarMenu>
    </Navbar>
  );
}
