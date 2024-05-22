import SideBarLayout from "./layout/sidebar/SideBarLayout";
import { useState } from "react";
import NavbarLayout from "./layout/navbar/NavbarLayout";
import MainLayout from "./layout/main/MainLayout";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [IsOpen, setIsOpen] = useState<boolean>(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  console.log(window.innerWidth);

  return (
    <>
      <NavbarLayout toggleSideBar={() => setIsOpen(!IsOpen)} isOpen={IsOpen} />
      <MainLayout isOpen={IsOpen} />
      <SideBarLayout isOpen={IsOpen} handleClose={handleClose} />
      <ToastContainer />
    </>
  );
}

export default App;
