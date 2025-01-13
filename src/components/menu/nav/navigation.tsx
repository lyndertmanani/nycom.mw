import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  // Tooltip,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,

} from "@nextui-org/react";
import React from "react";
import { navLinks } from "./date"
import { NavLink } from "react-router-dom";
import Logo from "/assets/x-logo.png";
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full" className="bg-white h-20  lg:px-24"> {/* removed bg-opacity-80 */}
      <NavbarContent>
       
        <NavbarBrand>
          <img src={Logo} className="rounded-none h-[65px] w-auto" alt="Main logo" />
        </NavbarBrand>
      </NavbarContent>

      {/* default link on desktop */}
      <NavbarContent className="hidden sm:flex font-normal  text-black gap-4 justify-end w-full" justify="end">
        {navLinks.map((link, index) => (
          <NavbarItem key={index}>
            <NavLink className="hover:text-nycom-blue  text-sm font-medium duration-700 " to={link.path}>
              {link.label}
            </NavLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* <NavbarContent className=" " justify="end">
          <NavbarItem>
           <NavLink className=" border text-purple-900  border-purple-800 hover:text-purple-800 hover:border-purple-800 duration-700 rounded-none  py-[5px] px-4 font-medium" to="contact">
           Contact Us
           </NavLink>
         </NavbarItem>
       </NavbarContent> */}
       <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

      <NavbarMenu className="bg-black bg-opacity-100 text-slate-50"  >
        <NavbarMenuItem>
          {/* default link on desktop */}
      <NavbarContent className="hidden sm:flex font-normal text-black gap-4 justify-end w-full" justify="end">
        {navLinks.map((link, index) => (
          <NavbarItem key={index}>
            <NavLink className="hover:text-[#545454] duration-700" to={link.path}>
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
