import type { NextPage } from "next";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Carousel, { SlideImage } from "../components/Carousel";
import Clients from "../components/Clients";
import Image from "next/future/image";
import React from "react";
import NavLink from "../components/NavLink";

const Home: NextPage = () => {
  const { t } = useTranslation("home");

  return (
    <>
      <Head>
        <title>MySol | Home</title>
        <meta name="description" content="MySol Website" />
        <link rel="icon" href="/logo.webp" />
      </Head>

      <Carousel slideImages={t("carousel", { returnObjects: true })}></Carousel>

      {/* Quotes Section */}
      <div className="relative overflow-hidden">
        <Image
          width={1920}
          height={1080}
          className="w-auto lg:w-full min-h-[400px]"
          src={t("quote.imageUrl")}
          alt={""}
        />
        <div className="absolute left-0 top-0 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-70">
          <h1 className="text-lg lg:text-2xl text-center w-full my-3 lg:my-10 lg:mx-24">
            <i>
              <b>{t("quote.title")}</b>
            </i>
          </h1>
          <p className="text-md lg:mx-24 m-4 text-justify">
            {t("quote.subtitle")}
          </p>
          <NavLink href="services" text={t("quote.actionText")}></NavLink>
        </div>
      </div>

      {/* Customers Section */}
      <Clients></Clients>
    </>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "home", "clients"])),
  },
});

export default Home;
