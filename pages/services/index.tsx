import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Service from "../../components/Service";
import Image from "next/future/image";

const Services = () => {
  const { t } = useTranslation("services");
  const services = t("services", { returnObjects: true }) as any[];
  const technologies = t("technologies.imageUrls", {
    returnObjects: true,
  }) as any[];

  return (
    <>
      <Head>
        <title>MySol | Services</title>
      </Head>

      <div className="w-full self-center flex flex-col text-black">
        <h1 className="m-3 self-center text-3xl">
          <b>{t("title")}</b>
        </h1>
        <span className="text-xl self-center">{t("subtitle")}</span>
        {services.map((service: any, i: number) => (
          <Service
            key={i}
            imageUrl={service.imageUrl}
            title={service.title}
            subtitle={service.subtitle}
            buttonText={service.buttonText}
            isLeft={i % 2 != 0}
          ></Service>
        ))}

        <h1 className="m-3 self-center text-xl text-cyan-500 mt-24">
          <b>{t("technologies.title")}</b>
        </h1>
        <div className="flex flex-wrap max-w-[768px] self-center mb-10">
          {technologies.map((technology: any, i: number) => (
            <div
              key={i}
              className="w-[128px] h-[128px] rounded-[64px] p-8 m-3 bg-white flex items-center justify-center"
            >
              <Image
                width={1920}
                height={1080}
                // className="w-[128px] h-[128px] rounded-[64px] bg-white"
                src={technology}
                alt={""}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "services"])),
    },
  };
}

export default Services;
