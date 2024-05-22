import { Drawer, Sidebar, TextInput } from "flowbite-react";
import {
  HiChartPie,
  HiClipboard,
  HiLogin,
  HiSearch,
  HiShoppingBag,
  HiUsers,
} from "react-icons/hi";

interface SideBarLayoutProps {
  isOpen: boolean;
  handleClose: () => void;
}

const SideBarLayout: React.FC<SideBarLayoutProps> = ({
  isOpen,
  handleClose,
}) => {
  return (
    <>
      <Drawer
        className="border-r border-gray-200"
        backdrop={false}
        open={isOpen}
        onClose={handleClose}
      >
        <Drawer.Header title="MENU" titleIcon={() => <></>} />
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <form className="pb-3 md:hidden">
                  <TextInput
                    icon={HiSearch}
                    type="search"
                    placeholder="Search"
                    required
                    size={32}
                  />
                </form>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item href="/" icon={HiChartPie}>
                      Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item href="/classrooms" icon={HiShoppingBag}>
                      Classrooms
                    </Sidebar.Item>
                    <Sidebar.Item href="/subjects" icon={HiUsers}>
                      Subjects
                    </Sidebar.Item>
                    <Sidebar.Item href="/users" icon={HiLogin}>
                      Users
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item href="settings" icon={HiClipboard}>
                      Settings
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default SideBarLayout;
