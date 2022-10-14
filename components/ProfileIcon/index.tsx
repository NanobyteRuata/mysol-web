import Image from "next/future/image";
export type ProfileIconProps = {
  imageUrl: string;
  imageDiameter?: number;
  position: string;
  name: string;
};

const ProfileIcon = ({
  imageUrl,
  position,
  imageDiameter,
  name,
}: ProfileIconProps) => {
  const imageClass = `shadow rounded-full ${
    imageDiameter && isNaN(imageDiameter)
      ? `w-[${imageDiameter}px] h-[${imageDiameter}px]`
      : "w-[216px] h-[216px]"
  } align-middle border-none`;

  return (
    <div className="flex flex-col items-center m-5">
      <Image
        width={1920}
        height={1080}
        src={imageUrl}
        className="shadow rounded-full w-[216px] h-[216px] align-middle border-none"
        alt={""}
      />
      <h1 className="text-md text-center">
        <i>{position}</i>
      </h1>
      <h1 className="text-lg text-center">
        <b>{name}</b>
      </h1>
    </div>
  );
};

export default ProfileIcon;
