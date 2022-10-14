import Image from "next/future/image";

export type CardProps = {
  imageUrl: string;
  title: string;
  description: string;
};

const Card = ({ imageUrl, title, description }: CardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-3">
      <Image
        width={1920}
        height={1080}
        className="w-full"
        src={imageUrl}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
