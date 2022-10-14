import Image from "next/future/image";
import { useTranslation } from "next-i18next";

const Clients = () => {
  const { t } = useTranslation("clients");
  const imageUrls: string[] = t("imageUrls", { returnObjects: true });

  return (
    <div>
      <h1 className="text-2xl text-cyan-500 text-center w-full mt-10 mb-5">
        <b>{t("title")}</b>
      </h1>
      <div className="flex items-center">
        {imageUrls.map((imageUrl, i) => (
          <Image
            width={1920}
            height={1080}
            key={i}
            className="w-1/3 h-auto p-3 opacity-80 hover:scale-110 hover:opacity-100 transition"
            src={imageUrl}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;
