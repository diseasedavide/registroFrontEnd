import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Button } from "flowbite-react";

interface NavbarLayoutProps {
  toggleSideBar: () => void;
}

const NavbarLayout: React.FC<NavbarLayoutProps> = ({ toggleSideBar }) => {
  return (
    <Navbar className="top-15 border-b border-gray-200" fluid rounded>
      <Button onClick={toggleSideBar}>Menu</Button>
      <NavbarBrand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Registro Elettronico
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default NavbarLayout;
