import Image from "next/image";

const MediaLogo = () => {
  return (
    <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
      <Image
        src="https://cdn-icons-png.flaticon.com/512/3128/3128310.png"
        alt={""}
        width={30}
        height={30}
      />
    </div>
  );
};
export default MediaLogo;
