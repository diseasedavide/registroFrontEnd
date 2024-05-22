import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Button } from "flowbite-react";
import UserIcon from "../userIcon/UserIconLayout";
import classNames from "classnames";

interface NavbarLayoutProps {
  toggleSideBar: () => void;
  isOpen: boolean;
}

const NavbarLayout: React.FC<NavbarLayoutProps> = ({
  toggleSideBar,
  isOpen,
}) => {
  const mainClass = classNames(
    "self-center whitespace-nowrap text-xl font-semibold dark:text-white",
    { "ml-80": isOpen }
  );

  return (
    <Navbar className="top-15 border-b border-gray-200" fluid rounded>
      <Button onClick={toggleSideBar}>Menu</Button>
      <NavbarBrand href="https://flowbite-react.com">
        <span className={mainClass}>Registro Elettronico</span>
      </NavbarBrand>
      <NavbarToggle />
      <UserIcon />
    </Navbar>
  );
};

export default NavbarLayout;
