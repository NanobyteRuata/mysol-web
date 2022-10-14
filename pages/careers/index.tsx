import {
  BanknotesIcon,
  ClockIcon,
  MapPinIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Button from "../../components/Button";
import Image from "next/future/image";

const Careers = () => {
  const { t } = useTranslation("career");

  return (
    <>
      <Head>
        <title>MySol | Careers</title>
      </Head>

      <div className="w-full lg:max-w-[1024px] self-center flex flex-col text-black">
        <h1 className="m-3 self-center text-3xl">
          <b>{t("title")}</b>
        </h1>

        <div className="flex flex-col items-center lg:flex-row lg:items-start">
          <Image
            width={1920}
            height={1080}
            className="lg:w-1/2"
            src={t("benefits.imageUrl")}
            alt={""}
          />
          <div className="flex flex-col lg:w-1/2 p-3">
            <h1 className="text-cyan-500 text-xl mb-3">
              {t("benefits.title")}
            </h1>
            <ul className="list-disc">
              {(t("benefits.details", { returnObjects: true }) as any[]).map(
                (detail, i) => (
                  <li className="ml-5" key={i}>
                    {detail}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Allowance and Welfare */}
        <div className="mb-10">
          <h1 className="text-2xl text-cyan-500 text-center w-full mt-10 mb-5">
            <b>{t("allowanceAndWelfareProgram.title")}</b>
          </h1>

          <div className="flex flex-col lg:flex-row">
            <div className="flex items-center lg:w-2/3">
              <Button
                text={t("allowanceAndWelfareProgram.basicSalaryTxt")}
              ></Button>
              <span className="mx-10 text-xl">+</span>
              <ul className="list-disc">
                {(
                  t("allowanceAndWelfareProgram.generalDetails", {
                    returnObjects: true,
                  }) as string[]
                ).map((detail, i) => (
                  <li key="i">{detail}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col lg:w-1/3 shadow drop-shadow-lg bg-white m-3 p-5">
              <div className="flex">
                <span className="w-1/4 text-cyan-500">
                  {t("allowanceAndWelfareProgram.workingPeriod.title")}
                </span>
                <span className="w-3/4">
                  {t("allowanceAndWelfareProgram.workingPeriod.detail")}
                </span>
              </div>
              <div className="flex">
                <span className="w-1/4 text-cyan-500">
                  {t("allowanceAndWelfareProgram.workingPlace.title")}
                </span>
                <span className="w-3/4">
                  {t("allowanceAndWelfareProgram.workingPlace.detail")}
                </span>
              </div>
              <div className="flex">
                <span className="w-1/4 text-cyan-500">
                  {t("allowanceAndWelfareProgram.holidays.title")}
                </span>
                <span className="w-3/4">
                  {t("allowanceAndWelfareProgram.holidays.detail")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Looking for */}
        <div className="mb-10">
          <h1 className="text-2xl text-cyan-500 text-center w-full mt-10 mb-5">
            <b>{t("lookingFor.title")}</b>
          </h1>

          <ul className="list-disc self-center">
            {(t("lookingFor.details", { returnObjects: true }) as any[]).map(
              (detail, i) => (
                <li className="ml-5" key={i}>
                  {detail}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Jobs */}
        <div className="mb-10">
          <h1 className="text-2xl text-cyan-500 text-center w-full mt-10 mb-5">
            <b>{t("jobOpportunities.title")}</b>
          </h1>
          {(t("jobOpportunities.jobs", { returnObjects: true }) as any[]).map(
            (job: any, i: number) => (
              <div className="shadow p-5 flex flex-col mb-3 bg-white">
                <div className="flex flex-col lg:flex-row self-stretch justify-between mb-5">
                  <h1 className="text-cyan-500 text-xl">
                    <MegaphoneIcon className="inline h-6 w-6 mr-2"></MegaphoneIcon>
                    {job.role}
                  </h1>
                  <span>
                    <BanknotesIcon className="inline h-6 w-6 mr-2"></BanknotesIcon>
                    {job.salary}
                  </span>
                  <span>
                    <ClockIcon className="inline h-6 w-6 mr-2"></ClockIcon>
                    {job.type}
                  </span>
                  <span>
                    <MapPinIcon className="inline h-6 w-6 mr-2"></MapPinIcon>
                    {job.location}
                  </span>
                </div>
                <ul className="list-disc">
                  {(job.jobDescription as string[]).map(
                    (jd: any, i: number) => (
                      <li key={i} className="ml-5">
                        {jd}
                      </li>
                    )
                  )}
                </ul>
                <div className="self-stretch flex flex-row-reverse">
                  <a href={job.applyUrl}>
                    <Button text="Apply Now"></Button>
                  </a>
                  <a
                    className="mr-5 underline text-cyan-500"
                    href={job.detailsUrl}
                  >
                    Details
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "career"])),
    },
  };
}

export default Careers;
