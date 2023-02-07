import SidebarLink from "./SidebarLink";
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";

const SidebarLinks = () => {
  return (
    <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
      <SidebarLink text="Home" Icon={HomeIcon} active />
      <SidebarLink text="Explore" Icon={HashtagIcon} />
      <SidebarLink text="Notifications" Icon={BellIcon} />
      <SidebarLink text="Messages" Icon={InboxIcon} />
      <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
      <SidebarLink text="Lists" Icon={ClipboardListIcon} />
      <SidebarLink text="Profile" Icon={UserIcon} />
      <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
    </div>
  );
};

export default SidebarLinks;
