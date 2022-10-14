import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

const Contact = () => {
  const { t } = useTranslation("contact");

  return (
    <>
      <Head>
        <title>MySol | Contact</title>
      </Head>

      <iframe
        className="h-[300px]"
        src="https://maps.google.com/maps?q=Nawaday%20Street&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
      ></iframe>

      <div className="w-full lg:max-w-[1024px] self-center flex flex-col text-black">
        <h1 className="m-3 self-center text-3xl">
          <b>{t("title")}</b>
        </h1>

        <div className="shadow bg-cyan-100 p-5 flex flex-col items-center mb-5">
          <p>{t("message")}</p>
          <h1 className="text-xl m-5">{t("prompt")}</h1>
          <a href="https://forms.gle/LfaNn7v5DdAsWeps9">
            <a className="group bg-blue-500 hover:bg-blue-700 self-center rounded-md p-3 cursor-pointer text-center text-white">
              {t("buttonText")}
            </a>
          </a>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "contact"])),
    },
  };
}

export default Contact;
