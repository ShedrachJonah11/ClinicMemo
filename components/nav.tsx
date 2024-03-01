import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  Link,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import logo from "../public/clinic.svg";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if window exists (client-side) and update isMobile state
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Call handleResize on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Navbar maxWidth="xl" className="shadow p-0 md:px-6 top-[0] bg-white ">
      <NavbarBrand
        className="w-fit flex-grow-[0.2] md:flex-grow-[0.6] mr-4"
        as={Link}
        href="/"
      >
        <Image src={logo} alt="logo" width={200} height={50} className="mr-6" />
      </NavbarBrand>

      {/* Conditional rendering based on screen size */}
      {isMobile ? (
        <NavbarMenuToggle onClick={() => setIsMenuOpen(!isMenuOpen)} />
      ) : (
        <NavbarContent className="flex items-center ml-">
          <NavbarItem>
            <h1 className="text-black mr-6">Home</h1>
          </NavbarItem>
          <NavbarItem>
            <h1 className="text-black mr-6">About us</h1>
          </NavbarItem>
          <NavbarItem>
            <h1 className="text-black">Pricing</h1>
          </NavbarItem>

          <NavbarItem as={Link}>
            <h1 className="text-black">Login</h1>
          </NavbarItem>
          <Button>Get Started</Button>
        </NavbarContent>
      )}

      {/* Conditionally render the NavbarMenu when the hamburger menu is active */}
      {isMenuOpen && (
        <NavbarMenu>
          <NavbarItem></NavbarItem>
        </NavbarMenu>
      )}
    </Navbar>
  );
}
