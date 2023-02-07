import TweetButton from "./SidebarComponents/TweetButton";
import AccountInfo from "./SidebarComponents/AccountInfo";
import SidebarLinks from "./SidebarComponents/SidebarLinks";
import MediaLogo from "./SidebarComponents/MediaLogo";

const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <MediaLogo />
      <SidebarLinks />
      <TweetButton />
      <AccountInfo />
    </div>
  );
};

export default Sidebar;
