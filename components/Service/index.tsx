import { motion } from "framer-motion";
import Button from "../Button";
import Image from "next/future/image";

export type ServiceProps = {
  imageUrl: string;
  title: string;
  subtitle: string;
  buttonText: string;
  isLeft: boolean;
};

const Service = ({
  imageUrl,
  title,
  subtitle,
  buttonText,
  isLeft = false,
}: ServiceProps) => {
  const detailClassName = `absolute lg:w-[550px] ${
    isLeft ? "left-0" : "right-0"
  } bottom-0 md:bottom-auto md:top-[50%] bg-blue-900 bg-opacity-90 rounded-lg p-5`;

  const detail = (
    <motion.div
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      className={detailClassName}
    >
      <h1 className="text-xl text-white">{title}</h1>
      <p className="text-yellow-500">{subtitle}</p>
      <div className="flex flex-row-reverse">
        <Button text={buttonText}></Button>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      className="relative"
      initial={{ scale: 0 }}
      viewport={{ once: true }}
      whileInView={{ scale: 1 }}
    >
      <Image
        width={1920}
        height={1080}
        className="w-full"
        src={imageUrl}
        alt={""}
      />
      {detail}
    </motion.div>
  );
};

export default Service;
