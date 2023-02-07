import { DotsHorizontalIcon } from "@heroicons/react/outline";

const AccountInfo = () => {
  return (
    <div className="text-[#d9d9d9] flex items-center justify-center hoverAnimation xl:ml-auto mt-auto">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
        alt=""
        className="h-10 w-10 rounded-full xl:mr-2.5"
      />
      <div className="hidden xl:inline leading-5">
        <h4 className="font-bold">Murad Sadigov</h4>
        <p className="text-[#6e767d]">@MuradSadigov</p>
      </div>
      <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
    </div>
  );
};
export default AccountInfo;
