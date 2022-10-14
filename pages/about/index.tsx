import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Card, { CardProps } from "../../components/Card";
import Clients from "../../components/Clients";
import ProfileIcon, { ProfileIconProps } from "../../components/ProfileIcon";
import { ArrayUtils } from "../../utils/array.utils";

const About = () => {
  const { t } = useTranslation("about");
  const businessOrganization: ProfileIconProps[] = t(
    "businessOrganization.participants",
    { returnObjects: true }
  );
  const myanmarTeamMembers: ProfileIconProps[] = t(
    "myanmarTeamMembers.participants",
    { returnObjects: true }
  );
  const partners: CardProps[] = t("partners.participants", {
    returnObjects: true,
  });

  return (
    <>
      <Head>
        <title>MySol | About</title>
      </Head>

      <div className="w-full lg:max-w-[1024px] self-center flex flex-col text-black">
        <h1 className="m-3 self-center text-3xl">
          <b>{t("title")}</b>
        </h1>

        <h1 className="text-2xl text-cyan-500">
          <b>{t("background.title")}</b>
        </h1>
        <p className="mb-5 text-justify">{t("background.description")}</p>

        <div className="flex flex-col lg:flex-row mb-32">
          <div className="flex flex-col">
            <h1 className="text-2xl text-cyan-500">
              <b>{t("about.title")}</b>
            </h1>
            <p className="text-justify mr-3">{t("about.description")}</p>
          </div>
          <img className="flex lg:w-1/2" src="/BC_ModernOffice.webp" />
        </div>

        <div className="flex flex-col mb-32 items-center">
          <h1 className="text-2xl text-cyan-500 mb-3">
            <b>{t("businessOrganization.title")}</b>
          </h1>
          <div className="flex justify-center flex-col md:flex-row items-center">
            {businessOrganization.map((participant: ProfileIconProps, i) => (
              <ProfileIcon
                key={i}
                imageUrl={participant.imageUrl}
                position={participant.position}
                name={participant.name}
              ></ProfileIcon>
            ))}
          </div>
        </div>

        <div className="flex flex-col mb-32">
          <h1 className="text-2xl text-cyan-500 self-center mb-5">
            <b>{t("myanmarTeamMembers.title")}</b>
          </h1>

          {ArrayUtils.splitArray(myanmarTeamMembers, 4).map(
            (participantArr, i) => (
              <div
                key={i}
                className="flex justify-center flex-col md:flex-row items-center"
              >
                {participantArr.map((participant: any, pid: number) => (
                  <ProfileIcon
                    key={pid}
                    imageUrl={participant.imageUrl}
                    position={participant.position}
                    name={participant.name}
                  ></ProfileIcon>
                ))}
              </div>
            )
          )}
        </div>

        <div className="flex flex-col mb-32 items-center">
          <h1 className="text-2xl text-cyan-500 mb-3">
            <b>Our Partners</b>
          </h1>
          <div className="flex justify-center flex-col md:flex-row items-center md:items-start">
            {partners.map((partner, i) => (
              <Card
                key={i}
                imageUrl={partner.imageUrl}
                title={partner.title}
                description={partner.description}
              ></Card>
            ))}
          </div>
        </div>

        <Clients></Clients>
      </div>
    </>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "about", "clients"])),
    },
  };
}

export default About;
