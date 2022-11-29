import TweetButton from "./UI/SidebarComponents/TweetButton";
import AccountInfo from "./UI/SidebarComponents/AccountInfo";
import SidebarLinks from "./UI/SidebarComponents/SidebarLinks";
import MediaLogo from "./UI/SidebarComponents/MediaLogo";

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
